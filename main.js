/*import { CheckAccount } from "./checkingaccount";

class Main {
    checkingAccount: CheckAccount;
    constructor(){
        this.checkingAccount = new CheckAccount("Eric Coleman")
    }

    
}*/
var title = prompt("Please enter your account name:");
var message = document.getElementById("message");
message.innerHTML = "Welcome <b>" + title + "</b> to TEDD banking app!!!";
var Owner = document.getElementById("spanmessage");
Owner.innerHTML = title;
var globalbalance = document.getElementById("inp");
var globalbalancenumber = document.getElementById("balancemessage");
var newBalance = document.getElementById("balancemessage");
var intialBalance = +globalbalancenumber.textContent;
console.log("my" + intialBalance);
var result = +globalbalancenumber.textContent;
console.log("ooo" + result);
function postAll() {
    if (globalbalance.value === '') {
        alert("Please Enter Amout to Deposit");
    }
    if (isNaN(+globalbalance.value)) {
        alert("pleas enter a valid numbers");
    }
    intialBalance += +globalbalance.value;
    newBalance.innerHTML = intialBalance.toString();
    console.log(globalbalance.value);
    globalbalance.value = "";
}
function withdraw() {
    //if(+globalbalance.value > 0){
    //alert("insufficient funds")
    //}
    console.log("your global balance" + globalbalance.value);
    console.log("your global balance number" + globalbalancenumber.textContent);
    result = +globalbalancenumber.textContent - +globalbalance.value;
    if (+globalbalance.value > result) {
        alert("insufficient funds to withdraw");
    }
    else {
        newBalance.textContent = result.toString();
    }
    globalbalance.value = "";
}
document.getElementById("btn").addEventListener('click', withdraw);
document.getElementById("btn1").addEventListener('click', postAll);
