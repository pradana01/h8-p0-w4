function digitPerkalianMinimum(angka){
    var hasil;
    var hasil2;
    var hasil3;
    var temp = Infinity;
    for (var i = 1; i <= angka; i++){
        hasil = angka % i;
        if (hasil === 0){
            hasil2 = angka / i;
            hasil3 = i + '' + hasil2;
            if (hasil3.length < temp){
                temp = hasil3.length;
            }
            // console.log(hasil3);
        }
    }
    return temp;
}

console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2