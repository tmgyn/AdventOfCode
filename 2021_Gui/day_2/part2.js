const part2 = arr => 
{
    let position = 0, depth = 0, aim = 0;
    arr.map(item => 
        {
            if (item [0] === 'down') {aim += item[1]}
            else if (item [0] === 'up') {aim -= item[1]}
            else if (item[0] === 'forward') 
            {
                position += item[1]
                depth += item[1] * aim;
            }
            
        });
    return position*depth;
}
module.exports = part2;


