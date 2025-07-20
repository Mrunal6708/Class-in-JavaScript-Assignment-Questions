class Shape{
    constructor(name){
        this.name=name;
    }

    area(){
        throw new Error(this.name+": area() not implemented");
    }

    perimeter(){
        throw new Error(this.name+": perimerer() not implemented");
    }
}

class Circle extends Shape{
    constructor(radius){
        super("Circle");
        this.radius=radius;
    }

    area(){
        return Math.PI*this.radius** 2;
    }

    perimeter(){
        return 2* Math.PI*this.radius;
    }
}


class Rectangle extends Shape{
    constructor(width, height){
        super("Rectangle");
        this.width=width;
        this.height=height;
    }
    area(){
        return this.width*this.height;
    }

    perimeter(){
        return 2*(this.width+this.height)
    }
}

  class RightTriangle extends Shape {
        constructor(base, height) {
            super("RightTringale")
            this.base=base;
            this.height=height;
        }

        area(){
            return 0.5*this.base * this.height;
        }

        perimeter(){
            const hypotenuse=Math.sqrt(this.base ** 2 + this.height**2);
            return this.base + this.height+hypotenuse;
        }
    }

    const shapes=[
        new Circle(5),
        new Rectangle(8,10),
        new RightTriangle(6,5)
    ];

    shapes.forEach(shape =>{
        console.log(shape.name);
        console.log("Area:"+ shape.area().toFixed(2));
        console.log("Perimeter:"+shape.perimeter().toFixed(2)+"\n");
    });