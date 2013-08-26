/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

function eulerNine(num)
{
    var a = 0, b = 0, c = 0;
	for (c = 3; c < num; c++)
	{
		for (b = 2; b < c; b++)
		{
			a = Math.sqrt(c*c - b*b);
			if (a + b + c === num)
			{
				return a * b * c;
			}
		}
	}
	return  "There exists no Pythagorean triplet for this input";
}

eulerNine(1000);