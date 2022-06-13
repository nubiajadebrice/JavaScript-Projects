function pet_func() {
    var pet_output;
    var Pets = document.getElementById("pet_input").value;
    var pet_string = " is a great pet!";
    switch(Pets) {
        case "Cat":
            pet_output = "Cat" + pet_string;
        break;
        case "Dog":
            pet_output = "Dog" + pet_string;
        break;
        case "Bird":
            pet_output = "Bird" + pet_string;
        break;
        case "Hamster":
            pet_output = "Hamster" + pet_string;
        break;
        case "Fish":
            pet_output = "Fish" + pet_string;
        break;
        default:
            pet_output = "Please enter a pet exactly as written on the above list.";
    }
    document.getElementById("output").innerHTML = pet_output;
} //creates an input box for users fav pet and when they enter, it displays the message

function testclassfunc() {
    var A = document.getElementsByClassName("Test_Class");
    A[0].innerHTML = "The test works!";
}//when the button is clicked, the text changes

var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2 * Math.PI);
ctx.stroke();
//above - places a circle inside our fisrst canvas

var g = document.getElementById("canvas2");
var gtx = g.getContext("2d");

var grd = gtx.createLinearGradient(0,0,170,0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

gtx.fillStyle = grd;
gtx.fillRect(20,20,150,100);
//line 39-now creates a gradient inside our canvas box