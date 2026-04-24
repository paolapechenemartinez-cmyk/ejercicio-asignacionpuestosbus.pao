class Rectangulo{
    ancho;
    alto;
    constructor(ancho,alto){
        this.ancho=ancho;
        this.alto=alto;
    }
    Area(){
        console.log (this.ancho * this.alto)
    }
    Perimetro(){
        console.log (2 *(this.ancho + this.alto))
    }
}

let datos=new Rectangulo(5,2)
datos.Area()

let datos2=new Rectangulo(5,2)
datos2.Perimetro()