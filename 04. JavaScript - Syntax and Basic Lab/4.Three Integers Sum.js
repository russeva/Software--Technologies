function integersSum(arr) {
    let nums = arr[0].split('').map(Number);

    console.log(
        check(nums[0],nums[1],nums[2]) ||
    check(nums[1],nums[2],nums[0]) ||
    check(nums[2],nums[0],nums[1])||
   'No');
    
    function check(first, second, sum) {

        if(first + second !== sum){
           return false;
        }
         if(first > second){
            [first,second] = [second,first];
        }
        return '${first} + ${second} = ${sum}';
    }
}
integersSum(['8 15 7']);