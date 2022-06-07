document.write(typeof "Nubia");

document.write(" 21" + 16);

function notnumb () {
    document.getElementById("Test").innerHTML = 0/0;
} //trying to display NaN 

document.write(2E310);
document.write(-3E310);

document.write(21 > 16); //boolean displays true
document.write(21 < 16); //boolean displays false

console.log(16 + 21);
console.log(16 > 21);

document.write(16 == 21); //comparing to see if this is equal
document.write(21 == 21); //comparing to see if this is equal

A = 21
B = 21
document.write(A === B); //true - same data type and value

C = 16 
document.write(A === C); //false - same data type, dif value

D = "twenty-one"
document.write(B === D); //false - dif data type, same value

document.write(D === C); //false, dif data type and dif value

document.write(21 > 16 && 16 > 7); //AND op - true cuz both are true
document.write(21 > 16 || 16 > 21); //OR op - true cuz one is true

function notfunc1() {
    document.getElementById("notnot").innerHTML = !(21>16);
} //**not op would display false bc this is true**

function not_func() {
    document.getElementById("not2").innerHTML = !(16>21);
} //not op would display true because this is flase



document.getElementById("Test3").innerHTML = isNaN('string');
//**trying to determine if this is a number.**


document.getElementById("Test4").innerHTML = isNaN('21');
//**trying to determine if this is a number.**