/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

function isPrime(n)
{
    var i = 2;
    if (n === 1 || n === 2 || n === 3)
    {
        return true;
    }
    else if (n % 2 === 0)
    {
        return false;
    }
    else
    {
        while (i <=  Math.floor(Math.sqrt(n)))
        {
            if (n % i === 0)
            {
                return false;
            };
            i++;
        };
    };
    return true;
};

function eulerThree(num)
{
    var i = 0, max = 1;
    while (i <= Math.floor(Math.sqrt(num)))
    {
        if (num % i === 0 && isPrime(i))
        {
            max = i;
        }
        i++;
    }
    console.log(max);
}

eulerThree(600851475143);
