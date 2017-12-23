function solve(arr) {
    let townsArr = [];
    let objects = arr.map(JSON.parse);

    for(let obj in objects){

        if(obj.town in townsArr){
            /* If town already exists, add to value */
            townsArr[obj.town] += obj.income;
        }
        else{
            /* If town doesn't exist, add current input value */
            townsArr[obj.town] = obj.income;
        }
    }
    /* Sort the towns by name */
    let objSorted = Object.keys(townsArr).sort();

    /* Print each town and it's value */

    for(let town in objSorted){
        console.log('${town} -> ${townsArr[town]}')
    }

}
solve([
    {"town":"Sofia","income":200},
    {"town":"Varna","income":120},
    {"town":"Pleven","income":60},
    {"town":"Varna","income":70}
]);