"use strict";
exports.__esModule = true;
var Swimmer = /** @class */ (function () {
    function Swimmer(name, age, time, sex) {
        this.name = name;
        this.age = age;
        this.time = time;
        this.sex = sex;
    }
    Swimmer.prototype.getSwimmer = function () {
        return this;
    };
    Swimmer.prototype.getName = function () {
        return this.name;
    };
    Swimmer.prototype.getAge = function () {
        return this.age;
    };
    Swimmer.prototype.getTime = function () {
        return this.time;
    };
    Swimmer.prototype.getSex = function () {
        return this.sex;
    };
    return Swimmer;
}());
exports.Swimmer = Swimmer;
