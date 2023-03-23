// ----------------------------------------------------------------------------------
// -- Hex container struct.
// ----------------------------------------------------------------------------------

import HexMath from 'hex_math';
import HexTile from 'hex_tile';
import HexHelper from 'hex_helper';
import HexStyle from 'hex_style';

var _container_id = 0;

var HexContainer = function(hexmap, name, level)
{
    this.id = _container_id++;
    this.level = level || HexContainer.LEVEL_0;
    this.name = name || 'Default name';
    this.hexmap = hexmap;
    this.tiles = [];
    this.borders = [];
    this.border_tiles = [];
    this.box = {min: [0, 0], max: [0, 0]};
    this.group_center = [0, 0];

    this.style = new HexStyle();
};

HexContainer.LEVEL_0 = 0;
HexContainer.LEVEL_1 = 1;
HexContainer.LEVEL_2 = 2;
HexContainer.LEVEL_3 = 3;
HexContainer.LEVEL_4 = 4;
HexContainer.LEVEL_COUNT = 5;

HexContainer.prototype.set_style = function(style)
{
    if (Object.prototype.toString.call(style) == '[object Object]')
    {
        for (var name in style)
        {
            if (this.style.hasOwnProperty(name))
                this.style[name] = style[name];
        }
    }
};

var _partition = function(list, left, right)
{
    var i = left;
    var j = right - 1;
    var pivot = list[right].id;
    var tmp = false;

    while (i < j)
    {
        while (i < right && list[i].id < pivot)
            ++i;

        while (j > left && list[j].id >= pivot)
            --j;

        if (i < j)
        {
            tmp = list[i];
            list[i] = list[j];
            list[j] = tmp;
        }
    }

    if (list[i].id > pivot)
    {
        tmp = list[i];
        list[i] = list[right];
        list[right] = tmp;
    }

    return i;
};

var _quicksort = function(list, left, right)
{
    if (left >= right)
        return;

    var pivot_index = _partition(list, left, right);

    _quicksort(list, left, pivot_index - 1);
    _quicksort(list, pivot_index + 1, right);
};

// Quicksort.
HexContainer.prototype.sort = function() {
    _quicksort(this.tiles, 0, this.tiles.length - 1);
};

// Binary search.
HexContainer.prototype.find = function(tile_id)
{};

HexContainer.prototype.remove = function(tile_id)
{
    var index = this.find(tile_id);

    if (index >= 0)
    {
        this.tiles[index].remove_group(this.id);
        this.tiles.splice(index, 1);
    }
};

/**
 * @param {HexTile} tile
 * @param {bool} sort
 */
HexContainer.prototype.push_tile = function(tile, sort)
{
    tile.set_group(this);
    this.tiles.push(tile);

    if (sort)
        this.sort();
};

/**
 * @param {HexTile} tile
 * @param {bool} sort
 */
HexContainer.prototype.push_tiles = function(tiles, sort)
{
    if (Object.prototype.toString.call(tiles) != '[object Array]')
        return;

    for (var i = 0; i < tiles.length; ++i) {
        this.push_tile(tiles[i], sort);
    }
};

var _find_start_tile = function(list)
{
    var index = 0;
    var tile = false;

    while (index < list.length && !tile)
    {
        var tile = list[index++];

        if (tile.flag(HexTile.FLAG_DISABLED))
            tile = false;
    }

    return tile;
};

/**
 * Generate the edge borders for the tiles inside this container.
 */
