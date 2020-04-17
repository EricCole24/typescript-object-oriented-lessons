class BankAccount {
    hostElement:HTMLDivElement
    title:string
    owner:HTMLSpanElement;
    startingBalance = 0;
    displayBalanceMessage: HTMLDivElement 
    inputField:HTMLInputElement
    Depositbutton:HTMLButtonElement
    withdrawbutton:HTMLButtonElement
    constructor(title:string){
        this.hostElement = document.getElementById("message")! as HTMLDivElement;
        this.title = title;
        this.owner = document.getElementById("spanmessage")! as HTMLSpanElement
        this.displayBalanceMessage = document.getElementById("balancemessage")! as HTMLDivElement
        this.inputField = document.getElementById("inp")! as HTMLInputElement;
        this.Depositbutton = document.getElementById("btn1")! as HTMLButtonElement;
        this.withdrawbutton = document.getElementById("btn")! as HTMLButtonElement;
        this.logMessage()
        this.logName()
        this.displayStartingBalance()
        this.configure()
        this.configure2()
    
    }
    
    submitDeposit2(event:Event){
        event.preventDefault()
        this.withdrawMoney(+this.inputField.value)
        this.displayStartingBalance()
        console.log("my " + this.inputField.value)
        //this.ValidateInputValue()
        this.clearInput()
    }
    
    
    
    submitDeposit(event:Event){
        event.preventDefault()
        this.depositMoney(+this.inputField.value)
        this.displayStartingBalance()
        console.log(typeof this.inputField.value)
        //this.ValidateInputValue()
        this.clearInput()
    }
    configure(){
        this.Depositbutton.addEventListener('click',this.submitDeposit.bind(this))
    }
    configure2(){
        this.withdrawbutton.addEventListener('click',this.submitDeposit2.bind(this))
    }
    
    
    logMessage(){
        this.hostElement.innerHTML = `Welcome <b>${this.title}</b> to TEDD banking app!!!`
        
    }
    logName(){
        this.owner.innerText = this.title
    }
    displayStartingBalance(){
        this.displayBalanceMessage.textContent = this.startingBalance.toString()
    }
    depositMoney(amount:number){
       
        this.startingBalance += amount
        this.displayStartingBalance()
        //console.log("yooy " +  this.startingBalance)
    }
    withdrawMoney(amount:number){
        this.startingBalance -= amount
        this.displayStartingBalance()
        console.log(" withdrew " + amount + " " + "i have" +  this.startingBalance)
    }
    clearInput(){
        this.inputField.value = "";
    }
    ValidateInputValue(){
        const input = this.inputField.value
        if( isNaN(+input)){
            alert("Please Enter Valid Numbers Only")
            }
            
        
            
        }

        }

    



let name1 : string = prompt("Please enter your account name!!:")
let ba = new BankAccount(name1.toUpperCase())

