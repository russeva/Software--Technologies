function solve(arr) {
    /*Map the input array, it may not be an array of numbers */
    let numb = arr.map(Number);

    /* Sort the input array in descending order and put each element into a new array */
    let sortedNums = numb.sort((a,b) => b-a);

    /*
    * Print the first three elements
    * Math.min(3, arr.length)
    * returns the smallest 3 indexes to use for output.
    */
    let count = Math.min(3,sortedNums.length);

    for (let i = 0; i < count;i++){
        /* Print each number */
        console.log(sortedNums[i]);
    }



}
solve(['10','30','15','20','50','5']);