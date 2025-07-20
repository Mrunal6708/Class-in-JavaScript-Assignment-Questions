class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    displayInfo(){
        console.log("Name:"+this.name,"Age:"+this.age);
    }
}

const person1 =new Person("Rahul", 23);
const person2 =new Person("Rajesh", 25);
const person3 =new Person("Mayur", 24);

person1.displayInfo();
person2.displayInfo();
person3.displayInfo();
