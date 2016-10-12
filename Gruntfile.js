module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            js: {
                src: ['src/js/**/*.js'],
                dest: 'js/client-scripts.js',
            },
            css: {
                src: ['src/css/**/*.css'],
                dest: 'css/client-styles.css',
            },
        }, 
        uglify:{
            js:{
                src: ['js/client-scripts.js'],
                dest: 'js/client-scripts.js'
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                'css/client-styles.css': ['css/client-styles.css']
                }
            }
        },
        watch: {
            options: {
            livereload: true,
            },
            js: {
                files: ['src/js/**/*.js'],
                tasks: ['concat:js'],
                options: {
                    atBegin: true,
                },
            },
            css: {
                files: ['src/css/**/*.css'],
                tasks: ['concat:css'],
                options: {
                    atBegin: true,
                },
            },
            html: {
                files: ['**/*.html'],
                tasks: [],
                options: {
                    atBegin: true,
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['watch']);
}