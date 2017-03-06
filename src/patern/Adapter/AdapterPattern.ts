export module   AdapterPatern{

    export class Adapteer{
        public method():void{
            console.log('adapte patern Method is baegin Called');

        }
    }
 
export interface Target{call():void;}
export class Adapter implements Target{
    public call(){
        console.log('adapters call method is begin called');
        var adapte:Adapteer =new Adapteer();
        adapte.method();
    }
}

export class AdapterDemo{
    
    public   show():void{
        var adap:AdapterPatern.Adapter=new AdapterPatern.Adapter();
        adap.call();
    }

}


} 

