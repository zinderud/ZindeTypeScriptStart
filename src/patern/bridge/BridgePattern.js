System.register([], function (exports_1, context_1) {
    "use strict";
    var Abstaction, CagABstactA, CagAbstarctB, ConcreteImplementorA, ConcreteImplementorB;
    var __moduleName = context_1 && context_1.id;
    function bridgeshow() {
        var CagAbstactA = new CagABstactA(new ConcreteImplementorA());
        var CagAbstactB = new CagAbstarctB(new ConcreteImplementorB());
        CagAbstactA.Gelsen("Gözlerimiz seni arıyor");
        CagAbstactB.Gelsen("Gel Bahar");
    }
    exports_1("bridgeshow", bridgeshow);
    return {
        setters: [],
        execute: function () {
            Abstaction = class Abstaction {
                constructor(imp) {
                    this.implementor = imp;
                }
                Gelsen(s) {
                    throw new Error("this method is abstract");
                }
            };
            exports_1("Abstaction", Abstaction);
            CagABstactA = class CagABstactA extends Abstaction {
                constructor(imp) {
                    super(imp);
                }
                Gelsen(s) {
                    console.log("This is CagAbstactA ");
                    this.implementor.gel(s);
                }
            };
            exports_1("CagABstactA", CagABstactA);
            CagAbstarctB = class CagAbstarctB extends Abstaction {
                constructor(imp) {
                    super(imp);
                }
                Gelsen(s) {
                    console.log("This is CagAbstactB ");
                    this.implementor.gel(s);
                }
            };
            exports_1("CagAbstarctB", CagAbstarctB);
            ConcreteImplementorA = class ConcreteImplementorA {
                gel(s) {
                    console.log("gell ConcreteImplementorA is being called.");
                    console.log(s);
                }
            };
            exports_1("ConcreteImplementorA", ConcreteImplementorA);
            ConcreteImplementorB = class ConcreteImplementorB {
                gel(s) {
                    console.log("gell ConcreteImplementorB is being called.");
                    console.log(s);
                }
            };
            exports_1("ConcreteImplementorB", ConcreteImplementorB);
        }
    };
});
