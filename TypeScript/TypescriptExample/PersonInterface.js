var Personimplement = /** @class */ (function () {
    function Personimplement() {
    }
    Personimplement.prototype.getFullName = function () {
        return this.first + this.first;
    };
    return Personimplement;
}());
var P1 = new Personimplement();
P1.first = "Akarsh";
P1.last = "Gagan";
P1.getFullName();
console.log(P1);
