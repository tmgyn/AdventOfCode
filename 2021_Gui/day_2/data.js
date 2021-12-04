// Read text file and convert into array.
var fs = require("fs");
var text = fs.readFileSync("./data.txt").toString('utf-8');
var arr = text.split("\n")
arr = arr.map(item => item.split(' ').map(item => 
    {
        if (/\d+/.test(item)){return Number(item)}
        else {return item}
    }));

module.exports = arr;