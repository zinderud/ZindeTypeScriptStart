import {Calculator} from './patern/sade/calculator';
import {AbstractFactoryPattern}   from  './patern/index';

window.onload = function () {
 var d:void= new AbstractFactoryPattern.AbstarctDemoshow().tester1();
    var calc = new Calculator();
    calc.init('X','Y','Output');
};

 