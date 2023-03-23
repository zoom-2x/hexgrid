// ----------------------------------------------------------------------------------
// -- HexMap struct.
// ----------------------------------------------------------------------------------

import HexConstants from 'hex_constants';
import HexSetup from 'hex_setup';
import HexTile from 'hex_tile';
import HexStyle from 'hex_style';
import HexContainer from 'hex_container';

var HexMap = function(hex_setup, width, height, rows, cols, canvas_id)
{
    this.hex_setup = hex_setup;

    this.rows = rows;
    this.cols = cols;

    this.scroll_x = 0;
    this.scroll_y = 0;
    this.scroll_speed = 2;

    this.cursor = [0, 0];

    this.selected_tile = false;
    this.over_tile = false;

    this.canvas_id = canvas_id;
    this.map_screen = document.getElementById(canvas_id);
    this.ctx = this.map_screen.getContext('2d');

    this.map_screen.addEventListener('mousemove', this.e_mouse_move.bind(this));
    this.map_screen.addEventListener('click', this.e_mouse_click.bind(this));
    this.map_screen.addEventListener('keyup', this.e_keyup.bind(this));
    this.map_screen.addEventListener('keydown', this.e_keydown.bind(this));

    this.map_screen.width = width;
    this.map_screen.height = height;
    this.tile_group = false;
    this.tiles = false;

    this.keyboard = {
        up: false,
        down: false,
        left: false,
        right: false
    };

    this.listeners =
    {
        click: [],
        mousemove: []
    };

    this._generate_map_tiles();
};

HexMap.get_color = function(color_flag)
{
    var color = 'rgb(255, 255, 255)';
    var index = 0;

    while (color_flag)
    {
        color_flag = color_flag >> 1;
        index++;
    }

    if (index)
        color = HexConstants.COLORS[index - 1];

    return color;
};

// ----------------------------------------------------------------------------------
// -- Methods.
// ----------------------------------------------------------------------------------

HexMap.prototype._generate_map_tiles = function()
{
    this.tile_group = new HexContainer(this, 'Base tile group');
    this.tiles = new Array(this.rows);

    for (var row = 0; row < this.rows; ++row)
    {
        this.tiles[row] = new Array(this.cols);

        for (var col = 0; col < this.cols; ++col)
        {
            var real_hex = this.hex_setup.virtual_to_real(row, col);
            var tile = new HexTile(real_hex[0], real_hex[1]);

            this.tiles[row][col] = tile;
            this.tile_group.push_tile(tile);
        }
    }
};

HexMap.prototype.add_listener = function(name, listener)
{
    if (!name || Object.prototype.toString.call(listener) != '[object Function]')
        return;

    if (this.listeners.hasOwnProperty(name))
        this.listeners[name].push(listener);
};

HexMap.prototype._tile = function(tile)
{
    if (Object.prototype.toString.call(tile) == '[object Array]') {
        tile = this.get_tile_real(tile);
    }

    return tile;
};

HexMap.prototype.reset_visited = function()
{
    for (var row = 0; row < this.rows; ++row)
    {
        for (var col = 0; col < this.cols; ++col)
        {
            var tile = this.tiles[row][col];
            tile.unset_flag(HexTile.FLAG_VISITED);
        }
    }
};

// Returns a new hex based on a starting hex and a direction.
HexMap.prototype.hex_step = function(row, col, edge)
{
    var new_hex_coordinates = this.hex_setup.step(row, col, edge);

    if (this.valid_hex(new_hex_coordinates[0], new_hex_coordinates[1]))
        return this.get_tile_real(new_hex_coordinates[0], new_hex_coordinates[1]);

    return false;
};

/**
 * Virtual hex coordinates.
 *
 * @param {int} row
 * @param {int} col
 */
HexMap.prototype.get_tile = function(row, col)
{
    if (row >= 0 && row < this.rows && col >= 0 && col < this.cols)
        return this.tiles[row][col];

    return false;
};

/**
 * Real hex coordinates.
 *
 * @param {int} row
 * @param {int} col
 */
HexMap.prototype.get_tile_real = function(row, col)
{
    if (this.valid_hex(row, col))
    {
        var virtual_hex = this.hex_setup.real_to_virtual(row, col);
        return this.tiles[virtual_hex[0]][virtual_hex[1]];
    }

    return false;
};

HexMap.prototype.get_tile_area = function(tile)
{
    tile = this._tile(tile);

    if (tile)
        return (tile.area_flags & HexConstants.AREA_MASK);

    return false;
};

HexMap.prototype.set_tile_area = function(tile, code)
{
    tile = this._tile(tile);
    code = HexConstants.AREA_MASK & code;

    // The code is valid.
    if (code)
    {
        tile.area_flags |= code;
        return true;
    }

    return false;
};

HexMap.prototype.set_tile_color = function(tile, code)
{
    tile = this._tile(tile);
    code = HexConstants.COLOR_MASK & code;

    // The code is valid.
    if (code)
    {
        tile.color_flags |= code;
        return true;
    }

    return false;
};

