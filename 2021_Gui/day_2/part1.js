const part1 = arr => 
{
    let position = 0, depth = 0;
    arr.map(item => 
        {
            if (item[0] === 'forward') {position += item[1]}
            else if (item [0] === 'down') {depth += item[1]}
            else if (item [0] === 'up') {depth -= item[1]}
        });
    return position*depth;
}
module.exports = part1;


