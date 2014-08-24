module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-angular-gettext');

    grunt.initConfig({
        nggettext_extract: {
            pot: {
                files: {
                    'po/template.pot': ['src/app/**/*.html']
                }
            }
        },
        nggettext_compile: {
            all: {
                options: {
                    module: 'app'
                },
                files: {
                    'src/app/translations.js': ['po/*.po']
                }
            }
        }
    });

    grunt.registerTask('default', 'nggettext_extract');
};
