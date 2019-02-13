class Swimmer {
    name: String;
    age: Number;
    time: Number;
    sex: String

    constructor(
        name: String,
        age: Number,
        time: Number,
        sex: String,
    ) {
        this.name = name
        this.age = age
        this.time = time
        this.sex = sex
    }


    getSwimmer() {
        return this;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getTime() {
        return this.time;
    }
    getSex() {
        return this.sex;
    }

}

const data = [

    {
        "name": "Mikiyas O",
        "sex": "M",
        "age": 21,
        "time": 12.5
    },
    {
        "name": "Mikiyas",
        "sex": "M",
        "age": 20,
        "time": 11.0
    },
    {
        "name": "Mikiyas Olika",
        "sex": "F",
        "age": 22,
        "time": 18.55
    }
];

class SwimData {
    public swimmers = new Array<Swimmer>();
    public ageGroup = {
        first: [],  //from 18 -23
        second: [], //from 23 -26
        third: [],  //from 25 -30
    }

    constructor(fileName = data) {
        fileName.forEach(element => {
            var swimmer = new Swimmer(element.name, element.age, element.time, element.sex);
            this.swimmers.push(swimmer);
        });

    }
    public getSwimmers() {
        return this.swimmers;
    }

    public sortByNameHelper(x, y) {
        return ((x.getName().toLowerCase() == y.getName().toLowerCase()) ? 0 : ((x.getName().toLowerCase() > y.getName().toLowerCase()) ? 1 : -1));
    }

    public sortByName() {
        return this.swimmers.sort(this.sortByNameHelper);
    }

    public sortByTime() {
        for (let i = 0; i < this.swimmers.length; i++) {
            for (let j = i; j < this.swimmers.length; j++) {
                if (this.swimmers[i].getTime() > this.swimmers[j].getTime()) {
                    var swimmer = this.swimmers[i]
                    this.swimmers[i] = this.swimmers[j];
                    this.swimmers[j] = swimmer;
                }

            }
        }
    }

    public sortByAge() {
        for (let i = 0; i < this.swimmers.length; i++) {
            for (let j = i; j < this.swimmers.length; j++) {
                if (this.swimmers[i].getAge() > this.swimmers[j].getAge()) {
                    var swimmer = this.swimmers[i]
                    this.swimmers[i] = this.swimmers[j];
                    this.swimmers[j] = swimmer;
                }
            }
        }
    }

    public sortBySex() {
        for (let i = 0; i < this.swimmers.length; i++) {
            for (let j = i; j < this.swimmers.length; j++) {
                if (this.swimmers[i].getSex() > this.swimmers[j].getSex()) {
                    var swimmer = this.swimmers[i]
                    this.swimmers[i] = this.swimmers[j];
                    this.swimmers[j] = swimmer;
                }
            }
        }
    }


    public sortByAgeGroup() {
        this.swimmers.forEach((swimmer) => {
            if (swimmer.getAge() <= 23) {
                this.ageGroup.first.push(swimmer);
            } else if (swimmer.getAge() <= 26) {
                this.ageGroup.second.push(swimmer);
            } else if (swimmer.getAge() > 26) {
                this.ageGroup.third.push(swimmer);
            }
        });

    }
}
class Main {
    instance: SwimData;
    clonned: SwimData;

    originalView = document.getElementById('originalView');
    clonedView = document.getElementById('clonedView');
    constructor() {
        this.instance = new SwimData()

        this.clonned = this.clone(this.instance);

        this.originalView.innerHTML = this.createUI(this.instance.getSwimmers());

        this.clonned.sortBySex();

        this.setView();

    }

    sortByName() {
        this.clonned.sortByName();
        this.setView();
    }

    sortByAge() {
        this.clonned.sortByAge();
        this.setView();
    }

    sortByTime() {
        this.clonned.sortByTime();
        this.setView();
    }

    sortBySex() {
        this.clonned.sortBySex();
        this.setView();
    }

    sortByAgeGroup() {
        this.clonned.sortByAgeGroup();
        this.setView();
    }

    setView() {
        this.clonedView.innerHTML = this.createUI(this.clonned.getSwimmers());
    }

    clone(original) {
        var copied = (<any>Object).assign( (<any>Object).create( (<any>Object).getPrototypeOf ( original ) ), original);
        copied.swimmers = original.swimmers.slice(0);
        return copied;
    }

    createUI(swimmers: Array<Swimmer>) {
        let result = '';
        swimmers.forEach(element => {
            result += `<tr>
            <td class="column1">${element.getName()}</td>
            <td class="column2">${element.getSex()}</td>
            <td class="column3">${element.getAge()}</td>
            <td class="column2">${element.getTime()}</td>
        </tr>`
        });
        return result;
    }
}


new Main();

