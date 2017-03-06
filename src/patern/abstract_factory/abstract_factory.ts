export module AbstractFactoryPattern {
    export interface AbstractProductA {
        methodA(): string;
    }
    export interface AbstractProductB {
        methodB(): number;
    }

    export interface AbstractFactory {
        createProductA(param?: any): AbstractProductA;
        createProductB(): AbstractProductB;
    }


    export class ProductA1 implements AbstractProductA {
        methodA = () => {
            
            return "This is methodA of ProductA1";
        }
    }
    export class ProductB1 implements AbstractProductB {
        methodB = () => {
            return 1;
        }
    }

    export class ProductA2 implements AbstractProductA {
        methodA = () => {
            return "This is methodA of ProductA2";
        }
    }
    export class ProductB2 implements AbstractProductB {
        methodB = () => {
            return 2;
        }
    }


    export class ConcreteFactory1 implements AbstractFactory {
        createProductA(param?: any): AbstractProductA {
            return new ProductA1();
        }

        createProductB(param?: any): AbstractProductB {
            return new ProductB1();
        }
    }



    export class Tester {
        private abstractProductA: AbstractProductA;
        private abstractProductB: AbstractProductB;
        private  AbstarctDiv : HTMLSpanElement;
        constructor(factory: AbstractFactory) {
            this.abstractProductA = factory.createProductA();
            this.abstractProductB = factory.createProductB();
        }

        public test(): void {
          
                  this.AbstarctDiv = <HTMLSpanElement>document.getElementById(  "AbstarctDiv");
                  this.AbstarctDiv.innerHTML = this.abstractProductA.methodA().toString()
        }
    }
         export class AbstarctDemoshow  {
            // Abstract factory1
            public tester1(){
           var factory1: AbstractFactoryPattern.AbstractFactory = new AbstractFactoryPattern.ConcreteFactory1();
            var tester1: AbstractFactoryPattern.Tester = new AbstractFactoryPattern.Tester(factory1);
            tester1.test();
            }
          
 
        
    }

}