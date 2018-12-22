System.register([], function (exports_1, context_1) {
    "use strict";
    var SingletonPatern, SingletonDemo;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            SingletonPatern = class SingletonPatern {
                constructor() { }
                static get Instance() {
                    if (this.instance === null || this.instance === undefined) {
                        this.instance = new SingletonPatern();
                    }
                    return this.instance;
                }
            };
            exports_1("SingletonPatern", SingletonPatern);
            SingletonDemo = class SingletonDemo {
                show() {
                    var singleton1 = SingletonPatern.Instance;
                    var singleton2 = SingletonPatern.Instance;
                    if (singleton1 === singleton2) {
                        console.log("two singletons are equivalent");
                    }
                    else {
                        console.log("two singletons are not equivalent");
                    }
                }
            };
            exports_1("SingletonDemo", SingletonDemo);
        }
    };
});
