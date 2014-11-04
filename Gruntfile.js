module.exports = function(grunt) {
    grunt.initConfig({
        distFolder : 'dist',
        pkg : grunt.file.readJSON('package.json'),

        concat : {
            options:{
                separator : ';'
            },
            dist:{
                src : ['src/formbot.js'],
                dest : 'dist/formBot.js'
            }
        },
        watch: {
            scripts: {
                files: ['src/*.js'],
                tasks:['dev']
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('dev', ['concat']);
};