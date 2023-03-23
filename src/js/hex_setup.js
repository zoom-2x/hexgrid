// ----------------------------------------------------------------------------------
// -- Hex setup struct.
// ----------------------------------------------------------------------------------

import HexConstants from 'hex_constants';
import HexMath from 'hex_math';
import HexHelper from 'hex_helper';

/**
 * Transformation matrices.
 */
var _hex_matrices = function(hex_setup)
{
    a1 = [1, 0];
    a2 = [0, 1];

    if (hex_setup.type == HexSetup.TYPE_POINTY)
    {
        var a1 = [2 * hex_setup.r[1], 0];
        var a2 = [hex_setup.r[1], hex_setup.r[0] + hex_setup.r[2] * 0.5];
    }
    else if (hex_setup.type == HexSetup.TYPE_FLAT)
    {
        var a2 = [0, 2 * hex_setup.r[1]];
        var a1 = [hex_setup.r[0] + hex_setup.r[2] * 0.5, hex_setup.r[1]];
    }

    hex_setup.a1_len = HexMath.vec_len(a1);
    hex_setup.a2_len = HexMath.vec_len(a2);

    hex_setup.m[0][0] = a1[0];
    hex_setup.m[1][0] = a1[1];

    hex_setup.m[0][1] = a2[0];
    hex_setup.m[1][1] = a2[1];

    hex_setup.m[0][2] = hex_setup.tx;
    hex_setup.m[1][2] = hex_setup.ty;

    hex_setup.mi = HexMath.mat_inverse(hex_setup.m);
};

/**
 * Offsets used to generate the hex point coordinates from it's center.
 */
var _hex_point_offsets = function(hex_setup)
{
    if (hex_setup.type == HexSetup.TYPE_POINTY)
    {
        // Starting edge: se.
        hex_setup.point_offsets = [
            [0, hex_setup.r[0]],
            [hex_setup.r[1], hex_setup.r[2] * 0.5],
            [hex_setup.r[1], -hex_setup.r[2] * 0.5],
            [0, -hex_setup.r[0]],
            [-hex_setup.r[1], -hex_setup.r[2] * 0.5],
            [-hex_setup.r[1], hex_setup.r[2] * 0.5]
        ];
    }
    else if (hex_setup.type == HexSetup.TYPE_FLAT)
    {
        // Starting edge: se.
        hex_setup.point_offsets = [
            [hex_setup.r[2] * 0.5, hex_setup.r[1]],
            [hex_setup.r[0], 0],
            [hex_setup.r[2] * 0.5, -hex_setup.r[1]],
            [-hex_setup.r[2] * 0.5, -hex_setup.r[1]],
            [-hex_setup.r[0], 0],
            [-hex_setup.r[2] * 0.5, hex_setup.r[1]]
        ];
    }
};

var _hex_edge_offsets = function(hex_setup)
{
    if (hex_setup.type == HexSetup.TYPE_POINTY)
    {
        hex_setup.edge_offsets = [
            [1, 0],
            [0, 1],
            [-1, 1],
            [-1, 0],
            [0, -1],
            [1, -1]
        ];
    }

    else if (hex_setup.type == HexSetup.TYPE_FLAT)
    {
        hex_setup.edge_offsets = [
            [0, 1],
            [-1, 1],
            [-1, 0],
            [0, -1],
            [1, -1],
            [1, 0],
        ];
    }
};

/**
 *
 * @param {int} r1
 * @param {int} r2
 * @param {int} r3
 *
 * @param {int} tx
 * @param {int} ty
 */
var HexSetup = function(type, r1, r2, r3, tx, ty)
{
    if (type < HexSetup.TYPE_POINTY || type > HexSetup.TYPE_FLAT)
        type = HexSetup.TYPE_POINTY;

    tx = tx || 0;
    ty = ty || 0;

    this.type = type;

    this.tx = tx;
    this.ty = ty;

    this.a1_len = 0;
    this.a2_len = 0;

    if (r3 % 2)
        r3++;

    this.r = [r1, r2, r3];

    this.m = [[1, 0, tx], [0, 1, ty], [0, 0, 1]];
    this.mi = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];

    this.point_offsets = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];
    this.edge_offsets = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];

    this.setup();
};

HexSetup.TYPE_POINTY = 0;
HexSetup.TYPE_FLAT = 1;

// General.
HexSetup.EDGE_0 = 0;
HexSetup.EDGE_1 = 1;
HexSetup.EDGE_2 = 2;
HexSetup.EDGE_3 = 3;
HexSetup.EDGE_4 = 4;
HexSetup.EDGE_5 = 5;

// Pointy.
HexSetup.EDGE_SE = 0;
HexSetup.EDGE_E = 1;
HexSetup.EDGE_NE = 2;
HexSetup.EDGE_NW = 3;
HexSetup.EDGE_W = 4;
HexSetup.EDGE_SW = 5;

// Flat.
HexSetup.EDGE_SE = 0;
HexSetup.EDGE_NE = 1;
HexSetup.EDGE_N = 2;
HexSetup.EDGE_NW = 3;
HexSetup.EDGE_SW = 4;
HexSetup.EDGE_S = 5;

HexSetup.EDGE_COUNT = 6;

var EDGE_NAMES = [
    ['se', 'e', 'ne', 'nw', 'w', 'sw'],
    ['se', 'ne', 'n', 'nw', 'sw', 's']
];

HexSetup.valid_edge = function(edge_id) {
    return (edge_id >= 0 && edge_id < HexSetup.EDGE_COUNT);
};

