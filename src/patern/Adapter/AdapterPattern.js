System.register([], function (exports_1, context_1) {
    "use strict";
    var AdapterPatern;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (AdapterPatern) {
                class Adapteer {
                    method() {
                        console.log('adapte patern Method is baegin Called');
                    }
                }
                AdapterPatern.Adapteer = Adapteer;
                class Adapter {
                    call() {
                        console.log('adapters call method is begin called');
                        var adapte = new Adapteer();
                        adapte.method();
                    }
                }
                AdapterPatern.Adapter = Adapter;
                class AdapterDemo {
                    show() {
                        var adap = new AdapterPatern.Adapter();
                        adap.call();
                    }
                }
                AdapterPatern.AdapterDemo = AdapterDemo;
            })(AdapterPatern || (AdapterPatern = {}));
            exports_1("AdapterPatern", AdapterPatern);
        }
    };
});
