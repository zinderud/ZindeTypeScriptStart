/*This pattern involves a single class which is responsible to create an object while making sure that only single object gets created. This class provides a way to access its only object which can be accessed directly without need to instantiate the object of the class.*/
export class SingletonPatern{
 
constructor() {}
private static instance: SingletonPatern;
 
   static get Instance(){
if(this.instance===null||this.instance===undefined)
{
    this.instance=new SingletonPatern();
}
return this.instance;
   } 
 
}

export class SingletonDemo{
     show():void{
     var singleton1 = SingletonPatern.Instance;
			var singleton2 = SingletonPatern.Instance;

			if (singleton1 === singleton2) {
                //equivalent :eşdeğer
				console.log("two singletons are equivalent");
			} else {
				console.log("two singletons are not equivalent");
			}
 }
}