function  Person(n,a){
    this.name =n;
    this.age =a;
} 

Person.prototype.displyInfo=function(){
    console.log("Name:",this.name,"Age:",this.age);
}

const p1 =new Person("raja",22)
console.log(p1);

const p2 =new Person("ram",24)
console.log(p2);
