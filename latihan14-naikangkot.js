function naikAngkot (arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F']
    var result = [];
    if (arrPenumpang === null) {
        return [];
    }
    else {
        for (var i = 0; i < arrPenumpang.length; i++) {
            for (var j = 0; j < rute.length; j++){
                if (arrPenumpang[i][1] === rute[j]) {
                    var temp = j;
                }
                
            }
            for (var k = 0; k < rute.length; k++) {
                if (arrPenumpang[i][2] === rute[k]) {
                    var temp2 = k;
                }
            }
            result.push({penumpang: arrPenumpang[i][0], naikDari: arrPenumpang[i][1], tujuan: arrPenumpang[i][2], bayar: (temp2-temp)*2000});
            
        }
        return result;
    }
}

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
console.log(naikAngkot([])); //[]