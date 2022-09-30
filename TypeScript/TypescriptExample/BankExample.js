"use strict";
exports.__esModule = true;
exports.BankExample = void 0;
var BankExample = /** @class */ (function () {
    function BankExample(anumber, aname, abalance) {
        this.accNumber = anumber;
        this.accName = aname;
        this.accBalance = abalance;
    }
    BankExample.prototype.display = function () {
        console.log(this.accNumber);
        console.log(this.accName);
        console.log(this.accBalance);
    };
    return BankExample;
}());
exports.BankExample = BankExample;
var b1 = new BankExample(45121125, "Akarsh", 450000);
b1.display();
