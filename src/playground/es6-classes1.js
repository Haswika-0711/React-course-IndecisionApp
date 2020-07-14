class Person{
    constructor(name= 'Anonymous',age=0){
        this.name=name;
        this.age=age;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}

class Traveller extends Person{
    constructor(name,age,location){
        super(name,age);
        this.location=location;
    }
    // hasLocation(){
    //     return !!this.location;
    // }
    getDescription(){
        let description=super.getDescription();
        if(this.location){
           description+= ` I am  from ${this.location}`; 
        }
        return description;
    }
}

const example=new Traveller('Haswika',21,'Karimnagar');
console.log(example.getDescription()) ;

const example1=new Traveller();
console.log(example1.getDescription()) ;