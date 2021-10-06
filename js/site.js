//get the user input from the page
//controller function
function getValue() {
    //make sure alert is invisible
    document.getElementById("alert").classList.add("invisible");

    let userText = document.getElementById("userText").value;

    //check for a palindrome
    let returnObj = palindromeCheck(userText);

    //display message to the page
    displayMessage(returnObj);
}
//check if text is a palindrome
function palindromeCheck(userText) {

    //racecar
    userText = userText.toLowerCase();

    //remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    userText = userText.replace(regex, "");

    let revText = [];
    let returnObj = {};

    //reverse a string using a for loop
    for (let index = userText.length - 1; index >= 0; index--) {
        revText += userText[index];

    }

    if (revText == userText) {
        returnObj.msg = "Well Done! You Entered A Palindrome."
    }
    else {
        returnObj.msg = "Sorry! You Did Not Enter A Palindrome."
    }

    returnObj.reversed = revText;
    return returnObj;

}
//display the message to the screen
function displayMessage(returnObj) {

    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}