// ----------------------------------------------------------------------------------
// -- Console command.
// ----------------------------------------------------------------------------------

var HexConsole = function(program)
{
    this.program = program;
    this.hex_map = program.hex_map;
    this.hex_setup = this.hex_map.hex_setup;
};

HexConsole.prototype.tile_size = function(r1, r2, r3)
{
    this.hex_setup.r[0] = r1;
    this.hex_setup.r[1] = r2;
    this.hex_setup.r[2] = r3;

    this.hex_setup.setup();
    this.map_reset();
};

HexConsole.prototype.map_res = function(width, height)
{
    this.hex_map.map_screen.width = width;
    this.hex_map.map_screen.height = height;
};

HexConsole.prototype.map_scroll_up = function(val) {
    this.hex_map.scroll_speed += val;
};

HexConsole.prototype.map_scroll_down = function(val)
{
    this.hex_map.scroll_speed -= val;

    if (this.hex_map.scroll_speed < 0)
        this.hex_map.scroll_speed = 2;
};

HexConsole.prototype.map_reset = function()
{
    this.hex_map.tile_group.generate_borders();

    for (var name in this.program.regiuni)
    {
        var regiune = this.program.regiuni[name];
        regiune.generate_borders();

        for (var i = 0; i < regiune.judete.length; ++i)
        {
            var judet = regiune.judete[i];
            judet.generate_borders();
        }
    }
};

export default HexConsole;