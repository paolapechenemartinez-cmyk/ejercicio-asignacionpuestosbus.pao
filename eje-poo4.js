class AccountBanck{
    NumeroCuenta;
    saldo;
    constructor(NumeroCuenta,saldo){
        this.NumeroCuenta=NumeroCuenta;
        this.saldo=saldo;
    }
    depositar(cantidad){
        if(cantidad < 0){
            console.log("deposito incorrecto")
            return;
        }

        this.saldo=this.saldo + cantidad
    }
    retirar(cantidad){
        if(cantidad > this.saldo){
            console.log("saldo insuficiente")
            return;
        }

        this.saldo=this.saldo - cantidad
    }
}

let cuenta1=new AccountBanck(12345,5000)
cuenta1.depositar(30000)
console.log("saldo cuenta1:", cuenta1.saldo)

let cuenta2=new AccountBanck(32322,50000)
cuenta2.retirar(25000)
console.log("saldo cuenta2:", cuenta2.saldo)