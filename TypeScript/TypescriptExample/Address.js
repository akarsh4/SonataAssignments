"use strict";
exports.__esModule = true;
exports.Address = void 0;
var Address = /** @class */ (function () {
    function Address(street, city, state) {
        this.streetname = street;
        this.city = city;
        this.state = state;
    }
    Address.prototype.display = function () {
        console.log(this.streetname);
        console.log(this.city);
        console.log(this.state);
    };
    return Address;
}());
exports.Address = Address;
