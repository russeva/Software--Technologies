function productOfThree(arr) {

    let numbers = arr.map(Number);
	let negativeNumbers = numbers.filter(n => n < 0);

    if (negativeNumbers.length % 2 == 0)
	{
        return 'Positive';
	}
    else
	{
        return 'Negative';
	}
}