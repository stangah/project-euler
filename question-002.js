/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

function eulerTwo()
{
    var prev = 2, prev1 = 1, total = 2, x = 0;
    while (x <= 4e6)
    {
        x = prev + prev1;
        if (x % 2 === 0)
        {
            total += x;
        }
        prev1 = prev;
        prev = x;
    }
    console.log(total);
}

eulerTwo();
    