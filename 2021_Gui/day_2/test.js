const arr = require("./data");
s = 'juliasamanthasamanthajulia'
x = '**thas'

const f = (s, x) => 
{
    x = x.split('').map(item => 
        {
            if (item == '*'){return '.'}
            else {return item}
        }).join('');

    
    resultObj = s.match(x);
    return resultObj.index;
    //return x;
}


console.log(f(s, x));