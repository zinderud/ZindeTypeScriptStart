"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var facade_1 = require("../facade/facade");
var Mediator = (function () {
    function Mediator() {
        this.listeners = [];
        this.handleNotification();
    }
    Mediator.prototype.handleNotification = function () {
    };
    Mediator.prototype.addListener = function (notificationName, listener) {
        this.listeners.push(notificationName);
        facade_1.Facade.addListener(notificationName, listener.bind(this));
    };
    Mediator.prototype.sendNotification = function (notificationName, params) {
        facade_1.Facade.sendNotification(notificationName, params);
    };
    Mediator.prototype.removeAllListeners = function () {
        this.listeners.forEach(function (notificationName) {
            facade_1.Facade.removeListener(notificationName);
        });
    };
    return Mediator;
}());
exports.Mediator = Mediator;
