function multiplyDivideCheck(arr) {
    
    let num1 = Number(arr[0]);
    let num2 = Number(arr[1]);
   
   if (num2 >= num1)
	{
       return num1 * num2;
	}
    else if (num1 > num2)
	{
        return num1 / num2;
	}

}