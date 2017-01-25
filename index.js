var fs = require('fs');
var through = require('through2');

var tpl = fs.readFileSync(__dirname + '/wrap-style.tpl.js').toString();


module.exports = function () {

  return through.obj(function (file, enc, cb) {

    var contents = file.contents.toString('utf8').trim();

    var wrapped = tpl.replace('<%= contents %>', contents);

    file.contents = new Buffer(wrapped);

    this.push(file);

    return cb();
  });

};
