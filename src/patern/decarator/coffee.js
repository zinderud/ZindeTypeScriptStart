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
var Coffee = /** @class */ (function () {
    function Coffee() {
    }
    Coffee.prototype.getDescription = function () {
        return this.description;
    };
    return Coffee;
}());
var CoffeDecarator = /** @class */ (function (_super) {
    __extends(CoffeDecarator, _super);
    function CoffeDecarator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CoffeDecarator;
}(Coffee));
var Expresso = /** @class */ (function (_super) {
    __extends(Expresso, _super);
    function Expresso() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = 'Espresso';
        return _this;
    }
    Expresso.prototype.cost = function () {
        return 12.0;
    };
    return Expresso;
}(Coffee));
var TurkishCaffe = /** @class */ (function (_super) {
    __extends(TurkishCaffe, _super);
    function TurkishCaffe() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = 'TurkishCaffe';
        return _this;
    }
    TurkishCaffe.prototype.cost = function () {
        return 5.0;
    };
    return TurkishCaffe;
}(Coffee));
var Milk = /** @class */ (function (_super) {
    __extends(Milk, _super);
    function Milk(cof) {
        var _this = _super.call(this) || this;
        _this.decoratedCaffe = cof;
        return _this;
    }
    Milk.prototype.getDescription = function () {
        return this.decoratedCaffe.getDescription() + "+milk";
    };
    Milk.prototype.cost = function () {
        return this.decoratedCaffe.cost() + 1.0;
    };
    return Milk;
}(CoffeDecarator));
var Coclate = /** @class */ (function (_super) {
    __extends(Coclate, _super);
    function Coclate(cof) {
        var _this = _super.call(this) || this;
        _this.decoratedCaffe = cof;
        return _this;
    }
    Coclate.prototype.getDescription = function () {
        return this.decoratedCaffe.getDescription() + "+Coclate";
    };
    Coclate.prototype.cost = function () {
        return this.decoratedCaffe.cost() + 3.0;
    };
    return Coclate;
}(CoffeDecarator));
/* usage */
var coffee = new TurkishCaffe();
coffee = new Milk(coffee);
coffee = new Coclate(coffee);
console.log(coffee.getDescription());
