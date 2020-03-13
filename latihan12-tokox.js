function countProfit(shoppers) {
    let listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
    ];

    var result = [];
    if (shoppers.length <= 0){
        return result;
    }
    else {
        for (var i = 0; i < listBarang.length; i++) {
            var details = {}
            var pembeli = [];
            var sisaBarang = 0;
            var untung = 0;
            var cek = false;
            details.product = listBarang[i][0];
            for (var j = 0; j < shoppers.length; j++) {
                if (shoppers[j].product === details.product && shoppers[j].amount <= listBarang[i][2]){
                    pembeli.push(shoppers[j].name);
                    details.shoppers = pembeli;
                    sisaBarang = (listBarang[i][2] -= shoppers[j].amount);
                    details.leftOver = sisaBarang;
                    untung += listBarang[i][1] * shoppers[j].amount; 
                    details.totalProfit = untung;
                    cek = true;
                }
            }
            if(!cek) {
                details.shopper = [];
                details.leftOver = listBarang[i][2];
                details.totalProfit = untung;
            }
            result.push(details);
        }
        return result;
    }
}

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
console.log(countProfit([]));