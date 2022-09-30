export class Address{
    streetname:string;
    city:string;
    state:string;
constructor(street:string,city:string,state:string){
    this.streetname=street;
    this.city= city;
    this.state=state;
}
    display(){
        console.log(this.streetname);
        console.log(this.city);
        console.log(this.state);
    }
}