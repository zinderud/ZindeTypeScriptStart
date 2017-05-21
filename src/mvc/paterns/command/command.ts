import {Broadcast} from "../observer/broadcast";
import {Facade} from "../facade/facade";
import {INotification} from "../../models/interfaces/notification.interface";
import {ICommand} from "../../models/interfaces/command.interface";

export class Command extends Broadcast implements ICommand {

    private notificationName: string;
    
    constructor() {
        super();
    }
    
    public setNotificationName(notificationName: string) {
        this.notificationName = notificationName;
    }

    public execute(notification: INotification): void {}

    /** @override  */
    public addListener(notificationName: string, listener: Function): void {

        if(notificationName == this.notificationName) {
            Facade.addListener(notificationName, listener.bind(this));    
        }

    }

    /** @override  */
    public sendNotification(notificationName: string, params?: any): void {

        Facade.sendNotification(notificationName, params);

    }

}