//Buy food from a vending machine

function buyFood() {

    var amountInserted = 1;
    var selectedItemCode = 2;

    insertCoins(amountInserted);
    displayItemDetails();

    try {
        var itemSelected = selectItem(selectedItemCode, amountInserted);
        getBalance(itemSelected.price$, amountInserted);
        collectItem();
    } catch (err) {
        console.log("Error : " + err);
        console.log("Sorry Try again.....");
    }
    console.log("Vending process is finished....")
}


function insertCoins(coinValue) {
    if (coinValue >= 1) {
        console.log("You have inserted " + coinValue + "$");
    } else {
        console.log("Please insert sufficent money to proceed");
    }
}

function item(name, code, price) {
    this.name = name;
    this.code = code;
    this.price$ = price;
}

function displayItemDetails() {

    var coke = new item("coke", "1", 2);
    var pepsi = new item("pepsi", "2", 2);
    var iceCoffee = new item("iceCoffee", "3", 2);
    var pringles = new item("pringles", "4", 1.50);
    var tipiTip = new item("tipiTip", "5", 1);

    var itemArray = [coke, pepsi, iceCoffee, pringles, tipiTip];

    for (var i = 0; i < itemArray.length; i++) {
        console.log(itemArray[i]);
    }
}


function selectItem(itemCode, amountInserted) {

    console.log("Press the item number you wish to select");

    var display;
    var itemSelected;

    switch (itemCode) {
        case 0:
            console.log("Sorry! you did not select any item");
            return;
        case 1:
            display = "Coke";
            itemSelected = new item("coke", 1, 2);
            break;
        case 2:
            display = "Pepsi";
            itemSelected = new item("pepsi", 2, 2);
            break;
        case 3:
            display = "IceCoffee";
            itemSelected = new item("iceCoffee", 3, 3);
            break;
        case 4:
            display = "Pringles";
            itemSelected = new item("pringles", 4, 1.50);
            break;
        case 5:
            display = "TipiTip";
            itemSelected = new item("tipiTip", 5, 1);
            break;
    }
    console.log("You have selected " + display);
    if (itemSelected.price$ > amountInserted) {
        console.log("Error happened....")
        throw "Price is higher than money at hand";
    }
    return itemSelected;
}

function collectItem() {
    console.log("Please collect your item from the below locker...");
}

function getBalance(itemSelected, amountInserted) {
    if (itemSelected == amountInserted) {
        console.log("No Balance");
    } else if (itemSelected < amountInserted) {
        console.log("Please collect your balance : " + (amountInserted - itemSelected));
    }
}


buyFood();