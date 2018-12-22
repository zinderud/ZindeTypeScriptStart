"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
function ObservableChose1() {
    let numbers = [22, 3, 4, 5];
    let source = rxjs_1.Observable.from(numbers);
    var resoult = source.subscribe(p => console.log("gelen" + p), error => console.log(error), () => console.log("başarılı"));
}
exports.ObservableChose1 = ObservableChose1;
class ObserClas {
    next(val) {
        console.log("ObserClas" + val);
    }
    ;
    error(error) { }
    complete() { }
}
exports.ObserClas = ObserClas;
function ObservableChose2() {
    let numbers = [22, 3, 4, 5];
    let source = rxjs_1.Observable.from(numbers);
    var resoult = source.subscribe(new ObserClas());
}
exports.ObservableChose2 = ObservableChose2;
