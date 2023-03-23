// ----------------------------------------------------------------------------------
// -- Country hex map generator.
// ----------------------------------------------------------------------------------

import HexSetup from 'hex_setup';
import HexMap from 'hex_map';
import HexArea from 'hex_area';
import HexContainer from 'hex_container';

var _botosani_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(0, 15),
        country.hex_map.get_tile(1, 14),
        country.hex_map.get_tile(1, 15),
        country.hex_map.get_tile(1, 16),
        country.hex_map.get_tile(2, 16)
    ];

    return tiles;
};

var _suceava_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(1, 12),
        country.hex_map.get_tile(1, 13),
        country.hex_map.get_tile(2, 12),
        country.hex_map.get_tile(2, 13),
        country.hex_map.get_tile(2, 14),
        country.hex_map.get_tile(2, 15),
        country.hex_map.get_tile(3, 12),
        country.hex_map.get_tile(3, 13)
    ];

    return tiles;
};

var _iasi_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(2, 17),
        country.hex_map.get_tile(3, 16),
        country.hex_map.get_tile(3, 17),
    ];

    return tiles;
};

var _neamt_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(3, 14),
        country.hex_map.get_tile(3, 15),
        country.hex_map.get_tile(4, 14),
        country.hex_map.get_tile(4, 16),
    ];

    return tiles;
};

var _bacau_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(4, 15),
        country.hex_map.get_tile(5, 15),
        country.hex_map.get_tile(5, 16)
    ];

    return tiles;
};

var _vaslui_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(4, 17),
        country.hex_map.get_tile(4, 18),
        country.hex_map.get_tile(5, 17),
        country.hex_map.get_tile(5, 18)
    ];

    return tiles;
};

var _vrancea_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(6, 15),
        country.hex_map.get_tile(6, 16),
        country.hex_map.get_tile(7, 16)
    ];

    return tiles;
};

var _galati_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(6, 17),
        country.hex_map.get_tile(6, 18),
        country.hex_map.get_tile(7, 18)
    ];

    return tiles;
};

var _tulcea_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(7, 19),
        country.hex_map.get_tile(7, 21),
        country.hex_map.get_tile(8, 20),
        country.hex_map.get_tile(8, 21),
        country.hex_map.get_tile(8, 19),
        country.hex_map.get_tile(9, 20)
    ];

    return tiles;
};

var _constanta_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(9, 19),
        country.hex_map.get_tile(10, 18),
        country.hex_map.get_tile(10, 20),
        country.hex_map.get_tile(10, 19),
        country.hex_map.get_tile(11, 20),
        country.hex_map.get_tile(11, 18)
    ];

    return tiles;
};

var _braila_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(7, 17),
        country.hex_map.get_tile(8, 18),
        country.hex_map.get_tile(8, 17),
        country.hex_map.get_tile(9, 18)
    ];

    return tiles;
};

var _ialomita_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(9, 15),
        country.hex_map.get_tile(9, 16),
        country.hex_map.get_tile(9, 17),
        country.hex_map.get_tile(10, 16)
    ];

    return tiles;
};

var _calarasi_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(10, 17),
        country.hex_map.get_tile(11, 16),
        country.hex_map.get_tile(11, 17),
        country.hex_map.get_tile(11, 15),
        country.hex_map.get_tile(12, 15),
        country.hex_map.get_tile(12, 16)
    ];

    return tiles;
};

var _buzau_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(7, 15),
        country.hex_map.get_tile(8, 14),
        country.hex_map.get_tile(8, 15),
        country.hex_map.get_tile(8, 16)
    ];

    return tiles;
};

var _giurgiu_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(11, 12),
        country.hex_map.get_tile(12, 12),
        country.hex_map.get_tile(11, 13),
        country.hex_map.get_tile(12, 13),
        country.hex_map.get_tile(12, 14)
    ];

    return tiles;
};

var _prahova_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(8, 13),
        country.hex_map.get_tile(9, 14),
        country.hex_map.get_tile(9, 13)
    ];

    return tiles;
};

var _dambovita_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(9, 11),
        country.hex_map.get_tile(9, 12),
        country.hex_map.get_tile(10, 11),
        country.hex_map.get_tile(10, 12)
    ];

    return tiles;
};

var _arges_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(8, 10),
        country.hex_map.get_tile(8, 11),
        country.hex_map.get_tile(9, 10),
        country.hex_map.get_tile(10, 10)
    ];

    return tiles;
};

var _teleorman_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(11, 10),
        country.hex_map.get_tile(11, 11),
        country.hex_map.get_tile(12, 10),
        country.hex_map.get_tile(12, 11),
        country.hex_map.get_tile(13, 10)
    ];

    return tiles;
};

var _bucuresti_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(10, 13),
        country.hex_map.get_tile(10, 14),
        country.hex_map.get_tile(10, 15),
        country.hex_map.get_tile(11, 14)
    ];

    return tiles;
};

var _maramures_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(0, 9),
        country.hex_map.get_tile(1, 8),
        country.hex_map.get_tile(1, 9),
        country.hex_map.get_tile(1, 10),
        country.hex_map.get_tile(1, 11),
        country.hex_map.get_tile(2, 8),
        country.hex_map.get_tile(2, 9),
        country.hex_map.get_tile(2, 10)
    ];

    return tiles;
};

var _satu_mare_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(0, 7),
        country.hex_map.get_tile(1, 5),
        country.hex_map.get_tile(1, 6),
        country.hex_map.get_tile(1, 7),
        country.hex_map.get_tile(2, 6)
    ];

    return tiles;
};

var _bistrita_nasaud_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(2, 11),
        country.hex_map.get_tile(3, 10),
        country.hex_map.get_tile(3, 11),
        country.hex_map.get_tile(4, 10)
    ];

    return tiles;
};

var _salaj_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(2, 7),
        country.hex_map.get_tile(3, 6),
        country.hex_map.get_tile(3, 7),
        country.hex_map.get_tile(3, 8)
    ];

    return tiles;
};

var _cluj_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(3, 9),
        country.hex_map.get_tile(4, 8),
        country.hex_map.get_tile(4, 9),
        country.hex_map.get_tile(4, 7),
        country.hex_map.get_tile(5, 8)
    ];

    return tiles;
};

