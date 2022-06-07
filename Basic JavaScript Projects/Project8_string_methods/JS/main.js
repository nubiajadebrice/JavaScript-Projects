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



