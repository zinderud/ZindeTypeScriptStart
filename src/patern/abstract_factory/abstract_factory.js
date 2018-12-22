System.register([], function (exports_1, context_1) {
    "use strict";
    var AbstractFactoryPattern;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (AbstractFactoryPattern) {
                class ProductA1 {
                    constructor() {
                        this.methodA = () => {
                            return "This is methodA of ProductA1";
                        };
                    }
                }
                AbstractFactoryPattern.ProductA1 = ProductA1;
                class ProductB1 {
                    constructor() {
                        this.methodB = () => {
                            return 1;
                        };
                    }
                }
                AbstractFactoryPattern.ProductB1 = ProductB1;
                class ProductA2 {
                    constructor() {
                        this.methodA = () => {
                            return "This is methodA of ProductA2";
                        };
                    }
                }
                AbstractFactoryPattern.ProductA2 = ProductA2;
                class ProductB2 {
                    constructor() {
                        this.methodB = () => {
                            return 2;
                        };
                    }
                }
                AbstractFactoryPattern.ProductB2 = ProductB2;
                class ConcreteFactory1 {
                    createProductA(param) {
                        return new ProductA1();
                    }
                    createProductB(param) {
                        return new ProductB1();
                    }
                }
                AbstractFactoryPattern.ConcreteFactory1 = ConcreteFactory1;
                class Tester {
                    constructor(factory) {
                        this.abstractProductA = factory.createProductA();
                        this.abstractProductB = factory.createProductB();
                    }
                    test() {
                        this.AbstarctDiv = document.getElementById("AbstarctDiv");
                        this.AbstarctDiv.innerHTML = this.abstractProductA.methodA().toString();
                    }
                }
                AbstractFactoryPattern.Tester = Tester;
                class AbstarctDemoshow {
                    tester1() {
                        var factory1 = new AbstractFactoryPattern.ConcreteFactory1();
                        var tester1 = new AbstractFactoryPattern.Tester(factory1);
                        tester1.test();
                    }
                }
                AbstractFactoryPattern.AbstarctDemoshow = AbstarctDemoshow;
            })(AbstractFactoryPattern || (AbstractFactoryPattern = {}));
            exports_1("AbstractFactoryPattern", AbstractFactoryPattern);
        }
    };
});
