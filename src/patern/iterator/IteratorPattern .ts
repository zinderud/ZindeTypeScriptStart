export interface Iterator{
    next():any;
    hasNext():boolean;
} 
export interface Aggregator{
    createIterator():Iterator
}

export class ConcreteIterator implements Iterator {
   

    private collection:any[]=[];
    private possistion:number=0;
   
    constructor(collection:any[]) {
         this.collection=collection;
        
    }
   public  next() {
       var result=this.collection[this.possistion];
       this.possistion++;
       return result;
    }
   public hasNext(): boolean {
      if(this.possistion<this.collection.length){
          return true;
      } else{
          return false;
      }
    }
    
}
export class Number implements Aggregator{
    private collection:number[]=[]
    constructor(collection :number[]){
        this.collection=collection;
    }
    public createIterator():Iterator{
        return new ConcreteIterator(this.collection);
    }
}
//usage

export function Goster():void{

    var asArray=[1,3,22,43,66,6];
   var numberIter=new Number(asArray).createIterator();
    while(numberIter.hasNext())
    {
        console.log(numberIter.next());
    }
}