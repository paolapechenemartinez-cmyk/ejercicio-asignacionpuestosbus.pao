class BankAccount {
    constructor(numeroCuenta, nombreTitular, saldo) {
        this.numeroCuenta = numeroCuenta;
        this.nombreTitular = nombreTitular;
        this.saldo = saldo;
    }
    depositar(cantidad) {
        if (cantidad <= 0) {
            console.log("deposito incorrecto");
            return;
        }
        this.saldo = this.saldo + cantidad;
    }
    retirar(cantidad) {
        if (cantidad > this.saldo) {
            console.log("saldo insuficiente");
            return;
        }
        this.saldo = this.saldo - cantidad;
    }
    transferir(cantidad, cuentaDestino) {
        if (cantidad > this.saldo) {
            console.log("saldo insuficiente");
            return;
        }
        this.saldo = this.saldo - cantidad;
        cuentaDestino.saldo = cuentaDestino.saldo + cantidad;
    }
}

let cuenta1 = new BankAccount(12345, "pao", 5000);
cuenta1.depositar(2000);
console.log("saldo cuenta1:", cuenta1.saldo);