// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789.,?!@#$%^&*()_+=-{}";

// Write password to the #password input
function writePassword() {
  var password = generatePassword() {
   let str = "";  
    for (let i=0; i < length; i++){
    str += chars.charAt(Math.floor(Math.random() * chars.length));
};
console.log(str);
  str.value = password;

  console.log(password);

}};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
