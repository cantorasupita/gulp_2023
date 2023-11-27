






//convertam din  ttf in woff------------------------------------------------------
export const fonts = () => {
    //ишем файлы шрифтов .ttf
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.woff2`, {})
        .pipe(app.plugins.plumber(// catch ERROR
            app.plugins.notify.onError({
                title: 'FONTS',
                message: "Error: <%=error.message %>"
            }))
        )
        //выгружаем в папку с результатом
        .pipe(app.gulp.dest(`${app.path.build.fonts}`));
}



