module.exports = function(grunt) {

  // Project configuration.
  var browserifyCommonConfig = {
      src: [
          "./public/js/auth.js",
          "./public/js/home.js",
      ],
      dest: './dist/js/common.js',
      options: {
              browserifyOptions: { debug: true },
              transform: [["babelify", { "presets": ["es2015"] }]]
      ,
      plugin: [
             [
               "factor-bundle", { outputs: [
                 "./dist/js/auth.js",
                 "./dist/js/home.js"
             ]
         }]
     ]
   }
 };

 var browserifyWatchConfig = browserifyCommonConfig;
 browserifyWatchConfig.options.watch = true;
 browserifyWatchConfig.options.keepAlive = true;


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
        dist: ['dist', 'backend'],
        css: ['*.css'],
    },
    eslint: {
        src: ['src/**/*.js', 'public/**/*.js', '!public/lib/**/*']
    },
    exec: {
      'babel-backend': 'npm run babel-backend'
    },
    browserify: {
      compile: browserifyCommonConfig,
      watch: browserifyWatchConfig
    },
    watch: {
        html: {
            files: ['!public/**/*.js', 'public/**/*', '!public/**/*.scss'],
            tasks: ['copy:main']
        },

        style: {
            files : ['public/css/**/*.scss'],
            tasks: ['sass']
        }

    },
    copy: {
      main: {
        files: [{
            expand: true,
            src: ['**/*', '!**/*.js', '!**/*.scss'],
            cwd: 'public',
            dest: 'dist'
        },
        {
            expand: true,
            src: ['js/lib/*.js'],
            cwd: 'public',
            dest: 'dist'
        }]
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'public/css',
          src: ['*.scss'],
          dest: 'dist/css',
          ext: '.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browserify');

  var tasks = ['clean', 'eslint', 'copy', 'browserify:compile','exec', 'sass']
  // Default task(s).
  grunt.registerTask('default', tasks);

};
