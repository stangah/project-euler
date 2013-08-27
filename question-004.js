/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

function isPalindrome(num)
{
    var digits = [], temp = num;
    
// Create array of digits
    while (temp !== 0)
	{
		digits.push(temp % 10);
		temp = Math.floor(temp / 10);
	}
    
// Check array for palindromicity (?)
	var dlength = digits.length, i = 0;
	while (i < Math.floor(dlength / 2))
	{
		if (digits[i] !== digits[dlength - i - 1])
		{
			return false;
		}
		i++;
	}
    return true; 
}

function eulerFour()
{
	var a = 999, b = 999, maxP = 0;
	while (a >= 100)
	{
		b = 999;
        while (b >= 100)
		{
			if (isPalindrome(a * b))
			{
				maxP = Math.max(maxP, a * b);
			}
			b--;
		}
		a--;
	}
    return maxP;
}

eulerFour();