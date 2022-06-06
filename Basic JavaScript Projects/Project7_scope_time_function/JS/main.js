var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}

function Add_numbers_2 () {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//^using a global variable

function Add_numbers_1() {
    var X = 21;
    document.write(16 + X + "<br>");
}

function Add_numbers_2() {
    document.write(X+100);
}
Add_numbers_1();
Add_numbers_2();

//^using a local variable

function get_date() {
    if (new Date().getHours() < 12) {
        document.getElementById("Greeting").innerHTML = "Good Morning!";
    }
} //will display good morning if it is before noon

if (16<21) {
    document.write(" 16 is less than 21.")
} //will display the text if the statement is true

function age_func() {
    Age = document.getElementById("age").value;
    if (Age >= 21) {
        Drink = "You are old enough to drink!";
    }
    else {
        Drink = "You are not old enough to drink!";
    }
    document.getElementById("How_old?").innerHTML = Drink;
}//this function checks to see whether the user inpit is greater or less than the 21 drinking age and returns the right answer

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "it is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
} //this code will display a message based on what the current time of day is

console.log (16 > 21);



function my_func_ex {
    var Q = 5;
    var P = 7;
    return (Q + P);
} //intentionally written wrong - missing () - to then check in console log.
//^ the presence of this code messes up almost the entire page