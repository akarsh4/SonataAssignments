export class BankExample{
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
}
let b1 = new BankExample(45121125,"Akarsh",450000);
b1.display();