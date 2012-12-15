var util = require('util')
var xml = require('node-xml')

var parser = new xml.SaxParser(function(foo){

    foo.onStartDocument(function(){
        console.log("We are now going to be looking into the xml document!")
    });

    foo.onEndDocument(function(){
        console.log("We are done reading through the file!")
    });

    foo.onStartElementNS(function(element, attrs, prefix, uri, namespaces){
        console.log("=> Started: " + element );
        console.log(JSON.stringify(attrs));
    });

    foo.onEndElementNS(function(element, prefix, uri){
        util.log("<= End: " + element + "\n");
        parser.pause();
        setTimeout(function(){
            parser.resume();}, 1000)
    });

})



parser.parseString("<html><body>");
parser.parseString("<!-- This is the start");
parser.parseString(" and the end of a comment -->");
parser.parseString("and lots");
parser.parseString("and lots of text&am");
parser.parseString("p;some more.");
parser.parseString("<![CD");
parser.parseString("ATA[ this is");
parser.parseString(" cdata ]]>");
parser.parseString("</body");
parser.parseString("></html>");

parser.parseFile("shows.xml")
