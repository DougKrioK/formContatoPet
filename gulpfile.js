var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var clean = require("gulp-clean");
var uglify = require("gulp-uglify");
var cssmin = require("gulp-cssmin");
var concat = require("gulp-concat");
var usemin = require("gulp-usemin");
var htmlmin = require('gulp-htmlmin');

gulp.task("default",['copy'],function(){
	gulp.start("build");



});


gulp.task("server",function(){
	browserSync.init({
		 proxy: "127.0.0.1:8080"
		/*server:{
			baseDir:"eventos"
		},proxy:"127.0.0.1"*/

	});
	gulp.watch("src/**/*").on("change",browserSync.reload);

});

gulp.task("copy",['clean'],function(){



	 gulp.src("src/model/*").pipe(gulp.dest("dist/model/"));
	 gulp.src("src/fonts/*").pipe(gulp.dest("dist/fonts/"));
	 gulp.src("src/img/*").pipe(gulp.dest("dist/img/"));



	return;

});

gulp.task("clean",function(){

return gulp.src("dist").pipe(clean());

});

gulp.task("build",function(){

	//build do index
	gulp.src("src/index.html")
	.pipe(usemin({
		css:[cssmin],
		js:[uglify],
		html: [ htmlmin({collapseWhitespace: true})]

	}))
	.pipe(gulp.dest("dist"));
		

});