/**
 * Returns a neighouring tile specified by an edge (direction).
 *
 * @param {HexTile} tile
 * @param {int} edge
 * @return {bool|HexTile}
 */
HexMap.prototype.get_neighbour = function(tile, edge)
{
    tile = this._tile(tile);

    if (tile && HexSetup.valid_edge(edge))
    {
        var edge_tile = this.hex_step(tile.row, tile.col, edge);

        if (edge_tile)
            return edge_tile;
    }

    return false;
};

/**
 * Returns all the valid neighbouring tiles for a specified tile.
 *
 * @param {HexTile} tile
 * @return {array}
 */
HexMap.prototype.get_neighbours = function(tile, group)
{
    var list = [];
    tile = this._tile(tile);

    // Edges.
    for (var i = 0; i < 6; ++i)
    {
        var edge_tile = this.get_neighbour(tile, i);
        var use_group = true;

        if (group && group >= 0 && !tile.has_group(group))
            use_group = false;

        if (edge_tile && !edge_tile.flag(HexTile.FLAG_DISABLED) && use_group)
        {
            list.push({
                tile: edge_tile,
                edge_id: i
            });
        }
    }

    return list;
};

/**
 * Checks if the tile is on the map border (counting the disabled tiles also).
 *
 * @param {array|object} tile
 * @return {bool}
 */
HexMap.prototype.is_tile_on_border = function(tile, group)
{
    tile = this._tile(tile);

    if (tile)
    {
        for (var i = 0; i < HexConstants.EDGE_COUNT; ++i)
        {
            var edge_tile = this.hex_step(tile.row, tile.col, i);

            if (!edge_tile || edge_tile.flag(HexTile.FLAG_DISABLED) ||
                (group && group >= 0 && !edge_tile.has_group(group)))
                return true;
        }
    }

    return false;
};

/**
 * Checks if the specified edge is a the border.
 *
 * @param {array|object} tile
 * @param {int} edge
 * @return {bool}
 */
HexMap.prototype.is_border_edge = function(tile, edge, group)
{
    tile = this._tile(tile);
    var neighbour_tile = this.get_neighbour(tile, edge);

    if (!neighbour_tile)
        return true;

    // This is a border when either the tile is disabled or the
    // tile's group is different from the one specified as a parameter.

    var border_check = neighbour_tile.flag(HexTile.FLAG_DISABLED);

    if (group && group >= 0)
        border_check = border_check || !neighbour_tile.has_group(group);

    return border_check;
};

/**
 * Return the border edges (as screen points) of the specified tile.
 *
 * @param {array|object} tile
 * @return {array}
 */
HexMap.prototype.border_edges = function(tile, group)
{
    var list = [];
    tile = this._tile(tile);

    if (tile)
    {
        var channels = [];

        // First find the channels (transition edges).
        for (var i = 0; i < 6; ++i)
        {
            if (!this.is_border_edge(tile, i, group))
                channels.push(i);
        }

        // Partial border chains.
        if (channels.length)
        {
            for (var i = 0; i < channels.length; ++i)
            {
                var current_edge_id = channels[i];
                var next_edge_id = channels[(i + 1) % channels.length];

                if ((current_edge_id + 1) % 6 == next_edge_id)
                    continue;

                var start = current_edge_id + 1;
                var end = next_edge_id;

                if (start > end)
                    end += 6;

                var tmp = [];

                for (var j = start; j < end; ++j)
                {
                    var edge = this.hex_setup.edge_points(tile.row, tile.col, (j % 6));
                    tmp.push(edge);
                }

                list.push(tmp);
            }
        }
        // Full border chain.
        else
        {
            var tmp = [];

            for (var i = 0; i < 6; ++i)
            {
                var edge = this.hex_setup.edge_points(tile.row, tile.col, i);
                tmp.push(edge);
            }

            list.push(tmp);
        }
    }

    return list;
};

/**
 * @param {array} list Virtual tile coordinates.
 */
HexMap.prototype.disable_tiles = function(list)
{
    for (var i = 0; i < list.length; ++i)
    {
        var tile_coordinates = list[i];
        var tile = this.tiles[tile_coordinates[0]][tile_coordinates[1]];
        tile.set_flag(HexTile.FLAG_DISABLED);
    }
};

HexMap.prototype.screen_to_map = function(point) {
    return [point[0] + this.scroll_x, point[1] + this.scroll_y];
};

HexMap.prototype.map_to_screen = function(point) {
    return [point[0] - this.scroll_x, point[1] - this.scroll_y];
};

HexMap.prototype.valid_hex = function(row, col)
{
    var virtual_hex = this.hex_setup.real_to_virtual(row, col);
    return virtual_hex[0] >= 0 && virtual_hex[0] < this.rows && virtual_hex[1] >= 0 && virtual_hex[1] < this.cols;
};

/**
 * Tile display style based on it's specified groups.
 */
