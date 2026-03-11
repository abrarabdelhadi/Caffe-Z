// ======================
// card face
// ======================
function flipCard(){
document.getElementById("card").classList.add("flip");
}
// ======================
// card back
// ======================
function resetCard(){

document.getElementById("card").classList.remove("flip");

document.getElementById("result").innerHTML="";

document.getElementById("name").value="";
document.getElementById("drinkName").value="";
document.getElementById("gender").value="";
document.getElementById("drinkType").value="";

}
// ======================
//order massage status
// ======================
function submitOrder(){

let name = document.getElementById("name").value;
let gender = document.getElementById("gender").value;
let drinkType = document.getElementById("drinkType").value;
let drinkName = document.getElementById("drinkName").value;

let title="";

if(gender==="male"){
title="Mr";
}
else if(gender==="female"){
title="Mrs";
}

let receipt = `
<h3>☕ Order Receipt</h3>

<p><strong>Welcome:</strong> ${title} ${name}</p>

<hr>

<p><strong>Status:</strong> Preparing your order...</p>

<p><strong>Drink Type:</strong> ${drinkType}</p>

<p><strong>Drink Name:</strong> ${drinkName}</p>

<p style="text-align:center;margin-top:10px;">Thank you ❤️</p>
`;

document.getElementById("receiptContent").innerHTML = receipt;

document.getElementById("receiptPopup").style.display="flex";

console.log(name+" ordered "+drinkType+" "+drinkName);

}

function closeReceipt(){
document.getElementById("receiptPopup").style.display="none";
}