var _mures_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(4, 12),
        country.hex_map.get_tile(4, 11),
        country.hex_map.get_tile(5, 10),
        country.hex_map.get_tile(5, 11),
        country.hex_map.get_tile(5, 9),
        country.hex_map.get_tile(6, 10),
        country.hex_map.get_tile(6, 11),
    ];

    return tiles;
};

var _harghita_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(4, 13),
        country.hex_map.get_tile(5, 12),
        country.hex_map.get_tile(5, 13),
        country.hex_map.get_tile(5, 14),
        country.hex_map.get_tile(6, 12)
    ];

    return tiles;
};

var _covasna_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(6, 13),
        country.hex_map.get_tile(6, 14),
        country.hex_map.get_tile(7, 14),
    ];

    return tiles;
};

var _brasov_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(7, 11),
        country.hex_map.get_tile(7, 12),
        country.hex_map.get_tile(8, 12),
        country.hex_map.get_tile(7, 13)
    ];

    return tiles;
};

var _sibiu_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(6, 9),
        country.hex_map.get_tile(7, 9),
        country.hex_map.get_tile(7, 10)
    ];

    return tiles;
};

var _alba_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(5, 6),
        country.hex_map.get_tile(5, 7),
        country.hex_map.get_tile(6, 6),
        country.hex_map.get_tile(6, 7),
        country.hex_map.get_tile(6, 8),
        country.hex_map.get_tile(7, 8),
        country.hex_map.get_tile(8, 8)
    ];

    return tiles;
};

var _hunedoara_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(6, 5),
        country.hex_map.get_tile(7, 5),
        country.hex_map.get_tile(7, 6),
        country.hex_map.get_tile(7, 7),
        country.hex_map.get_tile(8, 6),
        country.hex_map.get_tile(8, 7)
    ];

    return tiles;
};

var _bihor_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(2, 4),
        country.hex_map.get_tile(2, 5),
        country.hex_map.get_tile(3, 3),
        country.hex_map.get_tile(3, 4),
        country.hex_map.get_tile(3, 5),
        country.hex_map.get_tile(4, 4),
        country.hex_map.get_tile(4, 5),
        country.hex_map.get_tile(4, 6)
    ];

    return tiles;
};

var _arad_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(4, 3),
        country.hex_map.get_tile(5, 2),
        country.hex_map.get_tile(5, 3),
        country.hex_map.get_tile(5, 4),
        country.hex_map.get_tile(5, 5),
        country.hex_map.get_tile(6, 4)
    ];

    return tiles;
};

var _timis_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(6, 0),
        country.hex_map.get_tile(6, 1),
        country.hex_map.get_tile(6, 2),
        country.hex_map.get_tile(6, 3),
        country.hex_map.get_tile(7, 1),
        country.hex_map.get_tile(7, 2),
        country.hex_map.get_tile(7, 3),
        country.hex_map.get_tile(7, 4),
        country.hex_map.get_tile(8, 2),
    ];

    return tiles;
};

var _caras_severin_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(8, 3),
        country.hex_map.get_tile(8, 4),
        country.hex_map.get_tile(8, 5),
        country.hex_map.get_tile(9, 3),
        country.hex_map.get_tile(9, 4)
    ];

    return tiles;
};

var _valcea_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(8, 9),
        country.hex_map.get_tile(9, 9),
        country.hex_map.get_tile(9, 8),
        country.hex_map.get_tile(10, 8),
    ];

    return tiles;
};

var _olt_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(10, 9),
        country.hex_map.get_tile(11, 9),
        country.hex_map.get_tile(12, 9),
        country.hex_map.get_tile(11, 8),
        country.hex_map.get_tile(12, 8)
    ];

    return tiles;
};

var _dolj_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(10, 7),
        country.hex_map.get_tile(11, 6),
        country.hex_map.get_tile(11, 7),
        country.hex_map.get_tile(12, 6),
        country.hex_map.get_tile(12, 7)
    ];

    return tiles;
};

var _gorj_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(9, 5),
        country.hex_map.get_tile(9, 6),
        country.hex_map.get_tile(9, 7),
        country.hex_map.get_tile(10, 6),
    ];

    return tiles;
};

var _mehedinti_tiles = function(country)
{
    var tiles = [
        country.hex_map.get_tile(10, 4),
        country.hex_map.get_tile(10, 5),
        country.hex_map.get_tile(11, 4),
        country.hex_map.get_tile(11, 5)
    ];

    return tiles;
};

var _init_romania_pointy = function(country)
{};

