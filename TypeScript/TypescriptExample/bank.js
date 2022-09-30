var Bank = /** @class */ (function () {
    function Bank(anumber, aname, abalance) {
        this.accNumber = anumber;
        this.accName = aname;
        this.accBalance = abalance;
    }
    Bank.prototype.display = function () {
        console.log(this.accNumber);
        console.log(this.accName);
        console.log(this.accBalance);
    };
    Bank.prototype.deposit = function (aMoney) {
        return this.accBalance = aMoney + this.accBalance;
    };
    Bank.prototype.withdraw = function (aMONEY) {
        return this.accBalance = this.accBalance - aMONEY;
    };
    return Bank;
}());
var x1 = new Bank(45121125, "Akarsh", 450000);
x1.deposit(450000);
x1.withdraw(30000);
x1.display();