// HexMap.prototype.set_tile_style = function(tile, force)
// {
//     if (!tile.style._changed || force)
//     {
//         for (var i = 0; i < tile.groups.length; ++i)
//         {
//             var group_id = tile.groups[i];

//             if (group_id)
//                 tile.style.merge(this.groups[group_id].style);
//         }
//     }

//     return this.style;
// };

HexMap.prototype.get_screen_point = function(event)
{
    var rect = this.map_screen.getBoundingClientRect();
    var point = [0, 0];

    point[0] = Math.floor(event.clientX - rect.left);
    point[1] = Math.floor(event.clientY - rect.top);

    return point;
};

HexMap.prototype.scroll = function()
{
    if (this.left)
        this.scroll_x -= this.scroll_speed;
    if (this.right)
        this.scroll_x += this.scroll_speed;
    if (this.up)
        this.scroll_y -= this.scroll_speed;
    if (this.down)
        this.scroll_y += this.scroll_speed;
};

HexMap.prototype.e_keyup = function(event)
{
    if (event.key == 'a')
        this.left = false;
    else if (event.key == 'd')
        this.right = false;
    else if (event.key == 'w')
        this.up = false;
    else if (event.key == 's')
        this.down = false;
};

HexMap.prototype.e_keydown = function(event)
{
    if (event.key == 'a')
        this.left = true;
    else if (event.key == 'd')
        this.right = true;
    else if (event.key == 'w')
        this.up = true;
    else if (event.key == 's')
        this.down = true;
};

HexMap.prototype.e_mouse_move = function(event)
{
    var point = this.screen_to_map(this.get_screen_point(event));
    var real_hex_coordinates = this.hex_setup.point_inside(point[0], point[1]);
    this.over_tile = this.get_tile_real(real_hex_coordinates[0], real_hex_coordinates[1]);
};

HexMap.prototype.e_mouse_click = function(event)
{
    var self = this;
    var point = this.screen_to_map(this.get_screen_point(event));
    var real_hex_coordinates = this.hex_setup.point_inside(point[0], point[1]);
    this.selected_tile = this.get_tile_real(real_hex_coordinates[0], real_hex_coordinates[1]);

    this.listeners.click.forEach(function(listener) {
        listener(self.selected_tile);
    });
};

HexMap.prototype.draw_hex = function(tile, selection_level)
{
    var over = false;

    if (this.over_tile)
    {
        if (selection_level)
        {
            var over_tile_group = this.over_tile.level_group(selection_level);

            if (over_tile_group && tile.has_group(over_tile_group.id))
                over = true;
        }
        else if (this.over_tile.equals(tile))
            over = true;
    }

    // NOTE(gabic): Poate o alta afisare pentru cele dezactivate ?
    if (tile.flag(HexTile.FLAG_DISABLED))
        return;

    var center = this.hex_setup.hex_to_pixel(tile.row, tile.col);
    var points = this.hex_setup.points(tile.row, tile.col);

    // var group = this.get_group(group_id);
    tile.merge_styles();

    this.ctx.save();
    this.ctx.strokeStyle = tile.style.get('line_color');
    this.ctx.fillStyle = tile.style.get('tile_color');
    this.ctx.lineWidth = tile.style.get('line_width');

    var dashed_style = tile.style.get('dashed_line');

    // if (dashed_style)
    //     this.ctx.setLineDash(dashed_style);

    if (over)
    {
        this.ctx.fillStyle = tile.style.get('hover_color');
        this.ctx.strokeStyle = tile.style.get('line_hover_color');
    }

    this.ctx.beginPath();

    // -- Hex.

    for (var i = 0; i < points.length; ++i)
    {
        var p = this.map_to_screen(points[i]);

        p[0] -= 0.5;
        p[1] -= 0.5;

        if (i == 0)
            this.ctx.moveTo(p[0], p[1]);
        else
            this.ctx.lineTo(p[0], p[1]);
    }

    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.stroke();

    // -- Debug labels.

    if (false)
    {
        var center_screen = this.map_to_screen(center);
        var virtual_hex = this.hex_setup.real_to_virtual(tile.row, tile.col);
        var real_text = 'R: {' + tile.row + ', ' + tile.col + '}';
        var virtual_text = 'V: {' + virtual_hex[0] + ', ' + virtual_hex[1] + '}';

        this.ctx.font = tile.style.get('font');
        this.ctx.fillStyle = tile.style.get('font_color');

        if (over)
            this.ctx.fillStyle = tile.style.get('font_hover_color');

        var real_text_data = this.ctx.measureText(real_text);
        var virtual_text_data = this.ctx.measureText(virtual_text);

        var offset_0 = real_text_data.width * 0.5;
        var offset_1 = virtual_text_data.width * 0.5;

        this.ctx.fillText(real_text, center_screen[0] - offset_0, center_screen[1] - 3);
        this.ctx.fillText(virtual_text, center_screen[0] - offset_1, center_screen[1] + 10);
    }

    this.ctx.restore();
};

export default HexMap;