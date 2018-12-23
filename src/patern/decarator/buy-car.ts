import { runInThisContext } from "vm";

abstract class Car {

    public decsription: string;
    public getDescription(): string {
        return this.decsription;
    }
    public abstract cost(): number;
}

abstract class CarOptions extends Car {
    decorateCar: Car;
    public abstract getDescription(): string;
}

// sel cars
class ModelOne extends Car {
    decsription = "Model one "
    public cost(): number {
        return 120000;
    }

}

class ModelFor extends Car {
    decsription = "Model For"
    public cost(): number {
        return 400000;
    }
}
// car  options

class SunRoof extends CarOptions {
    constructor(secCar: Car) {
        super();
        this.decorateCar = secCar;
    }

    public getDescription(): string {
        return this.decorateCar.getDescription() + 'plus SunRoof';
    }
    public cost(): number {
        return this.decorateCar.cost() + 2300;
    }


}

class SmartAirCounditaion extends CarOptions{
  
    constructor(secCar: Car) {
        super();
        this.decorateCar = secCar;
    }
    public getDescription(): string {
       return this.decorateCar.getDescription()+" smart con"

    }
    public cost(): number {
       return this.decorateCar.cost()+2000;
    }
}

export class DecoratorDemo{
    public dem(){

        let buycar=new ModelOne();
        buycar=new SmartAirCounditaion(buycar);
        buycar=new SunRoof(buycar);
        console.log(buycar.cost()+ " "+buycar.getDescription())
    }
}