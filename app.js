"use strict";
var uname = prompt("Please enter your name:");
var gender = prompt("Please enter your gender 'male' or 'female':");
var age = parseInt(prompt("Please enter your age:"))
while (age<=0)
{
    var age = parseInt(prompt("age must be more than zero!"))
}
var welcome= confirm("Do you want to skip welcome message?")
if (welcome==false)
{
    if (gender=="male")
        welcome=alert("Welcome Mr "+uname)
    else if (gender=="female")
    welcome=alert("Welcome Ms "+uname)
    else
    welcome=alert("Welcome "+uname)
}