var _init_romania_flat = function(country)
{
    country.hex_map.disable_tiles([
        [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 8], [0, 10], [0, 11], [0, 12], [0, 13], [0, 14], [0, 16], [0, 17], [0, 18], [0, 19], [0, 20], [0, 21],
        [1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 12], [1, 17], [1, 18], [1, 19], [1, 20], [1, 21],
        [2, 0], [2, 1], [2, 2], [2, 3], [2, 18], [2, 19], [2, 20], [2, 21],
        [3, 0], [3, 1], [3, 2], [3, 18], [3, 19], [3, 20], [3, 21],
        [4, 0], [4, 1], [4, 2], [4, 19], [4, 20], [4, 21],
        [5, 0], [5, 1], [5, 19], [5, 20], [5, 21],
        [6, 19], [6, 20], [6, 21],
        [7, 0], [7, 20],
        [8, 0], [8, 1],
        [9, 0], [9, 1], [9, 2], [9, 21],
        [10, 0], [10, 1], [10, 2], [10, 3], [10, 21],
        [11, 0], [11, 1], [11, 2], [11, 3], [11, 19], [11, 21],
        [12, 0], [12, 1], [12, 2], [12, 3], [12, 4], [12, 5], [12, 17], [12, 18], [12, 19], [12, 20], [12, 21],
        [13, 0], [13, 1], [13, 2], [13, 3], [13, 4], [13, 5], [13, 6], [13, 7], [13, 8], [13, 9], [13, 11], [13, 12], [13, 13], [13, 14], [13, 15], [13, 16], [13, 17], [13, 18], [13, 19], [13, 20], [13, 21]
    ]);

    country.hex_map.tile_group.generate_borders();
    country.hex_map.tile_group.style.set('border_width', 5);

    // ----------------------------------------------------------------------------------
    // -- Counties.
    // ----------------------------------------------------------------------------------
    // -- BUCOVINA.
    // ----------------------------------------------------------------------------------

    var bucovina = new HexContainer(country.hex_map, 'Bucovina', HexContainer.LEVEL_1);
    bucovina.judete = [];

    country.regiuni.bucovina = bucovina;

    bucovina.style.set('border_width', 4);
    bucovina.style.set('tile_color', 'rgba(116, 138, 203, 255)');
    bucovina.style.set('font', 'italic 40px Georgia');
    bucovina.style.set('font_transform', [16, 6, 0]);
    bucovina.style.set('font_color', 'rgba(163, 184, 230, 255)');
    bucovina.style.set('font_hover_color', 'rgba(255, 255, 255, 255)');
    bucovina.style.set('line_color', 'rgba(77, 97, 179, 255)');
    bucovina.style.set('hover_color', 'rgba(90, 120, 183, 255)');
    bucovina.style.set('line_hover_color', 'rgba(60, 79, 155, 255)');
    // bucovina.style.set('dashed_line', [7, 4]);

    bucovina.push_tiles(_suceava_tiles(country));
    bucovina.push_tiles(_botosani_tiles(country));
    bucovina.generate_borders();

    var botosani = new HexContainer(country.hex_map, 'Botosani', HexContainer.LEVEL_2);
    var suceava = new HexContainer(country.hex_map, 'Suceava', HexContainer.LEVEL_2);

    bucovina.judete.push(botosani, suceava);

    // -- Botosani.

    botosani.region = bucovina;
    botosani.push_tiles(_botosani_tiles(country));
    botosani.generate_borders();

    // -- Suceava.

    suceava.region = bucovina;
    suceava.push_tiles(_suceava_tiles(country));
    suceava.generate_borders();
    suceava.style.set('font_transform', [-20, 4, 0]);

    for (var i = 0; i < bucovina.judete.length; ++i)
    {
        var judet = bucovina.judete[i];

        judet.style.set('border_width', 3);
        judet.style.set('border_color', 'rgba(60, 79, 155, 255)');
        judet.style.set('font', 'italic bold 16px Georgia');
        judet.style.set('font_color', 'rgba(52, 59, 144, 255)');
        // judet.style.set('dashed_line', [7, 4]);
    }

    // ----------------------------------------------------------------------------------
    // -- MOLDOVA.
    // ----------------------------------------------------------------------------------

    var moldova = new HexContainer(country.hex_map, 'Moldova', HexContainer.LEVEL_1);
    moldova.judete = [];

    country.regiuni.moldova = moldova;

    moldova.style.set('border_width', 4);
    moldova.style.set('tile_color', 'rgba(77, 155, 65, 255)');
    moldova.style.set('font', 'italic 40px Georgia');
    moldova.style.set('font_transform', [18, 18, 0]);
    moldova.style.set('font_color', 'rgba(142, 203, 94, 255)');
    moldova.style.set('font_hover_color', 'rgba(255, 255, 255, 255)');
    moldova.style.set('line_color', 'rgba(46, 97, 35, 255)');
    moldova.style.set('hover_color', 'rgba(72, 132, 63, 255)');
    moldova.style.set('line_hover_color', 'rgba(39, 82, 24, 255)');
    moldova.style.set('border_color', 'rgba(39, 82, 24, 255)');
    moldova.style.set('dashed_line', [3, 3]);

    moldova.push_tiles(_iasi_tiles(country));
    moldova.push_tiles(_neamt_tiles(country));
    moldova.push_tiles(_bacau_tiles(country));
    moldova.push_tiles(_vaslui_tiles(country));
    moldova.push_tiles(_vrancea_tiles(country));
    moldova.push_tiles(_galati_tiles(country));
    moldova.generate_borders();

    var iasi = new HexContainer(country.hex_map, 'Iasi', HexContainer.LEVEL_2);
    var neamt = new HexContainer(country.hex_map, 'Neamt', HexContainer.LEVEL_2);
    var bacau = new HexContainer(country.hex_map, 'Bacau', HexContainer.LEVEL_2);
    var vaslui = new HexContainer(country.hex_map, 'Vaslui', HexContainer.LEVEL_2);
    var vrancea = new HexContainer(country.hex_map, 'Vrancea', HexContainer.LEVEL_2);
    var galati = new HexContainer(country.hex_map, 'Galati', HexContainer.LEVEL_2);

    moldova.judete.push(iasi, neamt, bacau, vaslui, vrancea, galati);

    // -- Iasi.

    iasi.region = moldova;
    iasi.push_tiles(_iasi_tiles(country));
    iasi.generate_borders();
    iasi.style.set('font_transform', [-10, 4, 0]);

    // -- Neamt.

    neamt.region = moldova;
    neamt.push_tiles(_neamt_tiles(country));
    neamt.generate_borders();

    // -- Bacau.

    bacau.region = moldova;
    bacau.push_tiles(_bacau_tiles(country));
    bacau.generate_borders();
    bacau.style.set('font_transform', [8, 4, 0]);

    // -- Vaslui.

    vaslui.region = moldova;
    vaslui.push_tiles(_vaslui_tiles(country));
    vaslui.generate_borders();

    // -- Vrancea.

    vrancea.region = moldova;
    vrancea.push_tiles(_vrancea_tiles(country));
    vrancea.generate_borders();
    vrancea.style.set('font_transform', [-10, 4, 0]);

    // -- Galati.

    galati.region = moldova;
    galati.push_tiles(_galati_tiles(country));
    galati.generate_borders();
    galati.style.set('font_transform', [-10, 4, 0]);

    for (var i = 0; i < moldova.judete.length; ++i)
    {
        var judet = moldova.judete[i];

        judet.style.set('border_width', 3);
        judet.style.set('border_color', 'rgba(54, 106, 39, 255)');
        judet.style.set('font', 'italic bold 14px Georgia');
        judet.style.set('font_color', 'rgba(20, 76, 0, 255)');
        // judet.style.set('dashed_line', [7, 4]);
    }

    // ----------------------------------------------------------------------------------
    // -- DOBROGEA.
    // ----------------------------------------------------------------------------------

    var dobrogea = new HexContainer(country.hex_map, 'Dobrogea', HexContainer.LEVEL_1);
    dobrogea.judete = [];

    country.regiuni.dobrogea = dobrogea;

    dobrogea.style.set('border_width', 4);
    dobrogea.style.set('tile_color', 'rgba(203, 159, 48, 255)');
    dobrogea.style.set('font', 'italic 26px Georgia');
    dobrogea.style.set('font_transform', [8, 0, -45]);
    dobrogea.style.set('font_color', 'rgba(221, 207, 94, 255)');
    dobrogea.style.set('font_hover_color', 'rgba(255, 255, 255, 255)');
    dobrogea.style.set('line_color', 'rgba(159, 106, 29, 255)');
    dobrogea.style.set('hover_color', 'rgba(179, 126, 35, 255)');
    dobrogea.style.set('line_hover_color', 'rgba(143, 84, 23, 255)');
    dobrogea.style.set('border_color', 'rgba(143, 84, 23, 255)');
    dobrogea.style.set('dashed_line', [3, 3]);

    dobrogea.push_tiles(_tulcea_tiles(country));
    dobrogea.push_tiles(_constanta_tiles(country));
    dobrogea.generate_borders();

    var tulcea = new HexContainer(country.hex_map, 'Tulcea', HexContainer.LEVEL_2);
    var constanta = new HexContainer(country.hex_map, 'Constanta', HexContainer.LEVEL_2);

    dobrogea.judete.push(tulcea, constanta);

    // -- Tulcea.

    tulcea.region = dobrogea;
    tulcea.push_tiles(_tulcea_tiles(country));
    tulcea.generate_borders();

    // -- Constanta.

    constanta.region = dobrogea;
    constanta.push_tiles(_constanta_tiles(country));
    constanta.generate_borders();

    for (var i = 0; i < dobrogea.judete.length; ++i)
    {
        var judet = dobrogea.judete[i];

        judet.style.set('border_width', 3);
        judet.style.set('border_color', 'rgba(143, 84, 23, 255)');
        judet.style.set('font', 'italic bold 16px Georgia');
        judet.style.set('font_color', 'rgba(80, 46, 0, 255)');
        // judet.style.set('dashed_line', [7, 4]);
    }

    // ----------------------------------------------------------------------------------
    // -- MUNTENIA.
    // ----------------------------------------------------------------------------------

    var muntenia = new HexContainer(country.hex_map, 'Muntenia', HexContainer.LEVEL_1);
    muntenia.judete = [];

    country.regiuni.muntenia = muntenia;

    muntenia.style.set('border_width', 4);
    muntenia.style.set('tile_color', 'rgba(139, 120, 191, 255)');
    muntenia.style.set('font', 'italic 56px Georgia');
    muntenia.style.set('font_transform', [10, 20, 0]);
    muntenia.style.set('font_color', 'rgba(176, 166, 229, 255)');
    muntenia.style.set('font_hover_color', 'rgba(255, 255, 255, 255)');
    muntenia.style.set('line_color', 'rgba(108, 78, 155, 255)');
    muntenia.style.set('hover_color', 'rgba(117, 96, 155, 255)');
    muntenia.style.set('line_hover_color', 'rgba(93, 56, 131, 255)');
    muntenia.style.set('border_color', 'rgba(93, 56, 131, 255)');
    muntenia.style.set('dashed_line', [3, 3]);

    muntenia.push_tiles(_braila_tiles(country));
    muntenia.push_tiles(_ialomita_tiles(country));
    muntenia.push_tiles(_calarasi_tiles(country));
    muntenia.push_tiles(_buzau_tiles(country));
    muntenia.push_tiles(_giurgiu_tiles(country));
    muntenia.push_tiles(_prahova_tiles(country));
    muntenia.push_tiles(_dambovita_tiles(country));
    muntenia.push_tiles(_arges_tiles(country));
    muntenia.push_tiles(_teleorman_tiles(country));
    muntenia.push_tiles(_bucuresti_tiles(country));
    muntenia.generate_borders();

    var braila = new HexContainer(country.hex_map, 'Braila', HexContainer.LEVEL_2);
    var ialomita = new HexContainer(country.hex_map, 'Ialomita', HexContainer.LEVEL_2);
    var calarasi = new HexContainer(country.hex_map, 'Calarasi', HexContainer.LEVEL_2);
    var buzau = new HexContainer(country.hex_map, 'Buzau', HexContainer.LEVEL_2);
    var giurgiu = new HexContainer(country.hex_map, 'Giurgiu', HexContainer.LEVEL_2);
    var prahova = new HexContainer(country.hex_map, 'Prahova', HexContainer.LEVEL_2);
    var dambovita = new HexContainer(country.hex_map, 'Dambovita', HexContainer.LEVEL_2);
    var arges = new HexContainer(country.hex_map, 'Arges', HexContainer.LEVEL_2);
    var teleorman = new HexContainer(country.hex_map, 'Teleorman', HexContainer.LEVEL_2);
    var bucuresti = new HexContainer(country.hex_map, 'Bucuresti', HexContainer.LEVEL_2);

    muntenia.judete.push(braila, ialomita, calarasi, buzau, giurgiu, prahova, dambovita, arges, teleorman, bucuresti);

    // -- Braila.

    braila.region = muntenia;
    braila.push_tiles(_braila_tiles(country));
    braila.generate_borders();

    // -- Ialomita.

    ialomita.region = muntenia;
    ialomita.push_tiles(_ialomita_tiles(country));
    ialomita.generate_borders();

    // -- Calarasi.

    calarasi.region = muntenia;
    calarasi.push_tiles(_calarasi_tiles(country));
    calarasi.generate_borders();

    // -- Buzau.

    buzau.region = muntenia;
    buzau.push_tiles(_buzau_tiles(country));
    buzau.generate_borders();

    // -- Giurgiu.

    giurgiu.region = muntenia;
    giurgiu.push_tiles(_giurgiu_tiles(country));
    giurgiu.generate_borders();

    // -- Prahova.

    prahova.region = muntenia;
    prahova.push_tiles(_prahova_tiles(country));
    prahova.style.set('font_transform', [8, 4, 0]);
    prahova.generate_borders();

    // -- Dambovita.

    dambovita.region = muntenia;
    dambovita.push_tiles(_dambovita_tiles(country));
    dambovita.generate_borders();

    // -- Arges.

    arges.region = muntenia;
    arges.push_tiles(_arges_tiles(country));
    arges.style.set('font_transform', [10, -16, 0]);
    arges.generate_borders();

    // -- Teleorman.

    teleorman.region = muntenia;
    teleorman.push_tiles(_teleorman_tiles(country));
    teleorman.generate_borders();

    // -- Bucuresti.

    bucuresti.region = muntenia;
    bucuresti.push_tiles(_bucuresti_tiles(country));
    bucuresti.generate_borders();

    for (var i = 0; i < muntenia.judete.length; ++i)
    {
        var judet = muntenia.judete[i];

        judet.style.set('border_width', 3);
        judet.style.set('border_color', 'rgba(93, 56, 131, 255)');
        judet.style.set('font', 'italic bold 14px Georgia');
        judet.style.set('font_color', 'rgba(75, 48, 117, 255)');
        // judet.style.set('dashed_line', [7, 4]);
    }

    // ----------------------------------------------------------------------------------
    // -- MARAMURES.
    // ----------------------------------------------------------------------------------

    var maramures = new HexContainer(country.hex_map, 'Maramures', HexContainer.LEVEL_1);
    maramures.judete = [];

    country.regiuni.maramures = maramures;

    maramures.style.set('border_width', 4);
    maramures.style.set('tile_color', 'rgba(58, 141, 121, 255)');
    maramures.style.set('font', 'italic 40px Georgia');
    maramures.style.set('font_transform', [0, 4, 0]);
    maramures.style.set('font_color', 'rgba(100, 188, 167, 255)');
    maramures.style.set('font_hover_color', 'rgba(255, 255, 255, 255)');
    maramures.style.set('line_color', 'rgba(33, 99, 64, 255)');
    maramures.style.set('hover_color', 'rgba(33, 122, 100, 255)');
    maramures.style.set('line_hover_color', 'rgba(25, 78, 42, 255)');
    maramures.style.set('border_color', 'rgba(25, 78, 42, 255)');
    maramures.style.set('dashed_line', [3, 3]);

    maramures.push_tiles(_maramures_tiles(country));
    maramures.push_tiles(_satu_mare_tiles(country));
    maramures.generate_borders();

    var maramures_jud = new HexContainer(country.hex_map, 'Maramures', HexContainer.LEVEL_2);
    var satu_mare = new HexContainer(country.hex_map, 'Satu Mare', HexContainer.LEVEL_2);

    maramures.judete.push(maramures_jud, satu_mare);

    // -- Maramures.

    maramures_jud.region = maramures;
    maramures_jud.push_tiles(_maramures_tiles(country));
    maramures_jud.style.set('font_transform', [4, 6, 0]);
    maramures_jud.generate_borders();

    // -- Satu Mare.

    satu_mare.region = maramures;
    satu_mare.push_tiles(_satu_mare_tiles(country));
    satu_mare.style.set('font_transform', [0, 4, 0]);
    satu_mare.generate_borders();

    for (var i = 0; i < maramures.judete.length; ++i)
    {
        var judet = maramures.judete[i];

        judet.style.set('border_width', 3);
        judet.style.set('border_color', 'rgba(29, 89, 49, 255)');
        judet.style.set('font', 'italic bold 16px Georgia');
        judet.style.set('font_color', 'rgba(13, 66, 33, 255)');
        // judet.style.set('dashed_line', [7, 4]);
    }

    // ----------------------------------------------------------------------------------
    // -- TRANSILVANIA.
    // ----------------------------------------------------------------------------------

    var transilvania = new HexContainer(country.hex_map, 'Transilvania', HexContainer.LEVEL_1);
    transilvania.judete = [];

    country.regiuni.transilvania = transilvania;

    transilvania.style.set('border_width', 4);
    transilvania.style.set('tile_color', 'rgba(171, 99, 132, 255)');
    transilvania.style.set('font', 'italic 60px Georgia');
    transilvania.style.set('font_transform', [30, 20, 0]);
    transilvania.style.set('font_color', 'rgba(215, 144, 167, 255)');
    transilvania.style.set('font_hover_color', 'rgba(255, 255, 255, 255)');
    transilvania.style.set('line_color', 'rgba(132, 62, 104, 255)');
    transilvania.style.set('hover_color', 'rgba(148, 80, 102, 255)');
    transilvania.style.set('line_hover_color', 'rgba(107, 45, 75, 255)');
    transilvania.style.set('border_color', 'rgba(107, 45, 75, 255)');
    transilvania.style.set('dashed_line', [3, 3]);

    transilvania.push_tiles(_bistrita_nasaud_tiles(country));
    transilvania.push_tiles(_salaj_tiles(country));
    transilvania.push_tiles(_cluj_tiles(country));
    transilvania.push_tiles(_mures_tiles(country));
    transilvania.push_tiles(_harghita_tiles(country));
    transilvania.push_tiles(_covasna_tiles(country));
    transilvania.push_tiles(_brasov_tiles(country));
    transilvania.push_tiles(_sibiu_tiles(country));
    transilvania.push_tiles(_alba_tiles(country));
    transilvania.push_tiles(_hunedoara_tiles(country));
    transilvania.generate_borders();

    var bistrita_nasaud = new HexContainer(country.hex_map, 'Bistrita Nasaud', HexContainer.LEVEL_2);
    var salaj = new HexContainer(country.hex_map, 'Salaj', HexContainer.LEVEL_2);
    var cluj = new HexContainer(country.hex_map, 'Cluj', HexContainer.LEVEL_2);
    var mures = new HexContainer(country.hex_map, 'Mures', HexContainer.LEVEL_2);
    var harghita = new HexContainer(country.hex_map, 'Harghita', HexContainer.LEVEL_2);
    var covasna = new HexContainer(country.hex_map, 'Covasna', HexContainer.LEVEL_2);
    var brasov = new HexContainer(country.hex_map, 'Brasov', HexContainer.LEVEL_2);
    var sibiu = new HexContainer(country.hex_map, 'Sibiu', HexContainer.LEVEL_2);
    var alba = new HexContainer(country.hex_map, 'Alba', HexContainer.LEVEL_2);
    var hunedoara = new HexContainer(country.hex_map, 'Hunedoara', HexContainer.LEVEL_2);

    transilvania.judete.push(bistrita_nasaud, salaj, cluj, mures, harghita, covasna, brasov, sibiu, alba, hunedoara);

    // -- Bistrita Nasaud.

    bistrita_nasaud.region = transilvania;
    bistrita_nasaud.push_tiles(_bistrita_nasaud_tiles(country));
    bistrita_nasaud.generate_borders();

    // -- Salaj.

    salaj.region = transilvania;
    salaj.push_tiles(_salaj_tiles(country));
    salaj.style.set('font_transform', [0, 4, 0]);
    salaj.generate_borders();

    // -- Cluj.

    cluj.region = transilvania;
    cluj.push_tiles(_cluj_tiles(country));
    cluj.style.set('font_transform', [0, 4, 0]);
    cluj.generate_borders();

    // -- Mures.

    mures.region = transilvania;
    mures.push_tiles(_mures_tiles(country));
    mures.style.set('font_transform', [-14, 20, 0]);
    mures.generate_borders();

    // -- Harghita.

    harghita.region = transilvania;
    harghita.push_tiles(_harghita_tiles(country));
    harghita.style.set('font_transform', [8, -4, 0]);
    harghita.generate_borders();

    // -- Covasna.

    covasna.region = transilvania;
    covasna.push_tiles(_covasna_tiles(country));
    covasna.style.set('font_transform', [-10, 4, 0]);
    covasna.generate_borders();

    // -- Brasov.

    brasov.region = transilvania;
    brasov.push_tiles(_brasov_tiles(country));
    brasov.style.set('font_transform', [0, 4, 0]);
    brasov.generate_borders();

    // -- Sibiu.

    sibiu.region = transilvania;
    sibiu.push_tiles(_sibiu_tiles(country));
    sibiu.style.set('font_transform', [6, 6, 0]);
    sibiu.generate_borders();

    // -- Alba.

    alba.region = transilvania;
    alba.push_tiles(_alba_tiles(country));
    alba.style.set('font_transform', [0, -4, 0]);
    alba.generate_borders();

    // -- Hunedoara.

    hunedoara.region = transilvania;
    hunedoara.push_tiles(_hunedoara_tiles(country));
    hunedoara.generate_borders();

    for (var i = 0; i < transilvania.judete.length; ++i)
    {
        var judet = transilvania.judete[i];

        judet.style.set('border_width', 3);
        judet.style.set('border_color', 'rgba(119, 56, 81, 255)');
        judet.style.set('font', 'italic bold 14px Georgia');
        judet.style.set('font_color', 'rgba(93, 37, 74, 255)');
        // judet.style.set('dashed_line', [7, 4]);
    }

    bistrita_nasaud.style.set('font', 'italic bold 12px Georgia');
    bistrita_nasaud.style.set('font_transform', [0, 0, 20]);

    // ----------------------------------------------------------------------------------
    // -- CRISANA.
    // ----------------------------------------------------------------------------------

    var crisana = new HexContainer(country.hex_map, 'Crisana', HexContainer.LEVEL_1);
    crisana.judete = [];

    country.regiuni.crisana = crisana;

    crisana.style.set('border_width', 4);
    crisana.style.set('tile_color', 'rgba(145, 159, 93, 255)');
    crisana.style.set('font', 'italic 40px Georgia');
    crisana.style.set('font_transform', [14, 6, 0]);
    crisana.style.set('font_color', 'rgba(188, 204, 130, 255)');
    crisana.style.set('font_hover_color', 'rgba(255, 255, 255, 255)');
    crisana.style.set('line_color', 'rgba(102, 116, 61, 255)');
    crisana.style.set('hover_color', 'rgba(133, 140, 78, 255)');
    crisana.style.set('line_hover_color', 'rgba(87, 101, 35, 255)');
    crisana.style.set('border_color', 'rgba(87, 101, 35, 255)');
    crisana.style.set('dashed_line', [3, 3]);

    crisana.push_tiles(_bihor_tiles(country));
    crisana.push_tiles(_arad_tiles(country));
    crisana.generate_borders();

    var bihor = new HexContainer(country.hex_map, 'Bihor', HexContainer.LEVEL_2);
    var arad = new HexContainer(country.hex_map, 'Arad', HexContainer.LEVEL_2);

    crisana.judete.push(bihor, arad);

    // -- Bihor.

    bihor.region = crisana;
    bihor.push_tiles(_bihor_tiles(country));
    bihor.generate_borders();

    // -- Arad.

    arad.region = crisana;
    arad.push_tiles(_arad_tiles(country));
    arad.generate_borders();

    for (var i = 0; i < crisana.judete.length; ++i)
    {
        var judet = crisana.judete[i];

        judet.style.set('border_width', 3);
        judet.style.set('border_color', 'rgba(87, 101, 35, 255)');
        judet.style.set('font', 'italic bold 16px Georgia');
        judet.style.set('font_color', 'rgba(67, 92, 30, 255)');
        // judet.style.set('dashed_line', [7, 4]);
    }

    // ----------------------------------------------------------------------------------
    // -- BANAT.
    // ----------------------------------------------------------------------------------

    var banat = new HexContainer(country.hex_map, 'Banat', HexContainer.LEVEL_1);
    banat.judete = [];

    country.regiuni.banat = banat;

    banat.style.set('border_width', 4);
    banat.style.set('tile_color', 'rgba(86, 88, 175, 255)');
    banat.style.set('font', 'italic 46px Georgia');
    banat.style.set('font_transform', [6, 10, 0]);
    banat.style.set('font_color', 'rgba(128, 139, 210, 255)');
    banat.style.set('font_hover_color', 'rgba(255, 255, 255, 255)');
    banat.style.set('line_color', 'rgba(37, 40, 69, 255)');
    banat.style.set('hover_color', 'rgba(77, 80, 154, 255)');
    banat.style.set('line_hover_color', 'rgba(31, 43, 71, 255)');
    banat.style.set('border_color', 'rgba(31, 43, 71, 255)');
    banat.style.set('dashed_line', [3, 3]);

    banat.push_tiles(_timis_tiles(country));
    banat.push_tiles(_caras_severin_tiles(country));
    banat.generate_borders();

    var timis = new HexContainer(country.hex_map, 'Timis', HexContainer.LEVEL_2);
    var caras_severin = new HexContainer(country.hex_map, 'Caras-Severin', HexContainer.LEVEL_2);

    banat.judete.push(timis, caras_severin);

    // -- Timis.

    timis.region = banat;
    timis.push_tiles(_timis_tiles(country));
    timis.style.set('font_transform', [8, 4, 0]);
    timis.generate_borders();

    // -- Caras-Severin.

    caras_severin.region = banat;
    caras_severin.push_tiles(_caras_severin_tiles(country));
    caras_severin.style.set('font_transform', [10, -2, 0]);
    caras_severin.generate_borders();

    for (var i = 0; i < banat.judete.length; ++i)
    {
        var judet = banat.judete[i];

        judet.style.set('border_width', 3);
        judet.style.set('border_color', 'rgba(38, 51, 82, 255)');
        judet.style.set('font', 'italic bold 16px Georgia');
        judet.style.set('font_color', 'rgba(28, 44, 94, 255)');
        // judet.style.set('dashed_line', [7, 4]);
    }

    caras_severin.style.set('font', 'italic bold 14px Georgia');

    // ----------------------------------------------------------------------------------
    // -- OLTENIA.
    // ----------------------------------------------------------------------------------

    var oltenia = new HexContainer(country.hex_map, 'Oltenia', HexContainer.LEVEL_1);
    oltenia.judete = [];

    country.regiuni.oltenia = oltenia;

    oltenia.style.set('border_width', 4);
    oltenia.style.set('tile_color', 'rgba(203, 128, 116, 255)');
    oltenia.style.set('font', 'italic 50px Georgia');
    oltenia.style.set('font_transform', [-10, 10, 0]);
    oltenia.style.set('font_color', 'rgba(229, 179, 163, 255)');
    oltenia.style.set('font_hover_color', 'rgba(255, 255, 255, 255)');
    oltenia.style.set('line_color', 'rgba(155, 84, 82, 255)');
    oltenia.style.set('hover_color', 'rgba(179, 102, 94, 255)');
    oltenia.style.set('line_hover_color', 'rgba(122, 60, 66, 255)');
    oltenia.style.set('border_color', 'rgba(122, 60, 66, 255)');
    oltenia.style.set('dashed_line', [3, 3]);

    oltenia.push_tiles(_valcea_tiles(country));
    oltenia.push_tiles(_olt_tiles(country));
    oltenia.push_tiles(_dolj_tiles(country));
    oltenia.push_tiles(_gorj_tiles(country));
    oltenia.push_tiles(_mehedinti_tiles(country));
    oltenia.generate_borders();

    var valcea = new HexContainer(country.hex_map, 'Valcea', HexContainer.LEVEL_2);
    var olt = new HexContainer(country.hex_map, 'Olt', HexContainer.LEVEL_2);
    var dolj = new HexContainer(country.hex_map, 'Dolj', HexContainer.LEVEL_2);
    var gorj = new HexContainer(country.hex_map, 'Gorj', HexContainer.LEVEL_2);
    var mehedinti = new HexContainer(country.hex_map, 'Mehedinti', HexContainer.LEVEL_2);

    oltenia.judete.push(valcea, olt, dolj, gorj, mehedinti);

    // -- Valcea.

    valcea.region = oltenia;
    valcea.push_tiles(_valcea_tiles(country));
    valcea.style.set('font_transform', [2, 4, 0]);
    valcea.generate_borders();

    // -- Olt.

    olt.region = oltenia;
    olt.push_tiles(_olt_tiles(country));
    olt.style.set('font_transform', [0, 4, 0]);
    olt.generate_borders();

    // -- Dolj.

    dolj.region = oltenia;
    dolj.push_tiles(_dolj_tiles(country));
    dolj.style.set('font_transform', [0, 4, 0]);
    dolj.generate_borders();

    // -- Gorj.

    gorj.region = oltenia;
    gorj.push_tiles(_gorj_tiles(country));
    gorj.style.set('font_transform', [0, 4, 0]);
    gorj.generate_borders();

    // -- Mehedinti.

    mehedinti.region = oltenia;
    mehedinti.push_tiles(_mehedinti_tiles(country));
    mehedinti.style.set('font_transform', [3, 4, 0]);
    mehedinti.generate_borders();

    for (var i = 0; i < oltenia.judete.length; ++i)
    {
        var judet = oltenia.judete[i];

        judet.style.set('border_width', 3);
        judet.style.set('border_color', 'rgba(122, 60, 66, 255)');
        judet.style.set('font', 'italic bold 14px Georgia');
        judet.style.set('font_color', 'rgba(133, 66, 64, 255)');
        // judet.style.set('dashed_line', [7, 4]);
    }
};

