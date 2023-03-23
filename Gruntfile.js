// Compress when not dev.
var is_dev = false;
// Sourcemaps when debug.
var is_debug = false;

var copy_files_list = function()
{
    var res = [];

    var main_js = 'hexgrid.js';

    res.push(main_js);

    if (is_debug)
        res.push(main_js + '.map');

    return res;
};

module.exports = function(grunt)
{
	grunt.initConfig({
        watch:
		{
			jsFiles:
			{
				files: ['src/**/*'],
				tasks: ['build-dev']
			}
        },

        browserify:
		{
			default:
			{
				options:
				{
					browserifyOptions:
					{
						debug: is_debug,
						paths: ['src/js/']
                    },
                    transform: [
                        ["babelify", {
                            presets: ["@babel/preset-env"],
                            sourceMaps: is_debug
                        }]
                    ]
                },
				src: 'src/js/main.js',
				dest: 'src/js/tmp/hexgrid.js'
			}
		},

		exorcise:
		{
			extractor:
			{
				files: {
					'src/js/tmp/hexgrid.js.map': ['src/js/tmp/hexgrid.js']
				}
			}
		},

        terser:
        {
            default:
            {
                options: {
                    compress: is_dev ? false : {ecma: 2015},

                    sourceMap: {
                        filename: 'src/js/tmp/hexgrid.js',
                        content: 'src/js/tmp/hexgrid.js.map'
                    }
                }
            }
        },

        copy:
        {
            default:
            {
                files: [
                    {
                        expand: true,
                        cwd: 'node_modules',
                        src: [
                            'bootstrap/dist/css/bootstrap.min.css',
                            'bootstrap/dist/css/bootstrap-theme.min.css',
                            'bootstrap-icons/font/**/*',
                        ],
                        dest: 'build/libs/'
                    },

                    {
                        expand: true,
                        cwd: 'src/',
                        src: [
                            'index.html',
                            'README.md',
                            'css/style.css',
                        ],
                        dest: 'build/'
                    },

                    {
                        expand: true,
                        cwd: 'src/js/tmp/',
                        src: copy_files_list(),
                        dest: 'build/js/'
                    }
                ]
            }
        },

        clean: ['build']
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-terser');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-extract-sourcemap');
    grunt.loadNpmTasks('grunt-exorcise');

    grunt.registerTask('default', 'watch');

    var tasks = ['clean', 'browserify'];

    if (is_debug)
        tasks.push('exorcise');

    if (!is_dev)
        tasks.push('terser');

    tasks.push('copy');
    grunt.registerTask('build', tasks);
}