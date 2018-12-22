"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var broadcast_1 = require("../observer/broadcast");
var facade_1 = require("../facade/facade");
var Command = (function (_super) {
    __extends(Command, _super);
    function Command() {
        return _super.call(this) || this;
    }
    Command.prototype.setNotificationName = function (notificationName) {
        this.notificationName = notificationName;
    };
    Command.prototype.execute = function (notification) { };
    Command.prototype.addListener = function (notificationName, listener) {
        if (notificationName == this.notificationName) {
            facade_1.Facade.addListener(notificationName, listener.bind(this));
        }
    };
    Command.prototype.sendNotification = function (notificationName, params) {
        facade_1.Facade.sendNotification(notificationName, params);
    };
    return Command;
}(broadcast_1.Broadcast));
exports.Command = Command;
