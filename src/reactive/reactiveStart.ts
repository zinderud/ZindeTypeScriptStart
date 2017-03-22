import {Observable,Observer} from "rxjs";

export function ObservableChose1() {
let numbers=[22,3,4,5];

let source =Observable.from(numbers);

var resoult=source.subscribe(

    p=>console.log("gelen"+ p),
    error=>console.log(error),
    ()=>console.log("başarılı")
)
}
 //

export class  ObserClas  implements Observer<number> {
 
 next(val:number){
console.log("ObserClas"+ val )
 };
 error(error:any){}
 complete(){}

}
 
export   function ObservableChose2() {
let numbers=[22,3,4,5];

let source =Observable.from(numbers);

var resoult=source.subscribe( new ObserClas())
}

 
