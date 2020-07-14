//es5 --function--it can be named
const square=function(x){
    return x*x;
}
//or function square(x){ return x*x;}
console.log(square(4));

//es6-- function is anonymous..it should follow this syntax..we cant write like function.
// const squarearrow =(x) => {
//     return x*x;
// }
//simplified version
const squarearrow =(x) => x*x;
console.log(squarearrow(8));

const firstname= (x) => x.split(' ')[0];
console.log(firstname('hi bye'));


//arguments object no longer bound with arrow functions
const add= (a,b) => {
    //console.log(arguments);-gives error
    return a+b;
};
console.log(add(55,1,100));

//this keyword - no longer bound
const multiplier= {
    numbers: [1,6],
    multipliedby: 2,
    multiply(){
        return this.numbers.map((number) => number*this.multipliedby)
    }
}
console.log(multiplier.multiply());