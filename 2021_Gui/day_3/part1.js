const part1 = arr => 
{
    let gammaRate = [];
    let epsilonRate = [];
    // Populate gammeRate Array
    arr.map(binNumber => 
    {   
        binNumber.split('').map((binItem, index) => 
        {   
            if (gammaRate.length < index + 1) 
            {
                gammaRate[index] = 0;
            }
            if (binItem == '1')
            {
                gammaRate[index] = gammaRate[index] + 1;
            }
        });
    });
    //Determine gammaRate most common bit by index
    gammaRate = gammaRate.map(item => 
    {
        if (item >= Math.round(arr.length/2))
        {
            return '1'
        }
        else
        {
            return '0'
        }
    });
    //Determine epsilonRate
    epsilonRate = gammaRate.map(item => 
        {
            if (item == 0)
            {
                return '1';
            }
            else
            {
                return '0';
            }
        });
    //Get decimal value of each rate and multiply to get the power consumption
    gammaRate = Number.parseInt(gammaRate.join(''), 2);
    epsilonRate = Number.parseInt(epsilonRate.join(''), 2);
    return gammaRate*epsilonRate;
}
module.exports = part1;


