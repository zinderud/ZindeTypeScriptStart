"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Model = (function () {
    function Model() {
    }
    Model.prototype.set = function (attrs) {
        for (var key in attrs) {
            this[key] = attrs[key];
        }
    };
    Model.prototype.get = function (attr) {
        return this[attr];
    };
    return Model;
}());
exports.Model = Model;
