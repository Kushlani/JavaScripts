//Vending Machine

function buyFood() {

    var insertedAmount = 1;
    var leastItemPrice = leastItem();
    insertCoin(insertedAmount, leastItemPrice);
    /*selectItem();
    collectItem();
    getBalance();*/
    
}

function insertCoin(insertedAmount, leastItemPrice) {
    if (insertedAmount >= leastItemPrice) {
        console.log("You have inserted " + insertedAmount + "$");
    } else {
        console.log("Money is not suficient to buy any food...., please try again...");
    }
}

function item(name, code, price) {
    this.name = name;
    this.code = code;
    this.price$ = price;
}

function leastItem() {
    var coke = new item("coke", "1", 2);
    var pepsi = new item("pepsi", "2", 2);
    var iceCoffee = new item("iceCoffee", "3", 3);
    var pringles = new item("pringles", "4", 2.50);
    var tipiTip = new item("tipiTip", "5", 1);

    var itemArray = [coke, pepsi, iceCoffee, pringles, tipiTip];

    for (var i = 0; i < itemArray.length; i++) {
        itemArray.sort(function(a, b) { return b.price$ - a.price$; });
        console.log(itemArray);
    }
    return (itemArray[itemArray.length - 1].price$);
}

buyFood();