var _init_ui = function(country)
{
    var $toolbar = $('#toolbar');
    var $status = $('#quiz_status');
    var $status_list = $status.find('ul.quiz_status_list');
    var $correct_number = $status.find('span.badge.correct');
    var $wrong_number = $status.find('span.badge.wrong');

    $correct_number.html('Correct: 0');
    $wrong_number.html('Wrong: 0');

    if (country.selection_level == HexCountryProgram.QUIZ_TYPE_REGION)
        $('#quiz_region').prop('checked', true);
    else if (country.selection_level == HexCountryProgram.QUIZ_TYPE_COUNTY)
        $('#quiz_county').prop('checked', true);

    $('#hexgrid').on('click', 'button#start-quiz', function(e)
    {
        var quiz_type = $toolbar.find('input[name="quiz_type_radio"]:checked').val();
        country.start_quiz(10, quiz_type);
    });

    $('#hexgrid').on('click', 'input[name="quiz_type_radio"]', function(e)
    {
        var $target = $(e.target);
        country.selection_level = parseInt($target.val());
    });
};

var _update_ui = function(country)
{
    var $status = $('#quiz_status');
    var $status_list = $status.find('ul.quiz_status_list');
    var $status_list_items = $status.find('ul.quiz_status_list li');
    var $correct_number = $status.find('span.badge.correct');
    var $wrong_number = $status.find('span.badge.wrong');

    var prev_index = country.quiz.current - 1;
    var current_index = country.quiz.current;

    // Update the status bar.
    if (prev_index >= 0)
    {
        var result = country.quiz.history[prev_index];

        console.log(country.quiz.history);
        console.log($status_list_items.eq(prev_index));

        if (result == HexCountryProgram.QUIZ_ANSWER_CORRECT)
            $status_list_items.eq(prev_index).removeClass('current').addClass('correct');
        else if (result == HexCountryProgram.QUIZ_ANSWER_WRONG)
            $status_list_items.eq(prev_index).removeClass('current').addClass('wrong');
    }
    // Initialize the status bar.
    else
    {
        if (country.quiz.type == HexCountryProgram.QUIZ_TYPE_REGION)
            country.selection_level = HexContainer.LEVEL_1;
        else if (country.quiz.type == HexCountryProgram.QUIZ_TYPE_COUNTY)
            country.selection_level = HexContainer.LEVEL_2;

        $status_list.empty();

        for (var i = 0; i < country.quiz.total; ++i)
        {
            if (i == 0)
                $status_list.append('<li class="list-group-item current"></li>');
            else
                $status_list.append('<li class="list-group-item"></li>');
        }
    }

    if (current_index < country.quiz.total)
        $status_list_items.eq(current_index).addClass('current');

    $correct_number.html('Correct: ' + country.quiz.correct);
    $wrong_number.html('Wrong: ' + country.quiz.wrong);

    $('#question').val(country.quiz.question_text);
};

