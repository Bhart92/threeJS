var Grault = /** @class */ (function () {
    function Grault(quux, waldo) {
        this.garply = quux.quuz + ' ' + quux.corge + ' ' + waldo;
    }
    Grault.prototype.getGarply = function () {
        return this.garply;
    };
    return Grault;
}());
// OR
// interfaced best used to merge two interfaces
// interface Quux {
//     quuz: string
//     corge: number
// }
function foo(bar) {
    return 'Hello, ' + bar.quuz + ' ' + bar.corge;
}
;
var baz = { quuz: 'abc', corge: 123 };
var fred = new Grault(baz, [1, 2, 3]);
console.log(fred.getGarply());
document.body.innerHTML = fred.getGarply();
