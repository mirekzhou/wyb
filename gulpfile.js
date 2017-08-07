'use strict';

// gulp and gulp plugins
var gulp         = require('gulp');
var clean        = require('gulp-clean');
var cssmin       = require('gulp-minify-css');
var htmlmin      = require('gulp-minify-html');
var uglify       = require('gulp-uglify');
var jsonminify   = require('gulp-jsonminify');
var replace      = require('gulp-batch-replace');
var rename       = require('gulp-rename');
var shell        = require('gulp-shell');
var spritesmith  = require('gulp.spritesmith');
var gutil        = require('gulp-util');
var concat       = require('gulp-concat');
var addsrc       = require('gulp-add-src');
var gulpif       = require('gulp-if');
var watch        = require('gulp-watch');
var sass         = require('gulp-sass');
var flatten      = require('gulp-flatten');
var htmlReplace  = require('gulp-html-replace');
var gzip         = require('gulp-gzip');
var tinypng      = require('gulp-tinypng');
var tinyjpg      = require('gulp-tinyimg');
var rev          = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var ftp          = require('gulp-ftp');
var gutil        = require('gulp-util');
var browserSync  = require('browser-sync').create();
var browserSync2 = require('browser-sync').create();

var src_js_lib_path     = 'src/lib/js/';
var src_css_lib_path    = 'src/lib/css/';
var src_scss_path       = 'src/scss/';
var build_html_path     = 'build/';
var build_js_path       = 'build/js/';
var build_css_path      = 'build/css/';

gulp.task('default', function () {
    var gulpTasks = Object.keys(gulp.tasks);
    var colors    = gutil.colors;
    var log       = gutil.log;

    colors.enabled = true;
    colors.supportsColor = true;

    log(colors.cyan('-- All Tasks --'));
    for (var i = 0; i < gulpTasks.length; i++) {
        log('*  ', colors.green(gulpTasks[i]));
    }
});

gulp.task('clean', function () {
    return  gulp.src([src_js_lib_path, src_css_lib_path, 'build/*', 'dist/*', 'rev/*'], {read: false})
                .pipe(clean());
});

gulp.task('clean-dist', function () {
    return  gulp.src('dist/*', {read: false})
                .pipe(clean());
});

gulp.task('prepare', ['clean'], function () {
    gulp.src([
            './bower_components/datetimepicker/jquery.datetimepicker.css',
            './bower_components/Gallery/css/blueimp-gallery.min.css',
            './bower_components/bootstrap/dist/css/bootstrap.min.css',
            './bower_components/unslider/dist/css/*.css'
        ])
        .pipe(gulp.dest(src_css_lib_path));

    gulp.src([
            './bower_components/jquery/dist/jquery.min.js',    //请勿更新jquery到3.0及以上，因为会与signalR冲突，且signalR只能用2.0.0及以下的
            './bower_components/bootstrap/dist/js/bootstrap.min.js',
            './bower_components/page/page.js',
            './bower_components/jquery-i18next/jquery-i18next.min.js',
            './bower_components/i18next-xhr-backend/i18nextXHRBackend.min.js',
            './bower_components/i18next/i18next.min.js',
            './bower_components/datetimepicker/jquery.datetimepicker.js',
            './bower_components/Gallery/js/blueimp-gallery.min.js',
            './bower_components/unslider/dist/js/unslider-min.js',
            './bower_components/distpicker/dist/distpicker.data.min.js',
            './bower_components/distpicker/dist/distpicker.min.js',
            './bower_components/JavaScript-MD5/js/md5.min.js',
            './bower_components/spin.js/spin.min.js',
            './bower_components/clipboard/dist/clipboard.min.js',
            './bower_components/director/build/director.js',
            './bower_components/network-js/dist/network.min.js',
            './bower_components/PubSubJS/src/pubsub.js',
            './bower_components/jQuery-ajaxTransport-XDomainRequest/jquery.xdomainrequest.min.js',
            './bower_components/jQuery-ajaxTransport-XDomainRequest/jQuery.XDomainRequest.js',
            './bower_components/antimoderate/antimoderate.min.js',
            './bower_components/jquery-circle-progress/dist/circle-progress.min.js',
            './bower_components/js-base64/base64.min.js'
        ])
        .pipe(gulp.dest(src_js_lib_path));

    gulp.src('./bower_components/bootstrap/dist/fonts/*')
        .pipe(gulp.dest('build/fonts/'));

    // gulp.src(['src/img/*.ico'])
    //     .pipe(gulp.dest('build/img/'));

    // gulp.src(['src/img/*.gif'])
    //     .pipe(gulp.dest('build/img/'));

    // gulp.src(['src/img/*.jpg'])
    //     .pipe(tinyjpg('ep-DdwBGWdntDVYb7GnqrfkWOAQMBdj2'))
    //     .pipe(gulp.dest('build/img/'));

    // gulp.src(['src/img/*.png'])
    //     .pipe(tinypng('ep-DdwBGWdntDVYb7GnqrfkWOAQMBdj2'))
    //     .pipe(gulp.dest('build/img/'));
});

