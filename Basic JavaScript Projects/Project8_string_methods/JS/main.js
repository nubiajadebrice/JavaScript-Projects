function full_sentence() {
    var part_1 = "This is ";
    var part_2 = "a complete "; 
    var part_3 = "sentence now.";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("Concatenate_ex").innerHTML = whole_sentence;
} //using the concat method, this func combines these variables in a whole sentence

function slice_func() {
    var Sentence = "This is a sentence by Nubia.";
    var Section = Sentence.slice(22,27);
    document.getElementById("slice").innerHTML = Section;
}//this uses the slice method to return "nubia"

const str = "Hello Nubia.";
document.write(str.toUpperCase());
//this converts the above string to uppercase using touppercase method

const str2 = "Nubia likes the color yellow.";
document.write(str2.search("yellow"));
//searches the string and returns the value of yellow

function string_method() {
    var X = 21;
    document.getElementById("numb_to_string").innerHTML = X.toString();
} //this converts a number to a string and displays that

function precision_method() {
    var X = 2116.123456789987654321
    document.getElementById("precision").innerHTML = X.toPrecision(7);
} //this will only display the number up to the amount of characters specify

function fix_method() {
    var X = 2116.123456789
    document.getElementById("fixing").innerHTML = X.toFixed(3);
} //this will only display the number up to the amount of decimals that I specify


const Y = "Nubia says hi.";
console.log(Y.valueOf());
//this will display the value of my string in the console



