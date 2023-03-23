// ----------------------------------------------------------------------------------
// -- Hex group struct.
// ----------------------------------------------------------------------------------

var HexGroup = function()
{
    this.name = 'Default base group';
    this.tiles = [];
};

HexGroup.prototype.clear = function() {
    this.tiles.length = 0;
};

HexGroup.prototype.push_tile(tile, group)
{
    if (!tile)
        return;

    group = group || 0;
    tile.group = group;
    this.tiles.push(tile);
};

export default HexGroup;