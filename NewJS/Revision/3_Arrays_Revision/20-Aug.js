var arrayOne = [234, 764, 984, 276, 432, 216, 654, 438, 549, 198];
arrayOne.sort(function(a, b) {
    return a - b;
});
console.log(arrayOne);
console.log(arrayOne[6]);


var arrayOneMap = [234, 764, 984, 276, 432, 216, 654, 438, 549, 198];

var newArrayMap = arrayOneMap.map(function(x) {
    return (x * 15) / 2;
});
console.log(newArrayMap);

var nestedArrayMap = arrayOneMap.map(function(y) {
    return y * 5;
}).map(function(y) {
    return y - 35;
});
console.log(nestedArrayMap);


function oneObject(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.newMethod = function() {
        console.log(" X : " + this.x + " Y : " + this.y + " Z : " + this.z);
        return new oneObject(this.x * 5, this.y / 2, this.z + 32);
    };
}

var obj = new oneObject(4, 5, 6);
var final = obj.newMethod().newMethod().newMethod(); //What is the value now ? Tell me after your got u r dinner ??16,24
console.log(final);