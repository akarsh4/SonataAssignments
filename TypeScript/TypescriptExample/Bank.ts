class Bank{
    accNumber:number;
    accName:string;
    accBalance:number;

    constructor(anumber:number,aname:string,abalance:number){
        this.accNumber= anumber;
        this.accName=aname;
        this.accBalance=abalance;
    }
    display():void{
        console.log(this.accNumber);
        console.log(this.accName);
        console.log(this.accBalance);
    }
    deposit(aMoney:number):number{
      return  this.accBalance = aMoney+this.accBalance;
    }
    withdraw(aMONEY:number){
      return  this.accBalance = this.accBalance-aMONEY;
    }
}
let x1 = new Bank(45121125,"Akarsh",450000);
x1.deposit(450000);
x1.withdraw(30000);
x1.display();
