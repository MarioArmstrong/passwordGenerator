// Assignment Code
var passwordHtml = document.getElementById("password");
var generateBtn = document.querySelector("#generate");
var charsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsLower = "abcdefghijklmnopqrstuvwxyz";
var charsNumber = "123456789";
var charsSpecial ="!@#$%^&*()-_=+.?";
var password = "";
var questionAnswers = "";
var upperCaseAnswer;
var lowerCaseAnswer;
var numberAnswer;
var specialAnswer;
var passwordLengthAnswer;


// Write password to the #password input
function passwordLength(){
  console.log("passwordLengthAnswer() is running!");
  passwordLengthAnswer = prompt("how many characters long?");

if (passwordLengthAnswer === "") {
  alert("Please provide a valid submission");
  return;

};
upperCaseAnswer = confirm("Do you want uppercase letters?");
lowerCaseAnswer = confirm("Do you want lowercase letters?");
numberAnswer = confirm("Do you want numbers?");
specialAnswer = confirm("Do you want special characters?");
answers();
};

function answers() {
  questionAnswers="";//clears out the previous selection
  if(upperCaseAnswer===true) {
      questionAnswers+=charsUpper//+= means I am compiling the string with the decision the user made
      //questionsAnswers=questionsAnswers+charsUpper -- this is the same as above but longer
  };
  if(lowerCaseAnswer===true){
    questionAnswers+=charsLower
  };
  if(numberAnswer===true){
    questionAnswers+=charsNumber
  };
  if(specialAnswer===true){
    questionAnswers+=charsSpecial
  };
  return questionAnswers;
};


function genRandomPassword(event) {
  console.log(event);
  passwordLength();
  for (let i=0; i < passwordLengthAnswer; i++){
      password += questionAnswers.charAt(Math.floor(Math.random() * questionAnswers.length)); //chars.length means the length of the strong aka the characters I listed
  }                                                                       //charsAt gets the character at a specific point
      passwordHtml.value = password; //this takes the new value of password and injects it into the variable password
      console.log(password);
};  
  
// Add event listener to generate button
generateBtn.addEventListener("click", genRandomPassword);
