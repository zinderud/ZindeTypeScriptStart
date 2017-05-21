export interface IMediator {

    handleNotification(): void;
    addListener(notificationName: string, listener: Function): void;
    sendNotification(notificationName: string, params?: any): void;
    removeAllListeners(): void;
    
}