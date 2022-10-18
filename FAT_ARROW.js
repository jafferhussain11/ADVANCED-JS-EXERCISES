/*var getA = function (a){

    return a;
};
*/

let getA = a=>a;

console.log(getA(1));

let square = a => {return a*a};
console.log(square(5));

let  mult = (a,b) => {return a*b};
console.log(mult(6,5));

//special features : fat arrow uses its parents this   

let x = function(){

    this.val = 1;
    setTimeout(() => {

        this.val++;
        console.log(this.val)
    },100)
}
x();