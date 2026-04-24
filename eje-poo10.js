class Product{
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
    calcular(cantidad) {
        return this.precio * cantidad;
    }
}

class PersonalCareProduct extends Product{
    constructor(id, nombre, precio, garantia){
        super(id, nombre, precio);
        this.garantia = garantia;
    }
    calcular(cantidad) {
        return `${super.calcular(cantidad)} y la garantía es de ${this.garantia} meses`;
    }
}

let producto1 = new PersonalCareProduct(12345, "computador", 10000, 12);
console.log(producto1.calcular(2));