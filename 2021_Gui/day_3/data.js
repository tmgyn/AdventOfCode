// Read text file and convert into array.
var fs = require("fs");
var text = fs.readFileSync("./data.txt").toString('utf-8');
var arr = text.split("\n")
module.exports = arr;