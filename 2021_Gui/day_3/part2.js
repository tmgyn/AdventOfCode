const part2 = arr => 
{
    let counter = 0;
    let oxyGenRating = arr;
    let co2ScrubberRating = arr;

    // Find Oxygen Generator Rating
    while (oxyGenRating.length > 1)
    {
        if (findSumOfOnes(oxyGenRating, counter) >= Math.round(oxyGenRating.length/2)) 
        {
            oxyGenRating = oxyGenRating.filter(item => item[counter] == '1')
        }
        else 
        {
            oxyGenRating = oxyGenRating.filter(item => item[counter] == '0')
        }
        //sumOfOnes = 0;
        counter += 1;
    }
    counter = 0;
   
    // Find CO2 Scrubber Rating
    while (co2ScrubberRating.length > 1)
    {
        if (findSumOfOnes(co2ScrubberRating, counter) < Math.round(co2ScrubberRating.length/2)) 
        {
            co2ScrubberRating = co2ScrubberRating.filter(item => item[counter] == '1')
        }
        else 
        {
            co2ScrubberRating = co2ScrubberRating.filter(item => item[counter] == '0')
        }

        //sumOfOnes = 0;
        counter += 1;
    }
    
    // Convert ratings to Integers
    oxyGenRating = Number.parseInt(oxyGenRating.join(''), 2);
    co2ScrubberRating = Number.parseInt(co2ScrubberRating.join(''), 2);
    return oxyGenRating * co2ScrubberRating;
} 

// FindSumOfOnes function
const findSumOfOnes = (arr, counter) =>
{
    let result = 0;
    arr.map(binNumber => 
    {   
        if (binNumber[counter] == '1')
        {
            result += 1;
        }
    });
    return result
}
module.exports = part2;