let datosGuardados = [];

function asignarPuestos() {

    let tabla = document.getElementById("tabla");
    tabla.innerHTML = "";

    let usados = [];

    for (let i = 1; i <= 12; i++) {

        let nombre = prompt("Ingrese pasajero:");
        let puesto = prompt("¿Qué asiento (1-12) para " + nombre + "?");

        let tr = document.createElement("tr");

        let tdNombre = document.createElement("td"); 
        tdNombre.textContent = nombre;

        let tdPuesto = document.createElement("td");
        tdPuesto.textContent = puesto;

        let tdEstado = document.createElement("td");

        if (usados[0] == puesto || usados[1] == puesto || usados[2] == puesto || usados[3] == puesto) {
            tdEstado.textContent = "Ocupado (rojo)";
        } else {
            tdEstado.textContent = "Libre (verde)";
            usados.push(puesto);
        }

        datosGuardados.push({
            nombre: nombre,
            puesto: puesto,
            estado: tdEstado.textContent
        });

        tr.appendChild(tdNombre);
        tr.appendChild(tdPuesto);
        tr.appendChild(tdEstado);

        tabla.appendChild(tr);
    }

    localStorage.setItem("asignacion", JSON.stringify(datosGuardados));
}