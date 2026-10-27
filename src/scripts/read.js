// var fs = require("fs");

// var data = fs.readFileSync('wed.txt');


// console.log(`--Read File---`);
// console.log(data.toString());
// console.log(`--Read Complete--`);

var fs = require("fs");

console.log(`--Reading File ----`);

fs.readFile("wed.txt",function(err,data)
{
    if(!err){
        console.log(data.toString());
    }
    else {
        console.log(err);
    }

});

console.log(`---Read Complete---`);

