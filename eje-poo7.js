class Book{
    titulo;
    autor;
    añoPublicacion;
    constructor(titulo,autor,añoPublicacion){
        this.titulo=titulo;
        this.autor=autor;
        this.añoPublicacion=añoPublicacion
    }
    detalles(){
        return (`${this.titulo} ${this.autor} ${this.añoPublicacion}`)
    }
}

class Ebook extends Book{
    precioLibro;
    constructor(titulo,autor,añoPublicacion,precioLibro){
        super(titulo,autor,añoPublicacion)
        this.precioLibro=precioLibro;
    }
    detalles(){
        return (`${super.detalles()} ${this.precioLibro}`) 
    }
}

let ebook1=new Ebook("cien años de soledad","Gabriel garcia marquez", 1967, 100000)
console.log(ebook1.detalles())