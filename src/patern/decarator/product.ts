abstract class  Product {
    public description: string;

    public getDescription() : string{
        return this.description;
    };

  public abstract kdv(): number;
}
abstract class ProductDecarator extends Product{

    decoratedPruduct:Product;
    public abstract getDescriptionProduct():string;
}
class Book extends Product{
    public kdv(): number {
       return 0.18;
    }
    public description="Book";

} 
class eBook extends Product{
    public kdv(): number {
       return 0.1;
    }
    public description="eBook";

} 

class OnlineSell extends ProductDecarator{

    constructor(pr:Product){
        super();
        this.decoratedPruduct=pr;
    }
    public getDescriptionProduct(): string {
        return this.decoratedPruduct.getDescription()+" Online";
    }    public kdv(): number {
        return this.decoratedPruduct.kdv()+0.1;
    }


}

class ComponySell extends ProductDecarator{

    constructor(pr:Product){
        super();
        this.decoratedPruduct=pr;
    }
    public getDescriptionProduct(): string {
        return this.decoratedPruduct.getDescription()+" ComponySell";
    }    public kdv(): number {
        return this.decoratedPruduct.kdv()+0.5;
    }


}