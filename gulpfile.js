import gulp from 'gulp';
//import putei
import {path} from './gulp/config/path.js';
import {plugins} from './gulp/config/plugins.js';
//globalinie peremenie
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

//import task(zadaci)
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js'
import { html } from './gulp/tasks/html.js'
import { server } from './gulp/tasks/server.js'
import { scss } from './gulp/tasks/scss.js'
import { js } from './gulp/tasks/js.js'
import { images } from './gulp/tasks/images.js'
import { fonts } from './gulp/tasks/fonts.js'


//nabliudateli function------------------------------------------------------
function watcher(){
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, scss)
    gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.images, images)
}


//Основные задачи
const mainTask = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images))


//режым  DEV--------------------------------------------------------------------
//udaliti din /dist, copi file, zborca, copii html, watcher, zapusc la server
const dev = gulp.series(reset, mainTask, gulp.parallel(watcher, server))






//gulp
gulp.task('default', dev)