HexSetup.previous_edge = function(edge_id)
{
    edge_id %= HexSetup.EDGE_COUNT;

    if (edge_id == 0)
        edge_id = HexSetup.EDGE_COUNT - 1;
    else
        edge_id--;

    return edge_id;
};

HexSetup.next_edge = function(edge) {
    return ((edge + 1) % HexSetup.EDGE_COUNT);
};

// ----------------------------------------------------------------------------------
// -- Methods.
// ----------------------------------------------------------------------------------

HexSetup.prototype.setup = function()
{
    _hex_point_offsets(this);
    _hex_edge_offsets(this);
    _hex_matrices(this);
};

/**
 * Returns the name of the specified edge.
 *
 * @param {int} edge
 * @return {string}
 */
HexSetup.prototype.edge_name = function(edge_id)
{
    edge_id %= HexSetup.EDGE_COUNT;
    var name = '';

    if (this.type == HexSetup.TYPE_POINTY)
        name = EDGE_NAMES[this.type][edge_id];
    if (this.type == HexSetup.TYPE_FLAT)
        name = EDGE_NAMES[this.type][edge_id];

    return name;
};

/**
 * Move from a given hex through a given edge.
 *
 * @param {int} row
 * @param {int} col
 * @param {int} edge
 * @return {array}
 */
HexSetup.prototype.step = function(row, col, edge_id)
{
    edge_id %= HexSetup.EDGE_COUNT;
    var offset = this.edge_offsets[edge_id];

    var hex = [
        row + offset[0],
        col + offset[1]
    ];

    return hex;
};

/**
 * Converts a point from screen space to hex space.
 *
 * @param {int} x
 * @param {int} y
 * @return {array}
 */
HexSetup.prototype.pixel_to_hex = function(x, y)
{
    if (Object.prototype.toString.call(x) == '[object Array]') {
        y = x[1]; x = x[0];
    }

    var hex = [];

    // inversed because x -> col and y -> row.
    hex[0] = this.mi[1][0] * x + this.mi[1][1] * y + this.mi[1][2];
    hex[1] = this.mi[0][0] * x + this.mi[0][1] * y + this.mi[0][2];

    return hex;
};

/**
 * Converts a point from hex space to screen space.
 *
 * @param {int} row
 * @param {int} col
 * @return {array}
 */
HexSetup.prototype.hex_to_pixel = function(row, col)
{
    if (Object.prototype.toString.call(row) == '[object Array]') {
        col = row[1]; row = row[0];
    }

    var point = [];

    // row, column.
    point[0] = this.m[0][0] * col + this.m[0][1] * row + this.m[0][2];
    point[1] = this.m[1][0] * col + this.m[1][1] * row + this.m[1][2];

    return point;
};

HexSetup.prototype.real_to_virtual = function(row, col)
{
    var virtual_hex = [row, col];

    if (this.type == HexSetup.TYPE_POINTY)
    {
        var offset = Math.floor(row * 0.5);
        virtual_hex[1] += offset;
    }
    else if (this.type == HexSetup.TYPE_FLAT)
    {
        var offset = Math.floor(col * 0.5);
        virtual_hex[0] += offset;
    }

    return virtual_hex;
};

HexSetup.prototype.virtual_to_real = function(row, col)
{
    var real_hex = [row, col];

    if (this.type == HexSetup.TYPE_POINTY)
    {
        var offset = Math.floor(row * 0.5);
        real_hex[1] -= offset;
    }
    else if (this.type == HexSetup.TYPE_FLAT)
    {
        var offset = Math.floor(col * 0.5);
        real_hex[0] -= offset;
    }

    return real_hex;
};

HexSetup.prototype.possible_hexes = function(x, y)
{
    if (Object.prototype.toString.call(x) == '[object Array]') {
        y = x[1]; x = x[0];
    }

    var hex = this.pixel_to_hex(x, y);

    var row_min = Math.floor(hex[0]);
    var col_min = Math.floor(hex[1]);
    var row_max = Math.ceil(hex[0]);
    var col_max = Math.ceil(hex[1]);

    var res = [
        [row_min, col_min],
        [row_min, col_max],
        [row_max, col_min],
        [row_max, col_max]
    ];

    return res;
};

HexSetup.prototype.points = function(row, col)
{
    var points = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];
    var center = this.hex_to_pixel(row, col);

    for (var i = 0; i < 6; ++i)
    {
        points[i][0] = center[0] + this.point_offsets[i][0];
        points[i][1] = center[1] + this.point_offsets[i][1];
    }

    return points;
};

HexSetup.prototype.edge_points = function(row, col, edge_id)
{
    var edge = [[0, 0], [0, 0]];
    var center = this.hex_to_pixel(row, col);
    // console.log(row, col, edge_id, center);

    var off0 = this.point_offsets[edge_id];
    var off1 = this.point_offsets[(edge_id + 1) % HexSetup.EDGE_COUNT];

    edge[0][0] = center[0] + off0[0];
    edge[0][1] = center[1] + off0[1];

    edge[1][0] = center[0] + off1[0];
    edge[1][1] = center[1] + off1[1];

    return edge;
};

HexSetup.prototype.point_inside = function(x, y)
{
    if (Object.prototype.toString.call(x) == '[object Array]') {
        y = x[1]; x = x[0];
    }

    var hex_intervals = this.possible_hexes(x, y);

    for (var i = 0; i < 4; ++i)
    {
        var points = this.points(hex_intervals[i]);

        if (HexHelper._inside_polygon(points, x, y))
            return hex_intervals[i];
    }

    return false;
};

export default HexSetup;