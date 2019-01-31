import { SwimData } from "./SwimData";


class Main {
    instance: SwimData;
    clonned: SwimData;

    main() {
        this.instance = new SwimData()
        this.clonned = this.clone(this.instance);
        console.log(this.clonned.sortByTime());
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
