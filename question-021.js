/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

function findDivisorsSum(n)
{
    var total = 0;
	nString = n.toString();
    if (nString in cache)
	{
        return cache[n];
	}
	else
	{
		for (var i = 1; i <= n / 2; i++)
		{
			if (n % i === 0)
			{
				total += i;
			}
		}
		return cache[n] = total;
	}
}

function eulerTwentyOne(limit)
{
	var sum = 0, oneDiv = 0, recip = 0, cache = {};
	for (var i = 1; i < limit; i++)
	{
        oneDiv = findDivisorsSum(i);
        recip = findDivisorsSum(oneDiv);
        if (i === recip && i !== oneDiv)
		{
            sum += i;
		}
	}
	return sum;
}

eulerTwentyOne(10000);