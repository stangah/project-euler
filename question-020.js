/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

function eulerTwenty(n)
{
    var array = [1], temp = 0, remainder = 0, sum = 0;
	
	// Loop over each number up to n
	for (var i = 1; i <= n; i++)
	{
		// Loop over each entry in array
		remainder = 0;
        for (var j = 0; j < array.length; j++)
		{
				temp = array[j] * i;
                array[j] = (temp + remainder) % 10;
                remainder = Math.floor((temp + remainder) / 10);
				if (remainder > 0 && j === array.length - 1)
				{
                    while (remainder > 0)
                    {
                        array.push(remainder % 10);
                        remainder = Math.floor(remainder / 10);
                    }
                    break;
				}
		}
	}
    
    for (var k = 0; k < array.length; k++)
    {
        sum += array[k];
    }
	return sum;
}

eulerTwenty(100);