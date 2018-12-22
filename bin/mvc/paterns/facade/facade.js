"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var command_map_1 = require("../../models/command.map");
var proxy_map_1 = require("../../models/proxy.map");
var broadcast_1 = require("../observer/broadcast");
var notification_1 = require("../observer/notification");
var Facade = (function () {
    function Facade() {
    }
    Facade.registerCommand = function (notificationName, commandClassRef) {
        var commandMap = this.getCommandMap(commandClassRef);
        if (!commandMap) {
            var commandMap_1 = new command_map_1.CommandMap();
            commandMap_1.name = commandClassRef.name;
            commandMap_1.commandClassRef = commandClassRef;
            commandMap_1.listNotificationInterests = [notificationName];
            this.commandMaps.push(commandMap_1);
        }
        else {
            if (commandMap.listNotificationInterests.indexOf(notificationName) < 0) {
                commandMap.listNotificationInterests.push(notificationName);
            }
        }
    };
    Facade.getCommand = function (commandClassRef) {
        var commandMaps = this.getCommandMap(commandClassRef);
        if (commandMaps) {
            return commandMaps.commandClassRef;
        }
        return null;
    };
    Facade.getCommandMap = function (commandClassRef) {
        for (var i = 0; i < this.commandMaps.length; i++) {
            if (this.commandMaps[i].name == commandClassRef.name) {
                return this.commandMaps[i];
            }
        }
        return null;
    };
    Facade.registerProxy = function (proxy, realSubject) {
        if (!this.getProxyMap(proxy)) {
            var proxyMap = new proxy_map_1.ProxyMap();
            var proxyName = proxy.constructor.name;
            var instance = proxy;
            if (typeof proxy != "object") {
                proxyName = proxy.name;
                instance = new proxy(realSubject);
            }
            proxyMap.name = proxyName;
            proxyMap.instance = instance;
            this.proxyMaps.push(proxyMap);
        }
    };
    Facade.hasProxy = function (proxy) {
        if (this.getProxy(proxy)) {
            return true;
        }
        return false;
    };
    Facade.getProxy = function (proxy) {
        var proxyMap = this.getProxyMap(proxy);
        if (proxyMap) {
            return proxyMap.instance;
        }
        return null;
    };
    Facade.getProxyMap = function (proxy) {
        var proxyName = proxy.constructor.name;
        if (typeof proxy != "object") {
            proxyName = proxy.name;
        }
        for (var i = 0; i < this.proxyMaps.length; i++) {
            if (this.proxyMaps[i].name == proxyName) {
                return this.proxyMaps[i];
            }
        }
        return null;
    };
    Facade.sendNotification = function (notificationName, params) {
        var _this = this;
        var notificationInterests = [];
        this.commandMaps.forEach(function (commandMap) {
            var listNotificationInterests = commandMap.listNotificationInterests;
            if (listNotificationInterests.indexOf(notificationName) >= 0) {
                notificationInterests.push(notificationName);
                var notification = new notification_1.Notification();
                notification.setName(notificationName);
                notification.setBody(params);
                var command = new commandMap.commandClassRef();
                command.setNotificationName(notificationName);
                command.execute(notification);
            }
        });
        this.broadcast.sendNotification(notificationName, params);
        notificationInterests.forEach(function (notificationName) {
            _this.broadcast.removeListener(notificationName);
        });
    };
    Facade.addListener = function (notificationName, listener) {
        this.broadcast.addListener(notificationName, listener);
    };
    Facade.removeListener = function (notificationName) {
        this.broadcast.removeListener(notificationName);
    };
    Facade.removeAllListeners = function () {
        this.broadcast.removeAllListeners();
    };
    Facade.commandMaps = [];
    Facade.proxyMaps = [];
    Facade.broadcast = new broadcast_1.Broadcast();
    return Facade;
}());
exports.Facade = Facade;
