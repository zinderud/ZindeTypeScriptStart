"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events = require("events");
var Broadcast = (function () {
    function Broadcast() {
        this.notifications = {};
        this.eventEmitter = new events.EventEmitter();
    }
    Broadcast.prototype.getNotification = function (notification) {
        return this.notifications[notification];
    };
    Broadcast.prototype.addListener = function (notificationName, listener) {
        if (!this.getNotification(notificationName)) {
            this.notifications[notificationName] = [];
            this.notifications[notificationName].push(listener);
        }
        else {
            this.notifications[notificationName].push(listener);
        }
        this.eventEmitter.on(notificationName, listener);
    };
    Broadcast.prototype.sendNotification = function (notificationName, params) {
        this.eventEmitter.emit(notificationName, params);
    };
    Broadcast.prototype.removeListener = function (notificationName) {
        var _this = this;
        var listeners = this.getNotification(notificationName);
        if (listeners) {
            listeners.forEach(function (listener) {
                _this.eventEmitter.removeListener(notificationName, listener);
            });
        }
    };
    Broadcast.prototype.removeAllListeners = function () {
        this.eventEmitter.removeAllListeners();
    };
    return Broadcast;
}());
exports.Broadcast = Broadcast;
