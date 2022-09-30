import {Address} from "./Address"

class Student  extends Address{
    id:number;
    name:string;
    standard:number;

constructor(id:number,name:string,std:number){
super("jp nagar","bangalore","karnataka");
this.id=id;
this.name=name;
this.standard=std;
    }
    display(){
        super.display();
        console.log(this.id);
        console.log(this.name);
        console.log(this.standard);

    }
}
let stu1 = new Student(110,"Akarsh",10);
stu1.display();