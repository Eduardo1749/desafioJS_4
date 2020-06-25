var array=[1,2,3,4,5,6,7,8,9,10]
escalar=2;
function multiplica(array,escalar){
    var array2=[];
    for (value of array){
        value=value*escalar;
        array2.push(value);
    }
    return array2;
}
console.log(multiplica(array,escalar));