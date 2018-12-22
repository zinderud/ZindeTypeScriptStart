"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Notification = (function () {
    function Notification() {
    }
    Notification.prototype.setName = function (name) {
        this.name = name;
    };
    Notification.prototype.getName = function () {
        return this.name;
    };
    Notification.prototype.setBody = function (body) {
        this.body = body;
    };
    Notification.prototype.getBody = function () {
        return this.body;
    };
    return Notification;
}());
exports.Notification = Notification;
