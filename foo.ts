class Grault {
    private garply: string

    constructor(quux: Quux, waldo: number[]){
        this.garply = quux.quuz + ' ' + quux.corge + ' ' + waldo;

    }
    public getGarply(){
        return this.garply;
    }
}


interface Quux {
    quuz: string
    corge: number
}

// OR
// interfaced best used to merge two interfaces
// interface Quux {
//     quuz: string
//     corge: number
// }


function foo(bar: Quux){
    return 'Hello, ' + bar.quuz + ' ' + bar.corge;
};

let baz = <Quux>{quuz: 'abc', corge: 123}

let fred: Grault = new Grault(baz, [1, 2, 3]);



console.log(fred.getGarply());

document.body.innerHTML = fred.getGarply();