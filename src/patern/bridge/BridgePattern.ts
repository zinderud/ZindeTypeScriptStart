/*
Köprü kalıp soyutlamayı (abstraction) uygulamadan (implementation) ayırarak ikisinin birbirinden bağımsız çalışmasını sağlar. Bunu yaparken katmanlı yapı (encapsulation), toplama (aggregation) ve de kalıtımı kullanarak programın görevlerini birbirlerinden farklı sınıflara aktarırlar.*/


export interface Implementor {

    gel(s: any): void;
}
export class Abstaction {
    implementor: Implementor;
    constructor(imp: Implementor) {
        this.implementor = imp;
    }
    public Gelsen(s: string): void {
        throw new Error("this method is abstract")
    } 
}
export class  CagABstactA extends Abstaction{
   
    constructor(imp:Implementor) {
        super(imp);      
    }
    public Gelsen(s:string):void{
        console.log("This is CagAbstactA ");
        this.implementor.gel(s);
    }
}

export class CagAbstarctB extends Abstaction{
    constructor(imp:Implementor){
        super(imp);
    }
public Gelsen(s:string):void{
        console.log("This is CagAbstactB ");
        this.implementor.gel(s);
    }
}


export class ConcreteImplementorA implements Implementor{
    public gel(s:any){
           console.log("gell ConcreteImplementorA is being called.");
console.log(s);
    }
}
export class ConcreteImplementorB implements Implementor{
    public gel(s:any){
           console.log("gell ConcreteImplementorB is being called.");
console.log(s);
    }
}



//usage

export function bridgeshow():void{

    var CagAbstactA =new CagABstactA(new ConcreteImplementorA());
var CagAbstactB =new CagAbstarctB(new ConcreteImplementorB());
 
 CagAbstactA.Gelsen("Gözlerimiz seni arıyor");
  CagAbstactB.Gelsen("Gel Bahar");
 

}
 