var HexCountryProgram = function(type)
{
    if (type == HexSetup.TYPE_POINTY || type == HexSetup.TYPE_FLAT)
    {
        this.hex_setup = new HexSetup(type, 34, 30, 34, 50, 50);
        this.hex_map = new HexMap(this.hex_setup, 1200, 880, 14, 22, 'hexgrid_screen');

        this.regiuni = {};
        this.selection_level = HexContainer.LEVEL_2;

        if (type == HexSetup.TYPE_POINTY)
            _init_romania_pointy(this);
        else if (type == HexSetup.TYPE_FLAT)
            _init_romania_flat(this);

        this.hex_map.add_listener('click', this.click.bind(this));
        this.quiz = {
            total: 0,
            current: 0,
            correct: 0,
            wrong: 0,
            question: false,
            question_text: '',
            started: false,
            type: 0,
            history: false
        };

        _init_ui(this);
    }
};

HexCountryProgram.QUIZ_TYPE_REGION = 1;
HexCountryProgram.QUIZ_TYPE_COUNTY = 2;

HexCountryProgram.QUIZ_ANSWER_NONE = 0;
HexCountryProgram.QUIZ_ANSWER_CORRECT = 1;
HexCountryProgram.QUIZ_ANSWER_WRONG = 2;

HexCountryProgram.prototype.start_quiz = function(count, type)
{
    this.quiz.total = count;
    this.quiz.current = 0;
    this.quiz.correct = 0;
    this.quiz.wrong = 0;
    this.quiz.question = false;
    this.quiz.question_text = '';
    this.quiz.started = true;
    this.quiz.type = type;
    this.quiz.history = new Array(count);

    for (var i = 0; i < count; ++i) {
        this.quiz.history[i] = HexCountryProgram.QUIZ_ANSWER_NONE;
    }

    this.generate_question();
    _update_ui(this);
};

