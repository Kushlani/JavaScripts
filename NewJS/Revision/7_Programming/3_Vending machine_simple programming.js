//Buy food from a vending machine

function buyFood() {

    insertCoins(2);
    displayItemDetails();
    selectItem(1);
    collectItem();
    getBalance();

}


function insertCoins(coinValue) {
    if (coinValue >= 1) {
        console.log("You have inserted " + coinValue + "$");
    } else {
        console.log("Please insert sufficent money to proceed");
    }

    /*	var coinArray$ = [0.10,0.20,0.50,1,2];
    		for(var c = 0; c < coinArray.length; c++); {
    		if( b >= 1) {
    			console.log("You have inserted " + coinValue + "$");
    		}else{
    		console.log("Please insert sufficent money to proceed");
    		}
    	}
    */
}

function displayItemDetails() {

    function item(name, code, price) {
        this.name = name;
        this.code = code;
        this.price = price;
    }

    var coke = new item("coke", 1, "2$");
    var pepsi = new item("pepsi", 2, "2$");
    var iceCoffee = new item("iceCoffee", 3, "3$");
    var pringles = new item("pringles", 4, "1.50$");
    var tipiTip = new item("tipiTip", 5, "1$");

    var itemArray = [coke, pepsi, iceCoffee, pringles, tipiTip];

    for (var i = 0; i < itemArray.length; i++) {
        console.log(itemArray[i]);
    }

}


function selectItem(x) {
    console.log("Press the item number you wish to select");
    var numOfItemsSelected = x;
    var display;
    switch (numOfItemsSelected) {
        case 0:
            display = "Sorry! you did not select any item";
            break;
        case 1:
            display = "You have selected coke";
            break;
        case 2:
            display = "You have selected pepsi";
            break;
        case 3:
            display = "You have selected iceCoffee";
            break;
        case 4:
            display = "You have selected pringles";
            break;
        case 5:
            display = "You have selected tipiTip";
            break;
    }
    console.log(display);
}

function collectItem() {
    console.log("Please collect your item from the below locker...");
}

function getBalance() {
    var priceOfSelectedItem = 1;
    var insertedCoin = 1;
    if (priceOfSelectedItem == insertedCoin) {
        console.log("No Balance");
    } else if (priceOfSelectedItem < insertedCoin) {
        console.log("Please collect your balance");
    }
}


buyFood();