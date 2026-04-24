class Universidad{
    nombreUniversidad;
    departamentos;
    constructor(nombreUniversidad,departamentos){
        this.nombreUniversidad=nombreUniversidad
        this.departamentos= []
    }
    agregar(nombre){
        this.departamentos.push(nombre);
    }
    eliminar(nombre){
        this.departamentos= this.departamentos.filter(departamentos => departamentos !== nombre)
    }
    mostrar(){
        return this.departamentos
    }
}
let Uni1=new Universidad("Cauca")
Uni1.agregar("colegio mayor")
Uni1.agregar("uni minuto")
console.log("antes de eliminar:",Uni1.mostrar())
Uni1.eliminar("uni minuto")
console.log("despues de eliminar:",Uni1.mostrar())