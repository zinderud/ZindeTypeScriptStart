function ekle(x:number,y:number):number{ return x+y;}//named function
var mytopla=function(x:number,y:number):number{ return x+y;}//anoymus 
var mytoplasan=(a:number,b:number)=>a+b;//lambda function

function add(arg1: string, arg2: string): string;//option 1
function add(arg1: number, arg2: number): number;//option 2
function add(arg1: boolean, arg2: boolean): boolean;//option 3
function add(arg1: any, arg2: any): any {//this is not part of the overload list, so it has only three overloads
    return arg1 + arg2;
}

function isimlik(ad:string,soyad?:string):string{
    if(soyad)
    return ad+soyad;
    else 
    return ad;}
//soyad function with optional parameters
var benimIsimlik=isimlik("sade","de");
function isimlikrest(ad:string,...parameters :string[]):string{
   return ad+parameters.join(" ");  }

   function beniCagir(text:string){
       console.log('icerden beniCagir '+ text);
   }
   function cagrilanFonksiyon(ictext:string,calback:(txt:string)=>void){
       calback(ictext);
   }
   cagrilanFonksiyon("bakalım ne olacak",beniCagir);