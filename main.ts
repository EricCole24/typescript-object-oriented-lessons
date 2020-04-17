/*import { CheckAccount } from "./checkingaccount";

class Main {
    checkingAccount: CheckAccount;
    constructor(){
        this.checkingAccount = new CheckAccount("Eric Coleman")
    }

    
}*/

let title : string = prompt("Please enter your account name:")
let message = document.getElementById("message")
message!.innerHTML = `Welcome <b>${title}</b> to TEDD banking app!!!`
let Owner = document.getElementById("spanmessage")
Owner!.innerHTML = title;

let globalbalance :HTMLInputElement  = <HTMLInputElement>document.getElementById("inp");

let globalbalancenumber:HTMLElement = document.getElementById("balancemessage")! as HTMLElement
let newBalance = document.getElementById("balancemessage")
let intialBalance = +globalbalancenumber.textContent
console.log("my" + intialBalance)
let result = +globalbalancenumber.textContent
console.log("ooo" + result)
function postAll(){
   if(globalbalance.value === ''){
       alert("Please Enter Amout to Deposit")
   }
   if(isNaN(+globalbalance.value)  ){
       alert("pleas enter a valid numbers")
   }
    intialBalance += +globalbalance.value
   newBalance!.innerHTML = intialBalance.toString()
    console.log(globalbalance.value)
     globalbalance.value = ""
    }
    

function withdraw(){ 
//if(+globalbalance.value > 0){
    //alert("insufficient funds")
//}
console.log("your global balance" +globalbalance.value)
console.log("your global balance number" +globalbalancenumber.textContent)
result =  +globalbalancenumber.textContent - +globalbalance.value
if (+globalbalance.value > result){
alert("insufficient funds to withdraw")
}else{
 newBalance!.textContent = result.toString()
 
}
globalbalance.value = "";
}

document.getElementById("btn")!.addEventListener('click',withdraw)
document.getElementById("btn1")!.addEventListener('click',postAll)