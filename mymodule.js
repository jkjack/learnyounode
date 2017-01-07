

module.exports = function (directory, filter, callback){
  var fs = require('fs');
  fs.readdir(directory, function ( err, list) {
    if (err) return callback(err)

    var extensionsFound = list.filter( file => {
      return file.split('.')[1] === filter;
    })
    callback(null, extensionsFound);
  })
}
