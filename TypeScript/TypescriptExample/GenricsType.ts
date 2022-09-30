function getArray(item:any[]):any[]{
    return new Array().concat(item);
}
let myNumber = getArray([100,200,500]);
let myString = getArray(["akarsh","gagan"]);
myNumber.push("hi");
myString.push(500);
console.log(myNumber);
console.log(myString);


function getArray1<T>(item: T[]):T[]{
    return new Array<T>().concat(item);
}

let myNumber1 = getArray1<number>([100,200,300]);
let myString1 = getArray1<string>(["halmati","habibo"]);
myNumber1.push(300);
myString1.push("nana");
console.log(myNumber1);
console.log(myString1);