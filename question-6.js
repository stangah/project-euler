/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

function sumSqSum(array,n)  // Where n=1 for square of sum, n=2 for sum of square
{
	var total = 0, i = 0;
	for (i = 0; i < array.length; i++)
	{
		total += Math.pow(array[i], n);
	}
	return Math.pow(total, 3 - n);
}

function eulerSix(num)  // Where num defines how many natural numbers you want
{
	var array = [], i = 0, answer = 0;

	//Create array of natural numbers
	for (i = 0; i < num; i++)
	{
		array[i] = i + 1;
	}
	
	//Find difference
	answer = sumSqSum(array, 1) - sumSqSum(array, 2);
	return answer;
}

eulerSix(10);
