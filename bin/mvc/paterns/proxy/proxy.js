"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var facade_1 = require("../facade/facade");
var Proxy = (function () {
    function Proxy() {
    }
    Proxy.prototype.sendNotification = function (notificationName, params) {
        facade_1.Facade.sendNotification(notificationName, params);
    };
    return Proxy;
}());
exports.Proxy = Proxy;
