class Employee{
    nombre;
    salario;
    constructor(nombre,salario){
        this.nombre=nombre;
        this.salario=salario;
    }
    anual(){
        return this.salario * 12
    }
}

class Manager extends Employee{
    departamento;
    bonificacion;
    constructor(nombre,salario,departamento,bonificacion){
        super(nombre,salario)
        this.departamento=departamento
        this.bonificacion=bonificacion
    }
    anual(){
        return super.anual() + this.bonificacion
    }
}

let manager1=new Manager("carlos",1000000,"finanzas",100000)
console.log("salario anual:",manager1.anual())