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
            var swimmer = new Swimmer(element.name, element.age, element.time, element.sex);
            _this.swimmers.push(swimmer);
        });
    }
    SwimData.prototype.getSwimmers = function () {
        return this.swimmers;
    };
    SwimData.prototype.sortByNameHelper = function (x, y) {
        return ((x.getName().toLowerCase() == y.getName().toLowerCase()) ? 0 : ((x.getName().toLowerCase() > y.getName().toLowerCase()) ? 1 : -1));
    };
    SwimData.prototype.sortByName = function () {
        return this.swimmers.sort(this.sortByNameHelper);
    };
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
var Main = /** @class */ (function () {
    function Main() {
        this.originalView = document.getElementById('originalView');
        this.clonedView = document.getElementById('clonedView');
        this.instance = new SwimData();
        this.clonned = this.clone(this.instance);
        this.originalView.innerHTML = this.createUI(this.instance.getSwimmers());
        this.clonned.sortByName();
        this.setView();
    }
    Main.prototype.sortByName = function () {
        this.clonned.sortByName();
        this.setView();
    };
    Main.prototype.sortByAge = function () {
        this.clonned.sortByAge();
        this.setView();
    };
    Main.prototype.sortByTime = function () {
        this.clonned.sortByTime();
        this.setView();
    };
    Main.prototype.sortBySex = function () {
        this.clonned.sortBySex();
        this.setView();
    };
    Main.prototype.sortByAgeGroup = function () {
        this.clonned.sortByAgeGroup();
        this.setView();
    };
    Main.prototype.setView = function () {
        this.clonedView.innerHTML = this.createUI(this.clonned.getSwimmers());
    };
    Main.prototype.clone = function (original) {
        var copied = Object.assign(Object.create(Object.getPrototypeOf(original)), original);
        copied.swimmers = original.swimmers.slice(0);
        return copied;
    };
    Main.prototype.createUI = function (swimmers) {
        var result = '';
        swimmers.forEach(function (element) {
            result += "<tr>\n            <td class=\"column1\">" + element.getName() + "</td>\n            <td class=\"column2\">" + element.getSex() + "</td>\n            <td class=\"column3\">" + element.getAge() + "</td>\n            <td class=\"column2\">" + element.getTime() + "</td>\n        </tr>";
        });
        console.log(result);
        return result;
    };
    return Main;
}());
new Main();
