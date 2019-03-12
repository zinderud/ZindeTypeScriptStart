abstract class Coffee {
   public description :string;
   public getDescription():string{
       return this.description;
   }
   public abstract cost():number;
}
abstract class CoffeDecarator extends Coffee{
    decoratedCaffe:Coffee;
    public abstract getDescription():string;
}

class Expresso extends Coffee{
    public description='Espresso';
    public cost(){
        return 12.0;
    }
}
class TurkishCaffe extends Coffee{
    public description='TurkishCaffe';
    public cost(): number {
        return 5.0;
    }

}

class Milk extends CoffeDecarator{
    public getDescription(): string {
       return this.decoratedCaffe.getDescription()+"+milk"
    }
    public cost(): number {
        return this.decoratedCaffe.cost()+1.0;
    }
    constructor(cof:Coffee){
        super();
        this.decoratedCaffe=cof;
    }
}
class Coclate extends CoffeDecarator{
    public getDescription(): string {
       return this.decoratedCaffe.getDescription()+"+Coclate"
    }
    public cost(): number {
        return this.decoratedCaffe.cost()+3.0;
    }
    constructor(cof:Coffee){
        super();
        this.decoratedCaffe=cof;
    }
}

/* usage */

let coffee=new TurkishCaffe();
coffee=new Milk(coffee);
coffee=new Coclate(coffee);

console.log(coffee.getDescription())