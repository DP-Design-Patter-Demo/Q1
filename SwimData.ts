const data = [

    {
        "name": "Mikiyas O",
        "age": 21,
        "time": 12.5
    },
    {
        "name": "Mikiyas",
        "age": 20,
        "time": 12.0
    },
    {
        "name": "Mikiyas Olika",
        "age": 22,
        "time": 12.55
    }
];
import { Swimmer } from './Swimmer';

export class SwimData {
    public swimmers = new Array<Swimmer>();
    constructor(fileName = data) {
        fileName.forEach(element => {
            this.swimmers.push(new Swimmer(element.name, element.age, element.time));
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

    // public clone() {
    //     const cloneSwimmers = new Array();
    //     this.swimmers.forEach((element) => {
    //         cloneSwimmers.push((<any>Object).assign((<any>Object).create(Object.getPrototypeOf(element)), element));
    //     });
    //     console.log(cloneSwimmers);
    //     return cloneSwimmers;
    // }
}