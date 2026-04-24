class Vehiculo{
    marca;
    modelo;
    año;
    constructor(marca,modelo,año){
        this.marca=marca
        this.modelo=modelo
        this.año=año
    }
    detalles(){
        return (` ${this.marca}  ${this.modelo}  ${this.año}`)
    }
}

class Coche extends Vehiculo{
    numeroPuertas;
    constructor(marca,modelo,año,numeroPuertas){
        super(marca,modelo,año)
        this.numeroPuertas=numeroPuertas
    }
    puertas(){
        return (`${super.detalles()} y tiene ${this.numeroPuertas} puertas`)
    }
}

let Vehiculo1=new Vehiculo("tesla", "Cybertruck", 2026)
console.log(Vehiculo1.detalles())

let coche1=new Coche("tesla", "Cybertruck", 2026, 4)
console.log(coche1.puertas())