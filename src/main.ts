window.onload = function () {
    var calc = new Calculator();
    calc.init('X','Y','Output');
};

class Calculator {
    private x : HTMLInputElement;
    private y : HTMLInputElement;
    private output : HTMLSpanElement;

    init(x: string, y: string, output: string) {
        this.x = <HTMLInputElement>document.getElementById(x);
        this.y = <HTMLInputElement>document.getElementById(y);
        this.output = <HTMLSpanElement>document.getElementById(output);
        this.wireEvents();
    }

    wireEvents() {
        document.getElementById('Add').addEventListener('click',
            event => {
                this.output.innerHTML = this.add(parseInt(this.x.value), parseInt(this.y.value)).toString()
            });
        document.getElementById('Subtract').addEventListener('click',
            event => {
                this.output.innerHTML = this.subtract(parseInt(this.x.value), parseInt(this.y.value)).toString()
            });
    }

    add(x: number, y : number) {
        return x + y;
    }

    subtract(x : number, y: number) {
        return x - y;
    }
}



