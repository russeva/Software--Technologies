function symmetric(num) {
    let number = Number(num[0]);
    let result = [];

    for(let i = 1;i <= number;i++){

        if(isSymmetric("" + i)){
            result.push(i);
        }
    }
    for(let entry in result){
        console.log(entry)
    }

    function isSymmetric(str) {

        for(let i=0; i < str.length / 2; i++){

            if(str[i] != str[str.length - 1 -i]){
                return false;
            }
            return true;
        }

    }
}
symmetric('100')