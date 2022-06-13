let activePlayer = 'X'; //this keeps track of whose turn it is

let selectedSquares = []; //this array stores an array of moves and is used to determin win conditions


//below- this func is for placing x or o in a square
function placeXorO(squareNumber) {
    //this cond. ensures a square hasn't been selected already. 
    //the .some() method is used to check each element of the selectedsquare array to see if it contains the square # clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this var retrieves the html elmnt id that was clicked
        let select = document.getElementById(squareNumber);
        //this cond. checks whose turn it is
        if (activePlayer === 'X') { 
            //if AP is = to X the x.png is placed in html
            select.style.backgroundImage = "url('images/pinkx.png')";
            //AP may only be X or O, so if not X then it must be O
        } else {
            //if AP = O, then O.png is placed in html
            select.style.backgroundImage = "url('images/orangeo.png')";
        }
        //squareNumb and AP are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a func to check for any win cond.
        checkWinConditions();
        //this cond. is for changing the AP
        if (activePlayer === 'X') {
            //if AP is X change it to O
            activePlayer = 'O';
            //if AP is anything other than X
        } else {
            //change the AP to X
            activePlayer = 'X';
        }
        audio('./media/place.mp3');
        //this cond. checks to see if it is comps turn
        if(activePlayer === 'O') {
            //this func disables clicking for comp choice
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000)
        }
        return true;
    }
    //this func results in a random square being selected
    function computersTurn() {
        //this boolean is needed for the while loop
        let success = false;
        //this var stores a random numb 0-8
        let pickAsquare;
        //this cond allows the while loop to keep trying if a square is selected already
        while(!success) {
            //a random numb between 0-8 is selected
            pickAsquare = String(Math.floor(Math.random () * 9));
            //if the random numb returns true, that square hasn't been selected yet
            if (placeXorO(pickAsquare)){
                //this line calls a func
                placeXorO(pickAsquare);
                //this changes out boolean and ends the loop
                success = true;
            };
        }
    }

}


//This function parases the selectedsquares array to search for win cond.
//drawWinLine func is called to draw line if condition is met
function checkWinConditions() {
   //X conditions
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520)}
    //O conditions
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520)}
    //this cond checks for a tie. if not of the above conds register and 9 sqaures are selected, the code executes
    else if (selectedSquares.length >= 9) {
        //this func plays the tie game sound
        audio('./media/newtie.mp3');
        //this function sets a .3 second timer before the resetGame is called
        setTimeout(function () { resetGame(); }, 1000);
    }
    //this func checks if an array includes 3 strings. it is used to check for each win cond
    function arrayIncludes(squareA, squareB, squareC) {
        //these 3 var will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        //if the 3 var we pass are all included in our array true is returned
        //and out else func exectures the drawwinline func
        if (a === true && b === true && c === true) {return true}
    }
}


//this func makes our body element temp unclickable
function disableClick() {
    //this makes the body unclickable
    body.style.pointerEvents = 'none';
    //this makes the body clickable again after 1 sec
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

///this func takes a string parameter of the path you set earlier for 
//placement sound ('.media/newplace.mp3')
function audio(audioURL) {
    //we create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    //play meethod plays our audio sound
    audio.play();
}

//this func makes our body element temp unclickable
function disableClick() {
    //this makes our body unclickable
    body.style.pointerEvents = 'none';
    //this makes our body clickable again after 1 sec
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

//this func takes a string parameter of the path you set earlier for 
//placement sound (./media/place.mp3)
function audio(audioURL) {
    //we create a new audio object and we pass the path as a parameter
    let audio = new Audio(audioURL);
    //play method plays our audio sound
    audio.play();
}

//this func untilizes html canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines')
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    //this func interacts with the canvas
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0,0,608,608)
        c.beginPath();
        c.moveTo(x1,y1)
        c.lineTo(x,y)
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x <x2) { x += 10;}
            if (y < y2) {y += 10;}
            if (x >= x2 && y >= y2) {cancelAnimationFrame (animationLoop);}
        }
        //this condition is similar to the one above. 
        //it is necessary for 6,4,2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) {x += 10;}
            if (y > y2) {y -= 10;}
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
        }
    }
    //this func clears our canvas after our win line is drawn
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0,0,608,608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick();
    audio('./media/newwin.mp3');
    animateLineDrawing();
    setTimeout (function() { clear(); resetGame();}, 1000);
}

//this function resets the game in the event of a tie or win
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i))
        square.style.backgroundImage = ''
    }
    selectedSquares = [];
}




