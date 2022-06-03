function addition_Function() {
    var addition = 21 + 16;
    document.getElementById("Math").innerHTML = "21 + 16 = " + addition;
} // this will add these numbers

function sub_op() {
    var subtraction = 21 - 16;
    document.getElementById("submath").innerHTML = "21 - 16 = " + subtraction;
} //this will subtract these numbers

function multi_op() {
    var simple_Math = 21 * 16;
    document.getElementById("multimath").innerHTML = "21 * 16 = " + simple_Math;
} //this will multiply these numbers

function div_op() {
    var simple_Math = 21 / 16;
    document.getElementById("divmath").innerHTML = "21 / 16 = " + simple_Math;
} //this will divide these numbers

function super_math() {
    var simple_Math = (21+16)*10/6-3;
    document.getElementById("supermath").innerHTML = 
    "21 plus 16, multiplied by 10, divided by 6 and then subtracted by 3 equals " + simple_Math;
} //this allows for multiple different types of operations and answers that

function mod_op() {
    var simple_Math = 21 % 6;
    document.getElementById("modmath").innerHTML =
    "When you divide 21 by 6 you have a remainder of: " + simple_Math;
} //this is the modulus element that gives the remainder

function negate_op() {
    var x = 21;
    document.getElementById("negmath").innerHTML = -x;
} //this will show us the negative version of variablex 

var i = 21;
i++;
document.write(i); //will increase by 1 to 22

document.write("\n"); //space?

var d = 16;
d--;
document.write(d); //will decrease by 1 to 15

document.write("\n"); //space?

window.alert(Math.random() * 21); //pops up an alert with a random umber between 0 and 21

document.write("\n"); //space?

let c = Math.round(21.16); //rounds this number to the nearest whole
document.write(c) //displays the rounded number
