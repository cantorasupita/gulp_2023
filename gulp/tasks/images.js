import imagemin from "gulp-imagemin"

export const images = () => {
    return app.gulp.src(app.path.src.images, {sourcemaps: true})
        .pipe(app.plugins.plumber(// cahce error
            app.plugins.notify.onError({
                title: 'IMAGES',
                message: "Error: <%=error.message %>"
        })))
        .pipe(app.plugins.newer(app.path.build.images)) // proverca la img la obnovlenie
        .pipe(imagemin({ // minification img
            progressive: true,
            svgoPlugins: [{ removeViewBox: false}],
            interlaced: true,
            optimizationlevel: 3
        }))
        .pipe(app.gulp.dest(app.path.build.images)) 
        .pipe(app.gulp.src(app.path.src.svg)) //svg
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browsersync.stream())
}