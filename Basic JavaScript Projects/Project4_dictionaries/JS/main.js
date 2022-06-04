function my_dictionary () {
    var Animal = {
        Species: "Cat",
        Color: "Orange",
        Breed: "Tabby Cat",
        Age: 2, 
        Sound: "Meow!"
    }
    delete Animal.Breed;
    document.getElementById("Dictionary").innerHTML = Animal.Breed;
} //created a dictionary. the output is the breed