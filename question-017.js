/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

function numCounter(num)
{
    var counter = 0;
	switch (num)
	{
	case 0:
		break;
	case 17:
		counter++;
	case 13:
	case 14:
	case 18:
	case 19:
		counter++;
	case 15:
	case 16:
		counter++;
	case 11:
	case 12:
		counter++;
	case 3:
	case 7:
	case 8:
		counter++;
	case 4:
	case 5:
	case 9:
		counter++;
	default:
		counter += 3;
	}
	return counter;
}

function tensCounter(num)
{
	var counter = 0;
	switch (num)
	{
	case 5:
	case 6:
    case 4:
		counter += 5;
		break;
	case 7:
		counter++;
	default:
		counter += 6;
	}
    return counter;
}

function eulerSeventeen(limit)
{
	var i = 0, j = 0, d = 0, r = 0, temp = 0, total = 0, digits = 0, order = 0;
	
	// Loop through numbers up to limit
	for (i = 1; i <= limit; i++)
	{
		if (i === 1000)  // Efficient given the problem
		{
			total += 11;
			break;
		}
		
		//Loop through digits
		numDigits = Math.floor(Math.log(i) / Math.LN10) + 1;
		temp = 0;
        r = 0;
        for (j = numDigits; j > 0; j--) // Index j is just to keep track of which digit we're on
		{
            order = Math.pow(10, (j - 1));
			// Check hundreds
			if (j === 3)
			{
				d = Math.floor(i / order); // hundreds digit
				r = i % order; // remainder
				temp += numCounter(d) + 7; // e.g. six hundred
				if (r === 0) // even hundred
				{
					break;
				}
				temp += 3; // "and"
			}
			
            
			// Check tens
			if (j === 2)
			{
				if (r < 20 && r > 0)
                {
					temp += numCounter(r);
					break;
				}
                else if (numDigits === 2 && i < 20)
                {
                    temp += numCounter(i);
                    break;
                }
                
                if (numDigits === 2)
                {
                    d = Math.floor(i / order); // tens digit
                }
                else
                {
                    d = Math.floor(r / order); // tens digit
                }
                
				r = i % order;
				temp += tensCounter(d);
                
			}
            
            // Check ones
            if (j === 1)
            {
                
                
                if (numDigits === 1)
                {
                    d = i;
                }
                else
                {
                    d = r;
                }
                temp += numCounter(d);
            }
		}
        total += temp;
	}
	return total;
}

eulerSeventeen(1000);