HexCountryProgram.prototype.quiz_answer = function(answer)
{
    console.log('answer');

    if (answer == this.quiz.question)
    {
        this.quiz.correct++;
        this.quiz.history[this.quiz.current] = HexCountryProgram.QUIZ_ANSWER_CORRECT;
    }
    else
    {
        this.quiz.wrong++;
        this.quiz.history[this.quiz.current] = HexCountryProgram.QUIZ_ANSWER_WRONG;
    }

    this.quiz.current++;

    if (this.quiz.current < this.quiz.total)
        this.generate_question();
    else
    {
        // We're done here.
        this.quiz.started = false;
    }

    _update_ui(this);
};

HexCountryProgram.prototype.generate_question = function()
{
    if (this.quiz && this.quiz.current < this.quiz.total)
    {
        this.quiz.question = false;

        if (this.selection_level == HexContainer.LEVEL_1)
        {
            var keys = Object.keys(this.regiuni);
            var region_index = Math.floor(Math.random() * keys.length);

            this.quiz.question = this.regiuni[keys[region_index]].id;
            this.quiz.question_text = this.regiuni[keys[region_index]].name;
        }
        else if (this.selection_level == HexContainer.LEVEL_2)
        {
            var keys = Object.keys(this.regiuni);
            var region_index = Math.floor(Math.random() * keys.length);
            var region = this.regiuni[keys[region_index]];
            var county_index = Math.floor(Math.random() * region.judete.length);

            this.quiz.question = region.judete[county_index].id;
            this.quiz.question_text = region.judete[county_index].name;
        }
    }
};

