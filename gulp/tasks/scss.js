import dartSass from 'sass';
import gulpSass  from 'gulp-sass'
import rename from 'gulp-rename';



import cleanCss from 'gulp-clean-css';//jatie stilei
//import webpcss from 'gulp-webpcss';
import autoPrefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries'//grupirovca media zaprosov



//===================================================================================
const sass = gulpSass(dartSass)

export const scss = () => {
    return app.gulp.src(app.path.src.scss, {sourcemaps: true})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'CSS',
                message: "Error: <%=error.message %>"
        })))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(groupCssMediaQueries())//grupirovca media zaprosov
        .pipe(autoPrefixer({
            grid: true,
            overrideBrowserlist: ["last 3 version"],
            cascade: true
        }))
        .pipe(app.gulp.dest(app.path.build.css)) //ne jatii fail style
        .pipe(cleanCss())//jatie stilei
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream())
}







/*

      .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'HTML',
                message: "Error: <%=error.message %>"
            }))
        )
        .pipe(fileinclude())//zborca shablonizatora
        .pipe(webpHtmlNosvg())//convertor la img
*/