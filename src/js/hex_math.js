// ----------------------------------------------------------------------------------
// -- Math routines.
// ----------------------------------------------------------------------------------

var HexMath =
{
    r2d: 57.2957795130823208768,
    d2r: 0.01745329251994329577,

    rad2deg: function(v) {
        // return v * (180 / Math.PI);
        return v * HexMath.r2d;
    },

    deg2rad: function(v) {
        // return v * (Math.PI / 180);
        return v * HexMath.d2r;
    },

    // ----------------------------------------------------------------------------------
    // -- Vector math.
    // ----------------------------------------------------------------------------------

    vec_add: function(v1, v2)
    {
        var res = [0, 0];

        res[0] = v1[0] + v2[0];
        res[1] = v1[1] + v2[1];

        return res;
    },

    vec_subtract: function(v1, v2)
    {
        var res = [0, 0];

        res[0] = v1[0] - v2[0];
        res[1] = v1[1] - v2[1];

        return res;
    },

    vec_inverse: function(v)
    {
        var res = [0, 0];

        res[0] = -v[0];
        res[1] = -v[1];

        return res;
    },

    vec_muls: function(v, s)
    {
        var res = [0, 0];

        res[0] = v[0] *s;
        res[1] = v[1] *s;

        return res;
    },

    vec_dot: function(v1, v2)
    {
        var res = v1[0] * v2[0] + v1[1] * v2[1];
        return res;
    },

    vec_len: function(v)
    {
        var res = Math.sqrt(HexMath.vec_dot(v, v));
        return res;
    },

    vec_normalize: function(v)
    {
        var t = 1 / HexMath.vec_len(v);

        v[0] *= t;
        v[1] *= t;

        return v;
    },

    vec_perp: function(v)
    {
        // Clockwise on an inverted y axis.
        var res = [-v[1], v[0]];
        return res;
    },

    /**
     * @param vector p
     * @param float angle Radians.
     */
    rotate: function(p, angle)
    {
        var point = [0, 0];

        var s = Math.sin(angle);
        var c = Math.cos(angle);

        point[0] = p[0] * c - p[1] * s;
        point[1] = p[0] * s + p[1] * c;

        return point;
    },

    // ----------------------------------------------------------------------------------
    // -- Matrix stuff.
    // ----------------------------------------------------------------------------------

    mat_det: function(mat)
    {
        var result = mat[0][0] * (mat[1][1] * mat[2][2] - mat[1][2] * mat[2][1]) -
                     mat[0][1] * (mat[1][0] * mat[2][2] - mat[1][2] * mat[2][0]) +
                     mat[0][2] * (mat[1][0] * mat[2][1] - mat[1][1] * mat[2][0]);

        return result;
    },

    mat_inverse: function(mat)
    {
        // Assume mat is invertible.
        var one_over_det = 1 / HexMath.mat_det(mat);

        var res = [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
        ];

        res[0][0] = (mat[1][1] * mat[2][2] - mat[1][2] * mat[2][1]) * one_over_det;
        res[0][1] = -(mat[0][1] * mat[2][2] - mat[0][2] * mat[2][1]) * one_over_det;
        res[0][2] = (mat[0][1] * mat[1][2] - mat[0][2] * mat[1][1]) * one_over_det;
        res[1][0] = -(mat[1][0] * mat[2][2] - mat[1][2] * mat[2][0]) * one_over_det;
        res[1][1] = (mat[0][0] * mat[2][2] - mat[0][2] * mat[2][0]) * one_over_det;
        res[1][2] = -(mat[0][0] * mat[1][2] - mat[0][2] * mat[1][0]) * one_over_det;
        res[2][0] = (mat[1][0] * mat[2][1] - mat[1][1] * mat[2][0]) * one_over_det;
        res[2][1] = -(mat[0][0] * mat[2][1] - mat[0][1] * mat[2][0]) * one_over_det;
        res[2][2] = (mat[0][0] * mat[1][1] - mat[0][1] * mat[1][0]) * one_over_det;

        return res;
    },

    mat_mul: function(m1, m2)
    {
        var res = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        res[0][0] = m1[0][0] * m2[0][0] + m1[0][1] * m2[1][0] + m1[0][2] * m2[2][0];
        res[0][1] = m1[0][0] * m2[0][1] + m1[0][1] * m2[1][1] + m1[0][2] * m2[2][1];
        res[0][2] = m1[0][0] * m2[0][2] + m1[0][1] * m2[1][2] + m1[0][2] * m2[2][2];

        res[1][0] = m1[1][0] * m2[0][0] + m1[1][1] * m2[1][0] + m1[1][2] * m2[2][0];
        res[1][1] = m1[1][0] * m2[0][1] + m1[1][1] * m2[1][1] + m1[1][2] * m2[2][1];
        res[1][2] = m1[1][0] * m2[0][2] + m1[1][1] * m2[1][2] + m1[1][2] * m2[2][2];

        res[2][0] = m1[2][0] * m2[0][0] + m1[2][1] * m2[1][0] + m1[2][2] * m2[2][0];
        res[2][1] = m1[2][0] * m2[0][1] + m1[2][1] * m2[1][1] + m1[2][2] * m2[2][1];
        res[2][2] = m1[2][0] * m2[0][2] + m1[2][1] * m2[1][2] + m1[2][2] * m2[2][2];

        return res;
    }
};

export default HexMath;