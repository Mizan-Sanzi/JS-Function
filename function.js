// basic of function

function aBc(parameter){

    code/conditions

}

//vid : 21.3
// -------------------------------------------function of square
function square (number){
    const square = number*number;
    console.log('value of the number is:', square);
}
square(8);

//--------------------------------------------function of addition
function add(num1, num2){
    const sum = num1 + num2;
    console.log(sum);
}
add(4, 7);

//vid: 21.4 ---------------------------------function differences
function subtract (num1, num2){
    const subtract = num1 - num2;
    return subtract;
}
subtract(90, 80);

var fatherAge = 70;
var myAge = 30;
var differences = subtract(fatherAge, myAge);
console.log('hello:', differences);