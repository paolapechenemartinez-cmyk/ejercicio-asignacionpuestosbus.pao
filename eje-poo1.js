class Persona{
    nombre;
    edad;
    pais;
    constructor(nombre,edad,pais){
        this.nombre=nombre;
        this.edad=edad;
        this.pais=pais;
    }
    detalles(){
        console.log (`hola me llamo ${this.nombre} tengo ${this.edad} y vivo en ${this.pais}`)
    }
}

let persona1=new Persona("angela", 18, "colombia");
persona1.detalles()

let persona2=new Persona("helen", 20, "suiza");
persona2.detalles()