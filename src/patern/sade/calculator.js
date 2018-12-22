System.register([], function (exports_1, context_1) {
    "use strict";
    var Calculator;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Calculator = class Calculator {
                init(x, y, output) {
                    this.x = document.getElementById(x);
                    this.y = document.getElementById(y);
                    this.output = document.getElementById(output);
                    this.wireEvents();
                }
                wireEvents() {
                    document.getElementById('Add').addEventListener('click', event => {
                        this.output.innerHTML = this.add(parseInt(this.x.value), parseInt(this.y.value)).toString();
                    });
                    document.getElementById('Subtract').addEventListener('click', event => {
                        this.output.innerHTML = this.subtract(parseInt(this.x.value), parseInt(this.y.value)).toString();
                    });
                }
                add(x, y) {
                    return x + y;
                }
                subtract(x, y) {
                    return x - y;
                }
            };
            exports_1("Calculator", Calculator);
        }
    };
});
