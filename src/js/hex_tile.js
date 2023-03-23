// ----------------------------------------------------------------------------------
// -- Hex tile struct.
// ----------------------------------------------------------------------------------

import HexStyle from 'hex_style';

var tile_index = 1;

/**
 * Real hex coordinates.
 * @param {int} row
 * @param {int} col
 */
var HexTile = function(row, col)
{
    if (Object.prototype.toString.call(row) == '[object Array]') {
        col = row[1]; row = row[0];
    }

    this.id = tile_index++;

    this.row = row;
    this.col = col;

    // A tile can belong to only 3 groups.
    this.groups = new Array(3);

    this.flags = 0;
    this.style = new HexStyle();
};

HexTile.FLAG_DISABLED = 1;
HexTile.FLAG_VISITED = 2;
HexTile.FLAG_MASK = 0b00000011;

HexTile.prototype.flag = function(flag) {
    return this.flags & (flag & HexTile.FLAG_MASK);
};

HexTile.prototype.set_flag = function(flag) {
    this.flags |= flag & HexTile.FLAG_MASK;
};

HexTile.prototype.unset_flag = function(flag) {
    this.flags &= ~(flag & HexTile.FLAG_MASK);
};

HexTile.prototype.set_group = function(group)
{
    if (group.level >= 0 && group.level < this.groups.length)
        this.groups[group.level] = group;
};

HexTile.prototype.remove_group = function(level)
{
    if (level >= 0 && level < this.groups.length)
        delete this.groups[level];
};

HexTile.prototype.level_group = function(level)
{
    if (level >= 0 && level < 3)
        return this.groups[level];

    return false;
};

HexTile.prototype.equals = function(tile) {
    return this.id == tile.id;
};

HexTile.prototype.has_group = function(group_id)
{
    for (var i = 0; i < this.groups.length; ++i)
    {
        if (this.groups[i] && this.groups[i].id == group_id)
            return true;
    }

    return false;
};

HexTile.prototype.last_group = function()
{
    if (this.groups.length)
        return this.groups[this.groups.length - 1];

    return false;
};

HexTile.prototype.merge_styles = function(force)
{
    if (!this.style._changed || force)
    {
        for (var i = 0; i < this.groups.length; ++i)
        {
            if (this.groups[i])
                this.style.merge(this.groups[i].style);
        }
    }

    return this.style;
};

export default HexTile;