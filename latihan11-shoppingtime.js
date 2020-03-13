function shoppingTime(memberId, money) {
    var member = {};
    var listPurchased = [];
    var items = [
    ['Sepatu Stacattu', 1500000],
    ['Baju Zoro', 500000],
    ['Baju H&N', 250000],
    ['Sweater Uniklooh', 175000],
    ['Casing Handphone', 50000]
    ];

    if (memberId === undefined || memberId.length === 0) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    }
    else {
        member.memberId = memberId;
        member.money = money;
        var cek = false;
        for (var i = 0; i < items.length; i++){
            if (money >= items[i][1]){
                money -= items[i][1];
                listPurchased.push(items[i][0]);
                member.listPurchased = listPurchased;
                member.changeMoney = money;
                cek = true;
            }
        }
        if (!cek) {
            return 'Mohon maaf, uang tidak mencukupi'
        }
    }
    return member;
}


console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime()); 