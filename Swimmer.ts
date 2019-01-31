export class Swimmer {
    name: String;
    age: Number;
    time: Number;

    constructor(
        name: String,
        age: Number,
        time: Number,
    ) {
        this.name = name
        this.age = age
        this.time = time
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

}