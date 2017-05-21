export class Model {

    public set(attrs: Object): any {

        for(let key in attrs) {
            this[key] = attrs[key];
        }

    }

    public get(attr:string): any {

        return this[attr];

    }

}