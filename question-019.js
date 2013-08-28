/*
You are given the following information, but you may prefer to do some research for yourself.

-1 Jan 1900 was a Monday.
-Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
-A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

function eulerNineteen()
{
    var array = [31,28,31,30,31,30,31,31,30,31,30,31], day = 1, count = 0;
	for (var j = 1900; j < 2001; j++)
	{
		for (var i = 0; i < 12; i++)
		{
			if (i === 1 && j % 4 === 0 && j !== 1900)
			{
				day++;
			}
			
			day += array[i];
			
			if (day % 7 === 0 && j > 1900)
			{
				count++;
			}
		}
	}
	return count;
}

eulerNineteen();