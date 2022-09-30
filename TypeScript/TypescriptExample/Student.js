"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Address_1 = require("./Address");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, name, std) {
        var _this = _super.call(this, "jp nagar", "bangalore", "karnataka") || this;
        _this.id = id;
        _this.name = name;
        _this.standard = std;
        return _this;
    }
    Student.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log(this.id);
        console.log(this.name);
        console.log(this.standard);
    };
    return Student;
}(Address_1.Address));
var stu1 = new Student(110, "Akarsh", 10);
stu1.display();
