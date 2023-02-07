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
//class06
var allAnswers =[];
var q1=prompt("Do you live in Amman? ");
var q2=prompt("Do you have a car? ");
var q3=prompt("Do you love JavaScript?");
validAnswer(q1);
validAnswer(q2);
validAnswer(q3);
printAnswers(allAnswers);

function validAnswer (ans)
{
    if (ans)
    {
        allAnswers.push(ans);
    }
   else
   {
        allAnswers.push("invalid");
   }
}
function printAnswers(allAns)
{
    for (let i=0; i<allAns.length; i++)
    {
        console.log(allAns[i]);
    }
}
