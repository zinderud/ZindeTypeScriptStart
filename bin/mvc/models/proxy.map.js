"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProxyMap = (function () {
    function ProxyMap() {
    }
    Object.defineProperty(ProxyMap.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProxyMap.prototype, "instance", {
        get: function () {
            return this._instance;
        },
        set: function (value) {
            this._instance = value;
        },
        enumerable: true,
        configurable: true
    });
    return ProxyMap;
}());
exports.ProxyMap = ProxyMap;
