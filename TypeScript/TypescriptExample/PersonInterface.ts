interface PersonInterface{
    first:string;
    last:string;
    getFullName():string;
}

class Personimplement implements PersonInterface{
    first: string;
    last:string;
    getFullName():string{
        return this.first+this.first;
    }
}
let P1 = new Personimplement();
P1.first="Akarsh";
P1.last="Gagan";
P1.getFullName();
console.log(P1);