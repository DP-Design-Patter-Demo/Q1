const data = [

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
import { Swimmer } from './Swimmer';

export class SwimData {
    public swimmers = new Array<Swimmer>();
    public ageGroup = {
        first: [], //from 18 -23
        second: [], //from 23 -26
        third: [], //from 25 -30
    }

    constructor(fileName = data) {
        fileName.forEach(element => {
            var swimmer = new Swimmer(element.name, element.age, element.time, element.sex);
            this.swimmers.push(swimmer);


        });
    }

    public sortByTime() {
        for (let i = 0; i < this.swimmers.length; i++) {
            for (let j = 0; j < this.swimmers.length; j++) {
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
            for (let j = 0; j < this.swimmers.length; j++) {
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
            for (let j = 0; j < this.swimmers.length; j++) {
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
            if(swimmer.getAge() <= 23 ){
                this.ageGroup.first.push(swimmer);
            } else if (swimmer.getAge() <= 26){
                this.ageGroup.second.push(swimmer);
            } else if (swimmer.getAge() > 26){
                this.ageGroup.third.push(swimmer);
            }
        });
        console.log(this.ageGroup);

    }
    // public clone() {
    //     const cloneSwimmers = new Array();
    //     this.swimmers.forEach((element) => {
    //         cloneSwimmers.push((<any>Object).assign((<any>Object).create(Object.getPrototypeOf(element)), element));
    //     });
    //     console.log(cloneSwimmers);
    //     return cloneSwimmers;
    // }
}