gulp.task('build', function () {
    gulp.src('https/*')
        .pipe(gulp.dest('build/'));

    gulp.src('src/config/*.js')
        .pipe(gulp.dest('build/config/'));

    gulp.src('src/js/check.js')
        .pipe(gulp.dest('build/js'));

    gulp.src('src/env.js')
        .pipe(gulp.dest('build/'));

    gulp.src([
            'src/lib/js/jquery.min.js',
            'src/lib/js/director.js',
            'src/lib/js/jquery.datetimepicker.js',
            'src/lib/js/unslider-min.js',
            'src/lib/js/pubsub.js',
            'src/lib/js/circle-progress.min.js',
            //'src/lib/js/jquery.signalR-2.0.3.min.js',
            //'src/lib/js/js.cookie.js',
            //'src/lib/js/antimoderate.min.js',
            //'src/lib/js/jquery.xdomainrequest.min.js',  //解决IE8, IE9及一下ajax请求: Error：access is denied的bug.
            //'src/lib/js/jQuery.XDomainRequest.js',
            'src/lib/js/md5.min.js',
            'src/lib/js/spin.min.js',
            'src/lib/js/clipboard.min.js',
            'src/lib/js/base64.min.js',
            'src/js/utils/Service.js',
            'src/js/utils/util.js',
            'src/js/plugins/IMDialog.js',
            'src/js/plugins/*.js',
            'src/js/components/*.js',
            'src/js/pages/*.js',
            'src/js/app.js',
            'src/js/utils/comet.js',
        ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build/js'))

    gulp.src([
            'src/scss/mixins.scss',
            'src/scss/reset.scss',
            'src/scss/plugins/*.scss',
            'src/scss/components/*.scss',
            'src/scss/util/*.scss',
            'src/scss/pages/*.scss',
            'src/scss/app.scss'
        ])
        .pipe(sass())
        .pipe(flatten())
        .pipe(addsrc.prepend([  'src/lib/css/jquery.datetimepicker.css',
                                'src/lib/css/unslider.css',
                                'src/lib/css/unslider-dots.css']))
        .pipe(concat('app.css'))
        .pipe(gulp.dest('build/css/'));

    gulp.src('src/index.html')
        .pipe(htmlReplace({
            'css': 'css/app.css',
            'js': 'js/app.js'
        }))
        .pipe(gulp.dest(build_html_path));

    gulp.src('src/index.htm')
        .pipe(gulp.dest(build_html_path));

    /*
    ** ----------help center ------------------
    */
    gulp.src([
            'src/js/IEDialog.js'
        ])
        .pipe(concat('IEDialog.js'))
        .pipe(gulp.dest('build/js'));

    gulp.src([
            'src/lib/js/jquery.min.js',
            'src/js/utils/Service.js',
            'src/js/utils/util.js',
            'src/js/plugins/IMDialog.js',
            'src/js/plugins/*.js',
            'src/js/components/*.js',
            'src/js/help.js'
        ])
        .pipe(concat('help.js'))
        .pipe(gulp.dest('build/js'));

    gulp.src([
            'src/scss/mixins.scss',
            'src/scss/reset.scss',
            'src/scss/plugins/*.scss',
            'src/scss/components/*.scss',
            'src/scss/util/*.scss',
            'src/scss/help.scss'
        ])
        .pipe(sass())
        .pipe(flatten())
        .pipe(concat('help.css'))
        .pipe(gulp.dest('build/css/'));

    gulp.src('src/help.html')
        .pipe(htmlReplace({
            'css': 'css/help.css',
            'js': 'js/help.js'
        }))
        .pipe(gulp.dest(build_html_path));

    gulp.src('src/loading.html')
        .pipe(gulp.dest(build_html_path));

    gulp.src('src/sportRedirect.html')
        .pipe(gulp.dest(build_html_path));

    gulp.src('src/403.html')
        .pipe(gulp.dest(build_html_path));

    gulp.src('src/scss/403.scss')
        .pipe(sass())
        .pipe(flatten())
        .pipe(concat('403.css'))
        .pipe(gulp.dest('build/css/'));

    gulp.src('src/404.html')
        .pipe(gulp.dest(build_html_path));

    gulp.src('src/scss/404.scss')
        .pipe(sass())
        .pipe(flatten())
        .pipe(concat('404.css'))
        .pipe(gulp.dest('build/css/'));

    gulp.src('src/500.html')
        .pipe(gulp.dest(build_html_path));

    gulp.src(['src/img/*'])
        .pipe(gulp.dest('build/img/'));

    gulp.src('src/scss/500.scss')
        .pipe(sass())
        .pipe(flatten())
        .pipe(concat('500.css'))
        .pipe(gulp.dest('build/css/'));

    gulp.src('src/maintainance.html')
        .pipe(gulp.dest(build_html_path));

    gulp.src('src/scss/maintainance.scss')
        .pipe(sass())
        .pipe(flatten())
        .pipe(concat('maintainance.css'))
        .pipe(gulp.dest('build/css/'));

    gulp.src('src/locales/**/*.json')
        .pipe(gulp.dest('build/locales/'));
});

gulp.task('dist', ['clean-dist'], function () {
    gulp.src('build/env.js')
        .pipe(gulp.dest('dist/'));

    gulp.src('build/config/*.js')
        .pipe(rev())
        .pipe(gulp.dest('dist/config/'))
        .pipe(rev.manifest('rev-manifest.json', {base: process.cwd()+'/dist', merge: true}))
        .pipe(gulp.dest('dist'));

    gulp.src(['build/js/*.js'])
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('dist/js/'))
        .pipe(rev.manifest('rev-manifest.json', {base: process.cwd()+'/dist', merge: true}))
        .pipe(gulp.dest('dist'));

    gulp.src(['build/css/*.css'])
        .pipe(cssmin())
        .pipe(rev())
        .pipe(gulp.dest('dist/css/'))
        .pipe(rev.manifest('rev-manifest.json', {base: process.cwd()+'/dist', merge: true}))
        .pipe(gulp.dest('dist'));

    gulp.src(['rev-manifest.json', 'build/*.html'])
        .pipe( revCollector({
            replaceReved: true
        }))
        //.pipe(htmlmin({ignoreCustomFragments: '<!--[if lt IE 10]>', minifyJS: true}))
        .pipe( gulp.dest('dist') );

    gulp.src(['build/img/*'])
        .pipe(gulp.dest('dist/img/'));

    // gulp.src('build/locales/**/*.json')
    //     .pipe(gulp.dest('dist/locales/'));

    gulp.src('src/index.htm')
        .pipe(gulp.dest('dist/'));
});


gulp.task('ftp', function () {
    return gulp.src('dist/**')
        .pipe(ftp({
            host: 'e046.e-veb.info',
            port: 8021,
            user: 'e046.e-veb.info|dennis',
            pass: 'Dennis123',
            remotePath: '/'
        }))
        .pipe(gutil.noop());
});

var reload   = browserSync.reload;
var reload2  = browserSync2.reload;

gulp.task('serve-build', ['build'], function () {
    browserSync.init({
        server: {
            baseDir: "build/"
        },
        https: {
            key: 'build/key.pem',
            cert: 'build/cert.pem'
        },
        port: 8081
    });

    gulp.watch('src/**', ['build']);
    gulp.watch("build/*.html").on("change", reload);
});

gulp.task('serve-build-http', ['build'], function () {
    browserSync.init({
        server: {
            baseDir: "build/"
        },
        port: 8091
    });

    gulp.watch('src/**', ['build']);
    gulp.watch("build/*.html").on("change", reload);
});

gulp.task('serve-dist', ['dist'], function () {
    browserSync2.init({
        server: {
            baseDir: "dist/"
        },
        https: {
            key: 'build/key.pem',
            cert: 'build/cert.pem'
        },
        port: 8082
    });

    gulp.watch(['dist/index.html']).on("change", reload2);
});