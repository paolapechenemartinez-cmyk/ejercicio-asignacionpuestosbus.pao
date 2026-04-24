class Shape {
    area() {}
}

class Circulo extends Shape {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    area() {
        return Math.PI * this.radio * this.radio;
    }
}

class Triangulo extends Shape {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    area() {
        return (this.base * this.altura) / 2;
    }
}

let c = new Circulo(8);
console.log("Área círculo:", c.area());

let t = new Triangulo(10, 5);
console.log("Área triángulo:", t.area());