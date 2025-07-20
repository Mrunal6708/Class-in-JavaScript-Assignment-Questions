//constructor function for BankAccount
function BankAccount(initialBalance){
    this.balance=initialBalance;

    //Method to deposit money
    this.deposit = function(amount){
        if (amount >0){
            this.balance +=amount;
            console.log("Deposited ₹",+amount ,"new balance:₹",+this.balance)
        } else {
            console.log("Deposit amount must be positive")
        }
    };

    //method to withdraw money
    this.withdraw =function(amount){
        if(amount >0 && amount <= this.balance){
            this.balance -=amount;
            console.log("Withdrew ₹",+amount,"New blance: ₹",+this.balance)
        }else if (amount > this.balance){
            console.log("Infufficient funds.");
        }else{
            console.log("Withdrawal amount must be positive.");
        }
    };

    //Method to disply current balnce
    this.checkBlance =function(){
        console.log("current blance: ₹",+this.balance);
    };
}

let myAccount =new BankAccount(20000);
myAccount.checkBlance(); //To display intitial blance
myAccount.deposit(1500); //To add money
myAccount.withdraw(500); //To remove money
myAccount.checkBlance(); //To displays final blaance