HexCountryProgram.prototype.click = function(selected_tile)
{
    if (selected_tile && this.quiz.started)
    {
        var region = selected_tile.groups[1];
        var county = selected_tile.groups[2];

        if (this.quiz.type == HexCountryProgram.QUIZ_TYPE_REGION)
            this.quiz_answer(region.id);
        else if (this.quiz.type == HexCountryProgram.QUIZ_TYPE_COUNTY)
            this.quiz_answer(county.id);
    }
};

HexCountryProgram.prototype.render = function(timestamp)
{
    this.hex_map.scroll();

    this.hex_map.ctx.fillStyle = '#fff';
    this.hex_map.ctx.fillRect(0, 0, this.hex_map.map_screen.width, this.hex_map.map_screen.height);

    // Base tiles.
    for (var row = 0; row < this.hex_map.rows; ++row)
    {
        for (var col = 0; col < this.hex_map.cols; ++col)
        {
            var tile = this.hex_map.tiles[row][col];
            this.hex_map.draw_hex(tile, this.selection_level);
        }
    }

    // Mouse over tile.
    // if (this.hex_map.over_tile)
    //     this.hex_map.draw_hex(this.hex_map.over_tile, true);

    // -- Borders.

    for (var name in this.regiuni)
    {
        var regiune = this.regiuni[name];

        for (var i = 0; i < regiune.judete.length; ++i) {
            regiune.judete[i].draw_group_borders(this.hex_map.ctx);
        }
    }

    // Base group borders.
    this.hex_map.tile_group.draw_group_borders(this.hex_map.ctx);

    if (!this.quiz.started)
    {
        // -- Labels.

        for (var name in this.regiuni) {
            this.regiuni[name].draw_title(this.hex_map.ctx);
        }

        for (var name in this.regiuni)
        {
            var regiune = this.regiuni[name];

            for (var i = 0; i < regiune.judete.length; ++i) {
                regiune.judete[i].draw_title(this.hex_map.ctx);
            }
        }
    }
};

export default HexCountryProgram;