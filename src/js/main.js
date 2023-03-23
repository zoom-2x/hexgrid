global.$ = global.jQuery = require('jquery');
require('bootstrap');

import HexSetup from 'hex_setup';
import HexCountryProgram from 'hex_country_program';
import HexConsole from 'hex_console';

// ----------------------------------------------------------------------------------
// -- HEXGRID.
// ----------------------------------------------------------------------------------

$(function()
{
    var program = new HexCountryProgram(HexSetup.TYPE_FLAT);
    global.HexConsole = new HexConsole(program);

    var render = function(timestamp)
    {
        program.render(timestamp);
        window.requestAnimationFrame(render);
    };

    window.requestAnimationFrame(render);
});
