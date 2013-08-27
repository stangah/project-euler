/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function eulerFive()
{
    var test = 2520, i = 0;
    while (test < 1e12)
	{
		for (i = 19; ; i--)
		{
			if (i === 0)
			{
				return test;
			}
			else if (test % i !== 0)
			{
				test += 20;
				break;
			}
		}
		
	}
}

eulerFive();