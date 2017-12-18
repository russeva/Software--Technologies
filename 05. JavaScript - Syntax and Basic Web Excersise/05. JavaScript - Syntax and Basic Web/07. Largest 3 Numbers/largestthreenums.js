function findNums (arr) {
   
    let inputArray = arr.map(Number);

    let outputArray = inputArray.sort(function(a, b){return b-a});

    for (i = 0; i < Math.min(3, outputArray.length); i++)
	{
        console.log(outputArray[i]);
	}

}
