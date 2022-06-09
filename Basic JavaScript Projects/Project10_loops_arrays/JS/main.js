function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 17) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
} //creates a loop that counts to 16

function text_length() {
    let text = "Hello, Nubia";
    let length = text.length;
    document.getElementById("txtlength").innerHTML = length; 
 } //shows the length of the text

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
 } //lists out the instruments in this array

function array_Function() {
    var nub_picture = [];
    nub_picture[0] = "writing";
    nub_picture[1] = "coding";
    nub_picture[2] = "watching TV";
    nub_picture[3] = "eating";
    nub_picture[4] = "sleeping";
    document.getElementById("Array").innerHTML = "In this picture, Nubia is " + nub_picture[4] + ".";
} //displays the sentence with the right array choice

function constant_function() {
    const fruit = {type:"melon", seeds:"many",color:"green"};
    fruit.price = "$1";
    fruit.color = "orange";
    fruit.weight = "1 pound";
    document.getElementById("Constant").innerHTML = "The cost of the " + fruit.type + " is " + fruit.price + " and weighs " + fruit.weight;
} //uses the const keyword to create a constant and display this sentence

let book = {
    Title: "Ender's Game ",
    Author: "Orson Scott Card ",
    Year: "1985 ",
    Publisher: "Tor Books ",
    Pages: "324 ",
    description : function() {
        return "My favorite book is " + this.Title + " by " + this.Author + " from " + this.Year;
    }
};
document.getElementById("book_object").innerHTML = book.description();
//this will return the sentence with the correct properties from the object

var N = 16
document.write(N);
{
    let N = 21
    document.write("<br>" + N);
}
document.write("<br>" + N)
//uses let keyword and block scope. output = 16 21 16

let text = "";
for (let i = 0; i< 3; i++) {
    if (i === 2) { break; }
    document.write("the number is " + i + "<br>");
} //break exits the loop

let text1 = "";
for (let i = 0; 1 < 3; i++) {
    if (i === 2) { continue;}
    text1 += "The number is " + i + "<br>";
} //continue jumps over this part of the loop


