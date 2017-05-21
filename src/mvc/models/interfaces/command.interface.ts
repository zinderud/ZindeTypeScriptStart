import {INotification} from "./notification.interface";

export interface ICommand {

    execute(notification: INotification): void;

}