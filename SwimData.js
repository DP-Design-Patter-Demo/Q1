"use strict";
exports.__esModule = true;
var data = [
    {
        "name": "Mikiyas O",
        "sex": "M",
        "age": 21,
        "time": 12.5
    },
    {
        "name": "Mikiyas",
        "sex": "F",
        "age": 20,
        "time": 12.0
    },
    {
        "name": "Mikiyas Olika",
        "sex": "M",
        "age": 22,
        "time": 12.55
    }
];
var Swimmer_1 = require("./Swimmer");
var SwimData = /** @class */ (function () {
    function SwimData(fileName) {
        if (fileName === void 0) { fileName = data; }
        var _this = this;
        this.swimmers = new Array();
        this.ageGroup = {
            first: [],
            second: [],
            third: []
        };
        fileName.forEach(function (element) {
            var swimmer = new Swimmer_1.Swimmer(element.name, element.age, element.time, element.sex);
            _this.swimmers.push(swimmer);
        });
    }
    SwimData.prototype.sortByTime = function () {
        for (var i = 0; i < this.swimmers.length; i++) {
            for (var j = 0; j < this.swimmers.length; j++) {
                if (this.swimmers[i].getTime() > this.swimmers[j].getTime()) {
                    var swimmer = this.swimmers[i];
                    this.swimmers[i] = this.swimmers[j];
                    this.swimmers[j] = swimmer;
                }
            }
        }
    };
    SwimData.prototype.sortByAge = function () {
        for (var i = 0; i < this.swimmers.length; i++) {
            for (var j = 0; j < this.swimmers.length; j++) {
                if (this.swimmers[i].getAge() > this.swimmers[j].getAge()) {
                    var swimmer = this.swimmers[i];
                    this.swimmers[i] = this.swimmers[j];
                    this.swimmers[j] = swimmer;
                }
            }
        }
    };
    SwimData.prototype.sortBySex = function () {
        for (var i = 0; i < this.swimmers.length; i++) {
            for (var j = 0; j < this.swimmers.length; j++) {
                if (this.swimmers[i].getSex() > this.swimmers[j].getSex()) {
                    var swimmer = this.swimmers[i];
                    this.swimmers[i] = this.swimmers[j];
                    this.swimmers[j] = swimmer;
                }
            }
        }
    };
    SwimData.prototype.sortByAgeGroup = function () {
        var _this = this;
        this.swimmers.forEach(function (swimmer) {
            if (swimmer.getAge() <= 23) {
                _this.ageGroup.first.push(swimmer);
            }
            else if (swimmer.getAge() <= 26) {
                _this.ageGroup.second.push(swimmer);
            }
            else if (swimmer.getAge() > 26) {
                _this.ageGroup.third.push(swimmer);
            }
        });
        console.log(this.ageGroup);
    };
    return SwimData;
}());
exports.SwimData = SwimData;
