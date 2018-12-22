System.register([], function (exports_1, context_1) {
    "use strict";
    var ConcreteIterator, Number;
    var __moduleName = context_1 && context_1.id;
    function Goster() {
        var asArray = [1, 3, 22, 43, 66, 6];
        var numberIter = new Number(asArray).createIterator();
        while (numberIter.hasNext()) {
            console.log(numberIter.next());
        }
    }
    exports_1("Goster", Goster);
    return {
        setters: [],
        execute: function () {
            ConcreteIterator = class ConcreteIterator {
                constructor(collection) {
                    this.collection = [];
                    this.possistion = 0;
                    this.collection = collection;
                }
                next() {
                    var result = this.collection[this.possistion];
                    this.possistion++;
                    return result;
                }
                hasNext() {
                    if (this.possistion < this.collection.length) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            };
            exports_1("ConcreteIterator", ConcreteIterator);
            Number = class Number {
                constructor(collection) {
                    this.collection = [];
                    this.collection = collection;
                }
                createIterator() {
                    return new ConcreteIterator(this.collection);
                }
            };
            exports_1("Number", Number);
        }
    };
});