HexContainer.prototype.generate_borders = function()
{
    this.borders.length = 0;
    this.border_tiles.length = 0;

    if (!this.tiles.length)
        return false;

    this.sort();
    this.hexmap.reset_visited();

    var tile_queue = [];
    var edge_links = [];
    var start_tile = _find_start_tile(this.tiles);

    if (start_tile)
    {
        tile_queue.push(start_tile);

        // ----------------------------------------------------------------------------------
        // -- Flood fill border edge discovery.
        // ----------------------------------------------------------------------------------

        while (tile_queue.length)
        {
            var current_tile = tile_queue.shift();
            var virtual_hex = this.hexmap.hex_setup.real_to_virtual(current_tile.row, current_tile.col);
            var neighbours = this.hexmap.get_neighbours(current_tile, this.id);

            var tile_on_border = this.hexmap.is_tile_on_border(current_tile, this.id);
            current_tile.set_flag(HexTile.FLAG_VISITED);

            if (tile_on_border)
                this.border_tiles.push(current_tile);

            // Push the valid neighbours in the tile_queue.
            for (var i = 0; i < neighbours.length; ++i)
            {
                var neighbour = neighbours[i];
                var neighbour_virtual_hex = this.hexmap.hex_setup.real_to_virtual(neighbour.tile.row, neighbour.tile.col);

                if (!neighbour.tile.flag(HexTile.FLAG_VISITED) && neighbour.tile.has_group(this.id))
                    tile_queue.push(neighbour.tile);

                neighbour.tile.set_flag(HexTile.FLAG_VISITED);
            }

            // Attach the border edges.
            var edges = this.hexmap.border_edges(current_tile, this.id);

            for (var i = 0; i < edges.length; ++i) {
                edge_links.push(edges[i]);
            }
        }

        // ----------------------------------------------------------------------------------
        // -- Link the found edges.
        // ----------------------------------------------------------------------------------

        if (edge_links.length)
        {
            var border = [];
            var chain_queue = [];

            for (var i = 0; i < edge_links.length; ++i) {
                chain_queue.push(i);
            }

            while (chain_queue.length)
            {
                var index = chain_queue.shift();
                var link = edge_links[index];

                if (!border.length)
                {
                    for (var i = 0; i < link.length; ++i) {
                        border.push(link[i]);
                    }
                }
                else
                {
                    var border_front = border[border.length - 1];
                    var border_end = border[0];

                    var link_front = link[link.length - 1];
                    var link_end = link[0];

                    // Check if the link matches the current border.
                    if (HexHelper.points_equal(border_front[1], link_end[0]))
                    {
                        for (var k = 0; k < link.length; ++k)
                        {
                            var edge = link[k];
                            border.push(edge);
                        }
                    }
                    else if (HexHelper.points_equal(border_end[0], link_front[1]))
                    {
                        for (var k = link.length - 1; k >= 0; --k)
                        {
                            var edge = link[k];
                            border.unshift(edge);
                        }
                    }
                    else
                        chain_queue.push(index);

                    // Check if the border is complete.
                    if (HexHelper.points_equal(border[border.length - 1][1], border[0][0]))
                    {
                        this.borders.push(border);
                        border = [];
                    }
                }
            }
        }
    }

    // -- Compute a median center based on the border tiles.

    this.group_center[0] = 0;
    this.group_center[1] = 0;

    this.box.min[0] = Number.MAX_VALUE;
    this.box.min[1] = Number.MAX_VALUE;
    this.box.max[0] = Number.MIN_VALUE;
    this.box.max[1] = Number.MIN_VALUE;

    for (var i = 0; i < this.border_tiles.length; ++i)
    {
        var tile = this.border_tiles[i];
        var center = this.hexmap.hex_setup.hex_to_pixel(tile.row, tile.col);

        this.group_center[0] += center[0];
        this.group_center[1] += center[1];
    }

    this.group_center[0] /= this.border_tiles.length;
    this.group_center[1] /= this.border_tiles.length;

    this.group_center[0] = Math.floor(this.group_center[0]);
    this.group_center[1] = Math.floor(this.group_center[1]);
};

HexContainer.prototype.draw_title = function(ctx)
{
    ctx.save();

    var font_transform = this.style.get('font_transform');
    ctx.font = this.style.get('font');
    ctx.fillStyle = this.style.get('font_color');

    var text_data = ctx.measureText(this.name);
    var text_offset = text_data.width * 0.5;

    var x = this.group_center[0] - text_offset + font_transform[0];
    var y = this.group_center[1] + font_transform[1];

    var tx = this.group_center[0] + font_transform[0];
    var ty = this.group_center[1] + font_transform[1];

    var p = this.hexmap.map_to_screen([x, y]);
    var pt = this.hexmap.map_to_screen([tx, ty]);

    ctx.translate(pt[0], pt[1]);
    ctx.rotate(HexMath.deg2rad(font_transform[2]));
    ctx.translate(-pt[0], -pt[1]);

    ctx.fillText(this.name, p[0], p[1]);

    ctx.restore();
};

HexContainer.prototype.draw_group_borders = function(ctx)
{
    for (var i = 0; i < this.borders.length; ++i)
    {
        ctx.save();
        ctx.strokeStyle = this.style.get('border_color');
        ctx.lineWidth = this.style.get('border_width');
        var dashed_style = this.style.get('dashed_line');

        // if (dashed_style)
        //     ctx.setLineDash(dashed_style);

        ctx.beginPath();

        var edge_list = this.borders[i];

        for (var j = 0; j < edge_list.length - 1; ++j)
        {
            var edge = edge_list[j];
            var p0 = edge[0];
            var p1 = edge[1];

            p0 = this.hexmap.map_to_screen(p0);
            p1 = this.hexmap.map_to_screen(p1);

            if (j == 0)
                ctx.moveTo(p0[0], p0[1]);

            ctx.lineTo(p1[0], p1[1]);
        }

        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    }
};

export default HexContainer;