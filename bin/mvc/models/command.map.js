"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommandMap = (function () {
    function CommandMap() {
    }
    Object.defineProperty(CommandMap.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommandMap.prototype, "commandClassRef", {
        get: function () {
            return this._commandClassRef;
        },
        set: function (value) {
            this._commandClassRef = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommandMap.prototype, "listNotificationInterests", {
        get: function () {
            return this._listNotificationInterests;
        },
        set: function (value) {
            this._listNotificationInterests = value;
        },
        enumerable: true,
        configurable: true
    });
    return CommandMap;
}());
exports.CommandMap = CommandMap;
