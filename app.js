function startOrder(){

let name = prompt("Enter your name");

// call the function
let gender = askGender();

let drinkType = prompt("Hot or Cold drink?");

let drinkName = prompt("Enter drink name");

// save answers in array
let order = [name, gender, drinkType, drinkName];

// for loop to print array
for(let i = 0; i < order.length; i++){
console.log(order[i]);
}

let title = "";

if(gender === "male"){
title = "Mr";
}
else{
title = "Mrs";
}

let receipt =
"☕ Order Receipt\n\n" +
"Welcome: " + title + " " + name + "\n\n" +
"Status: Preparing your order...\n\n" +
"Drink Type: " + drinkType + "\n" +
"Drink Name: " + drinkName + "\n\n" +
"Thank you ❤️";

alert(receipt);

}


// function for gender question
function askGender(){

let gender = prompt("Enter your gender (male / female)");

while(gender !== "male" && gender !== "female"){
gender = prompt("Please enter a correct gender (male / female)");
}

return gender;

}
