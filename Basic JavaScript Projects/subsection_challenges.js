//fade challenge
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
}); 

//form challenge
function validateForm() {
    let x = document.forms["myForm"]["phonenumb"].value;
    if (x == "") {
        alert("Phone Number must be filled out.");
        return false;
    }
}

//pop up form challenge
function openForm() {
    document.getElementById("pop_form").style.display = "block";
}

function closeForm() {
    document.getElementById("pop_form").style.display = "none";
}


