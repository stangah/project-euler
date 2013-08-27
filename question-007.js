/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

function isPrime(num)
{
    var i = 0;
	for (i = 2; i <= Math.floor(Math.sqrt(num)); i++)
	{
		if (num % i === 0)
		{
			return false;
		}
	}
	return true;
}

function eulerSeven(nth)
{
	var i = 2, counter = 0;
	for (;; i++)
	{
		if (isPrime(i))
		{
			counter++;
			if (counter === nth)
			{
				return i;
			}
		}
	}
}

eulerSeven(10001);