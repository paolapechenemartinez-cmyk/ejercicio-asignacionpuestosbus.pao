class Animal{
    especie;
    sonido;
    constructor(especie,sonido){
        this.especie=especie;
        this.sonido=sonido;
    }
    ruido(){
        return (`el sonido es ${this.sonido}`);
    }
}

class Perro extends Animal{
    color;
    constructor(especie,sonido,color){
        super(especie,sonido);
        this.color=color
    }
    ruido(){
        return (`${super.ruido()} y es de color ${this.color}`)
    }
}

let perro1=new Perro("gato","miau","cafe")
console.log(perro1.ruido())