/*
A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

var permute = [], count = 0;

function findPermutations(charset, sofar, target)
{
    var progress = [], chars = [];
    if (charset.length === 0)
    {
        //permute.push(sofar);
        count++;
        if (count === target)
        {
            permute = sofar.slice();
        }
    }
    else
    {    
        for (var i = 0; i < charset.length; i++)
        {
            if (count === target)
            {
                break;
            }
            progress = sofar.slice();
            chars = charset.slice();
            progress.push(chars.splice(i,1)[0]);
            findPermutations(chars, progress, target);
        }
    }
}

function eulerTwentyFour()
{
    var array = [], tempArray = [], ans = [], val = arguments[0];
	for (var k = 1; k < arguments.length; k++)
    {
        array.push(arguments[k]);
    }
    findPermutations(array, [], val);
    return +permute.join('');
}



eulerTwentyFour(1e6,0,1,2,3,4,5,6,7,8,9);