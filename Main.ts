import { SwimData } from "./SwimData";


class Main {
    instance: SwimData;
    clonned: SwimData;

    main() {
        this.instance = new SwimData()
        this.clonned = this.clone(this.instance);
        this.clonned.sortByTime();
        console.log(this.clonned.swimmers);
        this.clonned.sortBySex();
        console.log(this.clonned.swimmers);
        this.clonned.sortByAgeGroup();

    }

    clone(original) {
        var copied = (<any>Object).assign(
            (<any>Object).create(
                (<any>Object).getPrototypeOf(original)
            ),
            original
        );
        copied.swimmers = original.swimmers.slice(0);
        return copied;
    }
}


let i = new Main();
i.main();
