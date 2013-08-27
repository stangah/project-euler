/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

function isPrime(num)
{
    var i = 0;
    if (num === 1) return false; // Edge case
    for (i = 2; i <= Math.floor(Math.sqrt(num)); i++)
	{
		if (num % i === 0)
		{
			return false;
		}
	}
	return true;
}

function eulerTen(num)
{
	var sum = 0;
	for (var i = 1; i < num; i++)
	{
		if (isPrime(i))
		{
			sum += i;
		}
	}
	return sum;
}

eulerTen(2e6);