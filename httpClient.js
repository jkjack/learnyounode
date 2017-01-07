var http = require('http')

http.get(process.argv[2], function (response){
  response.setEncoding('UTF-8');
  response.on("data", function (data) {
    console.log(data);
  })
  response.on('error', function (e) {
    console.log(e);
  })
})

/* Example
var http = require('http');

http.get(process.argv[2], function(response){
    console.log('STATUS: ' + response.statusCode);
    console.log('HEADERS: ' + JSON.stringify(response.headers));

    response.setEncoding('utf8');

    response.on('data', function(chunk){
        console.log(chunk);
    });

}).on('error', function(e){
    console.log("Error: " + e.message);
    console.error("Error!", e);
});


..:: Original Code::..
var http = require('http');

http.get(process.argv[2], function(response){
    console.log('STATUS: ' + response.statusCode);
    console.log('HEADERS: ' + JSON.stringify(response.headers));

    response.setEncoding('utf8');

    response.on('data', function(chunk){
        console.log(chunk);
    });

}).on('error', function(e){
    console.log("Error: " + e.message);
    console.error("Error!", e);
});

>> Result <<
"Spewin'"                           ==    "Spewin'"
  "Christmas"                         ==    "Christmas"
  "Digger"                            ==    "Digger"
  "Divvy van"                         ==    "Divvy van"
  "Stonkered"                         ==    "Stonkered"
  "Bushie"                            ==    "Bushie"
  "Bities"                            ==    "Bities"
  "Chuck a yewy"                      ==    "Chuck a yewy"
  "Gyno"                              ==    "Gyno"
  "Tinny"                             ==    "Tinny"
  ""          
*/
