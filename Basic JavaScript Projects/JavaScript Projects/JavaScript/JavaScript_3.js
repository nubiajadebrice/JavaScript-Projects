function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is the protagonist of " + character.innerHTML + "!");
} //creates an alert that shows where each character is from