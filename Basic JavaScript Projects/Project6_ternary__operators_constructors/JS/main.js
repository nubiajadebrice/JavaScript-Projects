function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"Youre are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
} //used to check if someone is tall enough to ride

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
} //used to check if someone is old enough to vote

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
} //using this to create a class

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
} //using new to create instances of the class and display the requested info

function Fruit(color, seeds) {
    this.fruit_color = color;
    this.fruit_seeds = seeds;
}

var lemon = new Fruit("yellow", "many");
function fruit_func() {
    document.getElementById("New_and_This").innerHTML = 
    "Lemon is a " + lemon.fruit_color + " fruit that has " + lemon.fruit_seeds + " seeds."; 
}

function count_func() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 16;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
} //this is a nested function

