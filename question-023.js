/*
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/

var cache = {};

function findDivSum(n)
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

function eulerTwentyThree()
{
	var total = 0, k = 0, add = 0;
	
	// Create array of abundant numbers
	var abundant = [];
	for (var i = 12; i < 28123; i++)
	{
		if (findDivSum(i) > i)
		{
			abundant.push(i);
		}
	}
	
	//Loop through positive integers
	for (var j = 1; j < 28123; j++)
	{
		k = 0;
		add = j;
		while (abundant[k] < j)
		{
			if (findDivSum(j - abundant[k]) > j - abundant[k])
			{
				add = 0;
                k++;
				break;
			}
            k++;
		}
		total += add;
		
	}
	return total;
}

eulerTwentyThree();