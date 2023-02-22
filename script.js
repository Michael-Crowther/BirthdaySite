document.getElementById("envelope").addEventListener("click", enterLetter);
document.getElementById("close").addEventListener("click", exitLetter);

function enterLetter(){
    //Open letter here
    document.getElementById("letterParent").className = "letter";
    document.getElementById("piano").play();
    document.getElementById("letterOpen").play();
}

function exitLetter(){
    //close letter here
    document.getElementById("letterParent").className = "letterHidden";
    document.getElementById("letterClose").play();
}