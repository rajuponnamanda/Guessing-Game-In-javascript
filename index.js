// input call function code //
let inputElement =document.getElementById("inputElement");
let signInTextElement = document.getElementById("signInText");

//gueesing game code//
function signIn(){
    let inputValue= inputElement.value;
    let verifyText = "Hi " +inputValue +" , verfying your account..."
    signInTextElement.textContent=verifyText
} ;

let gameResult =document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber =Math.ceil(Math.random()*100);

function checkGuess(){
    let guessedNumber = parseInt(userInput.value);
    if(guessedNumber>randomNumber){
        gameResult.textContent="Too Hight, Try Again";
        gameResult.style.backgroundColor ="yellow"
        gameResult.style.color="black"
    }
    else if(guessedNumber<randomNumber){
        gameResult.textContent="Too Low, Try Again";
        gameResult.style.backgroundColor ="blue";
        gameResult.style.color ="white"
    } else if(guessedNumber === randomNumber){
        gameResult.textContent="Congartulations you Got Right..."
        gameResult.style.backgroundColor="green"
    }
    else{
        gameResult.textContent="Please Provide a Valid input";
        gameResult.style.backgroundColor ="red"
    }
}