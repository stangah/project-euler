/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/

function eulerSixteen(power)
{
    var array = [1], r = 0, temp = 0, total = 0;
    
    // Create array for power of 2
    for (var i = 1; i <= power; i++)
	{
		for (var j = 0; j < array.length; j++)
		{
			temp = array[j] * 2 + r;
			r = 0;
			if (temp >= 10)
			{
				r = Math.floor(temp / 10);
				if (j === array.length - 1)
				{
					array.push(0);
				}
			}
			array[j] = temp % 10;
		}
	}
    
    // Sum digits in array
    for (var k = 0; k < array.length; k++)
    {
        total += array[k];
    }
	return total;
}

eulerSixteen(1000);