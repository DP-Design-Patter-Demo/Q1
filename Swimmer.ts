export class Swimmer {
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