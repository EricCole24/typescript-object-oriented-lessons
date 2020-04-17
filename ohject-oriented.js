var BankAccount = /** @class */ (function () {
    function BankAccount(title) {
        this.startingBalance = 0;
        this.hostElement = document.getElementById("message");
        this.title = title;
        this.owner = document.getElementById("spanmessage");
        this.displayBalanceMessage = document.getElementById("balancemessage");
        this.inputField = document.getElementById("inp");
        this.Depositbutton = document.getElementById("btn1");
        this.withdrawbutton = document.getElementById("btn");
        this.logMessage();
        this.logName();
        this.displayStartingBalance();
        this.configure();
        this.configure2();
    }
    BankAccount.prototype.submitDeposit2 = function (event) {
        event.preventDefault();
        this.withdrawMoney(+this.inputField.value);
        this.displayStartingBalance();
        console.log("my " + this.inputField.value);
        //this.ValidateInputValue()
        this.clearInput();
    };
    BankAccount.prototype.submitDeposit = function (event) {
        event.preventDefault();
        this.depositMoney(+this.inputField.value);
        this.displayStartingBalance();
        console.log(typeof this.inputField.value);
        //this.ValidateInputValue()
        this.clearInput();
    };
    BankAccount.prototype.configure = function () {
        this.Depositbutton.addEventListener('click', this.submitDeposit.bind(this));
    };
    BankAccount.prototype.configure2 = function () {
        this.withdrawbutton.addEventListener('click', this.submitDeposit2.bind(this));
    };
    BankAccount.prototype.logMessage = function () {
        this.hostElement.innerHTML = "Welcome <b>" + this.title + "</b> to TEDD banking app!!!";
    };
    BankAccount.prototype.logName = function () {
        this.owner.innerText = this.title;
    };
    BankAccount.prototype.displayStartingBalance = function () {
        this.displayBalanceMessage.textContent = this.startingBalance.toString();
    };
    BankAccount.prototype.depositMoney = function (amount) {
        this.startingBalance += amount;
        this.displayStartingBalance();
        //console.log("yooy " +  this.startingBalance)
    };
    BankAccount.prototype.withdrawMoney = function (amount) {
        this.startingBalance -= amount;
        this.displayStartingBalance();
        console.log(" withdrew " + amount + " " + "i have" + this.startingBalance);
    };
    BankAccount.prototype.clearInput = function () {
        this.inputField.value = "";
    };
    BankAccount.prototype.ValidateInputValue = function () {
        var input = this.inputField.value;
        if (isNaN(+input)) {
            alert("Please Enter Valid Numbers Only");
        }
    };
    return BankAccount;
}());
var name1 = prompt("Please enter your account name!!:");
var ba = new BankAccount(name1.toUpperCase());
