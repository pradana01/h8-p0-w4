function urutkanAbjad(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }
    for (var j = 0; j < arr.length; j++) {
        var temp;
        for (var k = 0; k < arr.length - 1; k++) {
            if (arr[k] > arr[k+1]) {
                temp = arr[k+1];
                arr[k+1] = arr[k];
                arr[k] = temp;
            }
        }
    }
    var string = '';
    for (var a = 0; a < arr.length; a++) {
        string += arr[a];
    }
    return string;
}

console.log(urutkanAbjad('hello'));