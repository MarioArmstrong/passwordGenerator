// Assignment Code
var passwordHtml = document.getElementById("password");
var generateBtn = document.querySelector("#generate");
var passwordLengthAnswer = prompt("how many characters long?");
var password ="";

// Write password to the #password input
function passwordLength(){
  console.log("passwordLengthAnswer() is running!");

  if(passwordLengthAnswer === "") {
      alert("Please provide a valid submission");
  } else{
    passwordLength();
  };
};

function genRandomPassword(event) {
  console.log("genRandomPassword() is running!");
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()-_=+.?';
  for (let i=0; i < passwordLengthAnswer; i++){
      password += chars.charAt(Math.floor(Math.random() * chars.length)); //chars.length means the length of the strong aka the characters I listed
  }                                                                       //charsAt gets the character at a specific point
      passwordHtml.value = password; //this takes the new value of password and injects it into the variable password
      console.log(password);
};  
  
// Add event listener to generate button
generateBtn.addEventListener("click", genRandomPassword(event));









//This is made up code to create a simple password generator:

// var passwordHtml = document.getElementById("password");
// var passwordLengthAnswer = prompt("how many characters long?");
// var password = "";
// // var anotherPasswordAttempt = confirm("Would you like to create another password?");

// function passwordLength(){
//     console.log(passwordLengthAnswer);
//     if(passwordLengthAnswer === ""){
//         alert("Please provide a valid submission");
//     }

// };


// function genRandomPassword() {
//     var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()-_=+.?';
//     for (let i=0; i < passwordLengthAnswer; i++){
//         password += chars.charAt(Math.floor(Math.random() * chars.length)); //chars.length means the length of the strong aka the characters I listed
//     }                                                                       //charsAt gets the character at a specific point
// document.getElementById("password").value = password; //this takes the new value of password and injects it into the variable password
// console.log(password);

// passwordHtml.textContent = password;

// };


// passwordLength();
// genRandomPassword();
