// ----------------------------------------------------------------------------------
// -- Hex display style.
// ----------------------------------------------------------------------------------

var HexStyle = function()
{
    this._changed = false;

    this._styles = {
        border_width: {value: 3, changed: false},
        border_color: {value: 'rgba(0, 0, 0, 255)', changed: false},
        dashed_line: {value: false, changed: false},
        line_width: {value: 0.5, changed: false},
        line_color: {value: 'rgba(0, 0, 0, 255)', changed: false},
        line_hover_color: {value: 'rgba(120, 120, 120, 255)', changed: false},
        dashed_line: {value: false, changed: false},
        tile_color: {value: 'rgba(255, 255, 255, 255)', changed: false},
        hover_color: {value: 'rgba(220, 220, 220, 255)', changed: false},
        font: {value: "10px bold Tahoma", changed: false},
        font_color: {value: 'rgba(150, 150, 150, 255)', changed: false},
        font_transform: {value: [0, 0, 0], changed: false},
        font_hover_color: {value: 'rgba(100, 100, 100, 255)', changed: false}
    }
};

HexStyle.prototype.set = function(name, value)
{
    if (this._styles.hasOwnProperty(name))
    {
        this._styles[name].value = value;
        this._styles[name].changed = true;

        this._changed = true;
    }
};

HexStyle.prototype.get = function(name)
{
    if (this._styles.hasOwnProperty(name))
        return this._styles[name].value;

    return false;
};

HexStyle.prototype.changed = function(name)
{
    if (this._styles.hasOwnProperty(name))
        return this._styles[name].changed;

    return false;
};

HexStyle.prototype.merge = function(style)
{
    for (var name in this._styles)
    {
        if (style.changed(name))
            this.set(name, style.get(name));
    }
};

export default HexStyle;