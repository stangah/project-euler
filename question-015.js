/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

(Sorry, there's a picture that accompanies this)

How many such routes are there through a 20×20 grid?
*/

function eulerFifteen(n)  // For an n x n grid
{
    function factorial(q)
    {
        var fact = 1;
        for (var i = q; i > 0; i--)
        {
            fact *= i;
        }
        return fact;
    }
    
    var ans = 0;
    ans = Math.floor(factorial(2 *n) / (factorial(n) * factorial(n)));
    return ans;
}

eulerFifteen(20);