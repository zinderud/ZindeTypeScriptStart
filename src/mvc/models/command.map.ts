export class CommandMap {

    private _name: string;
    private _commandClassRef: any;
    private _listNotificationInterests: string[];

    get name():string {
        return this._name;
    }

    set name(value:string) {
        this._name = value;
    }
    
    get commandClassRef():any {
        return this._commandClassRef;
    }

    set commandClassRef(value:any) {
        this._commandClassRef = value;
    }

    get listNotificationInterests():string[] {
        return this._listNotificationInterests;
    }

    set listNotificationInterests(value:string[]) {
        this._listNotificationInterests = value;
    }
    
}