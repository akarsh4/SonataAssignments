function getArray(item) {
    return new Array().concat(item);
}
var myNumber = getArray([100, 200, 500]);
var myString = getArray(["akarsh", "gagan"]);
myNumber.push("hi");
myString.push(500);
console.log(myNumber);
console.log(myString);
function getArray1(item) {
    return new Array().concat(item);
}
var myNumber1 = getArray1([100, 200, 300]);
var myString1 = getArray1(["halmati", "habibo"]);
myNumber1.push(300);
myString1.push("nana");
console.log(myNumber1);
console.log(myString1);
