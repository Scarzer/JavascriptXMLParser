var parser = require('xml2json'),
    fs = require('fs'),
    util = require('util');

fs.readFile(__dirname + '/shows.xml', function(err, data){
    var json = parser.toJson(data, {object : true});
    var doc = json["ShowSchedule"]["Film"];

    for(var j = 0; j < doc.length; j++){
         
        console.log("Title is : " + doc[j]["Title"] );
        console.log("The rating is : " + doc[j]["Rating"]);
        console.log("The show times are the following : ") 
        var shows = doc[j]["Show"]
        for(var i = 0; i < shows.length; i++){
            console.log("\n==========================");
            console.log("Time: " + shows[i]["DateTime"]) 
            console.log("In Theater " + shows[i]["Aud"]);
        }
    }
});












/*
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
*/



