// ----------------------------------------------------------------------------------
// -- Hex area.
// ----------------------------------------------------------------------------------

import HexConstants from 'hex_constants';
import { LinkedList } from 'hex_ds';
import HexMap from 'hex_map';

var HexArea = function(hexmap)
{
    this.hexmap = hexmap;
    this.hexmap.areas.push(this);

    this.tiles = [];
    this.borders = [];
    this.border_tiles = [];

    this.border_path_0 = [];
    this.border_path_1 = [];

    this.path_edges_0 = [];
    this.path_edges_1 = [];

    this.area_flag = 0;
    this.color_flag = 0;
};

HexArea.prototype.set_flags = function(area_flag, color_flag)
{
    this.area_flag = area_flag;
    this.color_flag = color_flag;
};

HexArea.prototype.hex_exists = function(real_hex)
{
    var code = this.hexmap.get_tile_area(real_hex);

    if (!code)
        return true;

    return false;
};

HexArea.prototype.push_hex = function(real_hex)
{
    if (this.hex_exists(real_hex) && this.hexmap.valid_hex(real_hex))
    {
        this.hexmap.set_tile_area(real_hex, this.area_flag);
        this.hexmap.set_tile_color(real_hex, this.color_flag);
        this.tiles.push(real_hex);

        return true;
    }

    return false;
};

HexArea.prototype.remove_hex = function(real_hex)
{
    for (var i = 0; i < this.tiles.length; ++i)
    {
        var search_hex = this.tiles[i];

        if (search_hex[0] == real_hex[0] && search_hex[1] == real_hex[1])
        {
            this.tiles.splice(i, 1);
            return true;
        }
    }

    for (var i = 0; i < this.border_tiles.length; ++i)
    {
        var search_hex = this.border_tiles[i];

        if (search_hex[0] == real_hex[0] && search_hex[1] == real_hex[1])
        {
            this.border_tiles.splice(i, 1);
            return true;
        }
    }

    return false;
};

HexArea.prototype.is_linked = function(real_hex, edge)
{
    var tile = this.hexmap.get_tile_real(real_hex);
    var edge_tile = this.hexmap.get_neighbour(real_hex, edge);

    return (tile.area_flags & edge_tile.area_flags) > 0;
};

HexArea.prototype.get_transition_edge = function(current_edge)
{
    var previous_edge = HexMap.previous_edge(current_edge);
    var transition_edge = HexConstants.EDGE_SE;

    switch (current_edge)
    {
        case HexConstants.EDGE_SE:
            transition_edge = HexConstants.EDGE_W;
            break;

        case HexConstants.EDGE_E:
            transition_edge = HexConstants.EDGE_SW;
            break;

        case HexConstants.EDGE_NE:
            transition_edge = HexConstants.EDGE_SE;
            break;

        case HexConstants.EDGE_NW:
            transition_edge = HexConstants.EDGE_E;
            break;

        case HexConstants.EDGE_W:
            transition_edge = HexConstants.EDGE_NE;
            break;

        case HexConstants.EDGE_SW:
            transition_edge = HexConstants.EDGE_NW;
            break;
    }

    return transition_edge;
};

HexArea.prototype.generate_borders = function()
{
    this.borders.length = 0;

    if (!this.tiles.length)
        return false;

    this.hexmap.reset_visited();

    var tile_queue = [];
    var edge_links = [];
    var start_tile = this.hexmap.get_tile_real(this.tiles[0]);

    if (start_tile)
    {
        tile_queue.push(start_tile);

        // ----------------------------------------------------------------------------------
        // -- Flood fill border edge discovery.
        // ----------------------------------------------------------------------------------

        while (tile_queue.length)
        {
            var current_tile = tile_queue.shift();
            var neighbours = this.hexmap.get_neighbours(current_tile.real_hex);

            HexMap.set_flag(current_tile, HexConstants.FLAG_VISITED);

            // Push the valid neighbours in the tile_queue.
            for (var i = 0; i < neighbours.length; ++i)
            {
                var neighbour = neighbours[i];

                if (!HexMap.flag(neighbour.tile, HexConstants.FLAG_VISITED) && neighbour.tile.area_flags & current_tile.area_flags)
                    tile_queue.push(neighbour.tile);

                neighbour.tile.general_flags |= HexConstants.FLAG_VISITED;
            }

            // Attach the border edges.
            var edges = this.hexmap.border_edges(current_tile);

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
                    if (HexMap.points_equal(border_front[1], link_end[0]))
                    {
                        for (var k = 0; k < link.length; ++k)
                        {
                            var edge = link[k];
                            border.push(edge);
                        }
                    }
                    else if (HexMap.points_equal(border_end[0], link_front[1]))
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
                    if (HexMap.points_equal(border[border.length - 1][1], border[0][0]))
                    {
                        this.borders.push(border);
                        border = [];
                    }
                }
            }
        }
    }
};

export default HexArea;
