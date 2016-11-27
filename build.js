const fs = require('fs');
const uglifyjs = require('uglifyjs');
const cleanCss = require('clean-css');

const jsSource = fs.readFileSync("./src/jquery.miniTip.js","utf8");
const cssSource = fs.readFileSync("./src/miniTip.css","utf8");

// JavaScript
// original 
fs.writeFileSync("./dist/jquery.minitip.js",jsSource);
// minified
fs.writeFileSync("./dist/jquery.minitip.min.js",uglifyjs.minify(jsSource,{fromString:true}).code);

// CSS
// original 
fs.writeFileSync("./dist/minitip.css",cssSource);
// minified
fs.writeFileSync("./dist/minitip.min.css",new cleanCss().minify(cssSource).styles);