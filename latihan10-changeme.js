function changeMe(arr){
    var obj = {};
    if (arr.length === 0) {
        console.log('""');
    }
    for (var i = 0; i < arr.length; i++){
        if (arr.length > 0 && i === 0){
            obj.firstName = arr[i][0];
            obj.lastName = arr[i][1];
            obj.gender = arr[i][2];
            if (arr[i][3] === undefined || (arr[i][3] - 2020) > 2020){
                obj.age = 'Invalid Birth Year';
            }
            else {
                obj.age = 2020 - arr[i][3];
            }
            console.log(obj);
        }
        else{
            obj.firstName = arr[i][0];
            obj.lastName = arr[i][1];
            obj.gender = arr[i][2];
            if (arr[i][3] === undefined || (arr[i][3] - 2020) > 2020){
                obj.age = 'Invalid Birth Year';
            }
            else{
                obj.age = 2020 - arr[i][3];
            }
            console.log(obj);
        }
    }
}

changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
changeMe([]);