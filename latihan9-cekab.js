function checkAB(str){
    for (var i = 0; i < str.length; i++){
        if (str[i] === 'a' || str[i] === 'b'){
            if (str[i] === 'a' && str[i+4] === 'b'){
                return true;
            }
            if (str[i] === 'b' && str[i+4] === 'a'){
                return true;
            }
        }
    }
    return false;
}

console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false



// var a = [];
// var b = [];
// for (var i = 0; i < str.length; i++){
//     if (str[i] == 'a'){
//         a.push(i);
//     }
//     if (str[i] == 'b'){
//         b.push(i);
//     } 
// }
// if (){

// }
// for (var j = 0; j < a.length; j++){
//     for (var k = 0; k < b.length; k++){
//         var hasil = (b[k] - a[j]) - 1;
//         var hasil1 = (a[j] - b[k]) - 1;
//         if (hasil == 3 || hasil1 == 3){
//             return true
//         } else {
//             return false;
//         }
//     }
    
// }