import {Dept} from "./Dept"

class Employee extends Dept{
    id:number=456;
    name:string="Akarsh";
    sal:number=31000;

    display(){
        super.display();
        console.log(this.id);
        console.log(this.name);
        console.log(this.sal);

    }
}

let emp1 = new Employee();
emp1.display();