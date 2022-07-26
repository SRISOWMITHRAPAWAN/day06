class Uber{
    constructor(source,destination,fare){
    this.source=source;
    this.destination=destination;
    this.fare=fare;
}
getname(){
    return "your fare" + this.fare;
}
}
var r1=new Uber("tambaram","anna nagar","2000");
console.log(r1);
