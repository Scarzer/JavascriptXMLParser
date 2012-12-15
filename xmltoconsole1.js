var fs = require('fs'),
    xml2js = require('xml2js'),
    util = require('util');

var parser = new xml2js.Parser();

fs.readFile(__dirname + '/shows.xml', function(err, data) {
    parser.parseString(data, function (err, result){
        console.log(util.inspect(result, false, null));
        console.log('Done');
    });
});


