import {IProxy} from "./interfaces/proxy.interface";

export class ProxyMap {

    private _name: string;
    private _instance: IProxy;

    get name():string {
        return this._name;
    }

    set name(value:string) {
        this._name = value;
    }
    
    get instance():IProxy {
        return this._instance;
    }

    set instance(value:IProxy) {
        this._instance = value;
    }
}