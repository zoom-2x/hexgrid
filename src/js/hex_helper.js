// ----------------------------------------------------------------------------------
// -- Helper routines.
// ----------------------------------------------------------------------------------

var HexHelper =
{
    _inside_polygon: function(points, x, y)
    {
        for (var i = 0; i < points.length; ++i)
        {
            var current = points[i];
            var next = points[(i + 1) % points.length];

            var v = (next[0] - current[0]) * (y - current[1]) - (next[1] - current[1]) * (x - current[0]);

            if (v > 0)
                return false;
        }

        return true;
    },

    points_equal: function(p0, p1) {
        return (p0[0] == p1[0] && p0[1] == p1[1]);
    }
};

export default HexHelper;