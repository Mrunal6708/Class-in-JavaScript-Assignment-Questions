class calculator{
    constructor(value1, value2){
        this.value1=value1;
        this.value2=value2;
    }

    add(){
        return this.value1+this.value2;
    }

    subtract(){
        return this.value1-this.value2;
    }

    multiply(){
        return this.value1*this.value2;
    }

    divide(){
        if(this.value2 ===0){
            return "Error: Division by zero";
        }
        return this.value1/this.value2;
    }

    showOperations(){
        console.log("Addition:"+this.add());
        console.log("subtraction:"+this.subtract());
        console.log("Multiplication:"+this.multiply());
        console.log("Division:"+this.divide());
    }
}

//Ex
const calc = new calculator(100,10);
const calc2 = new calculator(7,0);
calc.showOperations();
calc2.showOperations();