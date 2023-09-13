function BankAccount(accountNumber,name,type,balance,isActive){
    this.BankAccount = accountNumber;
    this.name = name;
    this.balance = balance;
    this.type = type;
    this.isActive = isActive;


    this.deposit = function(amount){
       this.balance += amount;
       console.log(`Your updated balance  is : ${this.balance}rs`);
    }

    this.widhdrawl = function(amount){
       if(this.balance >= amount){
           this.balance -= amount
       console.log(`Your updated balance is : ${this.balance}rs`);
       }
       else{
       console.log("Insufficent balance")
       }
    }

    this.checkbalance = function(){
       console.log(`Your current balance is :${this.balance}`)
    }



    this.Active = function(){
     if (this.balance > 0){
        
        console.log("Your account is Active")
     }
     else{
        console.log("Your account is not Active")
     }
    }

}


let account1 = new BankAccount(78965522736,"Tommy","Saving",3000,false);
let account2 = new BankAccount(78965522736,"John","Saving",5000,true);

account1.deposit(2000);
account2.widhdrawl(5000);
account2.checkbalance();
account1.checkbalance();
account2.Active();