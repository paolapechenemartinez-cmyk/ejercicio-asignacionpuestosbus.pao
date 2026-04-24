let datosGuardados = [], usados = [];

function asignarPuestos(e) {

    e.preventDefault();

    let tabla = document.getElementById("tabla"),
        nombre = document.getElementById("nombre").value,
        puesto = document.getElementById("puesto").value;

    if (nombre == "" || puesto == "") return;

    let tr = document.createElement("tr"),
        tdNombre = document.createElement("td"),
        tdPuesto = document.createElement("td"),
        tdEstado = document.createElement("td");

    tdNombre.textContent = nombre;
    tdPuesto.textContent = puesto;

    if (usados.includes(puesto)) {
        tdEstado.textContent = "Ocupado";
        tdEstado.style.color = "red";
    } else {
        tdEstado.textContent = "Libre";
        tdEstado.style.color = "green";
        usados.push(puesto);
    }

    tr.append(tdNombre, tdPuesto, tdEstado);
    tabla.appendChild(tr);

    datosGuardados.push({
        nombre,
        puesto,
        estado: tdEstado.textContent
    });

    localStorage.setItem("asignacion", JSON.stringify(datosGuardados));

    document.getElementById("nombre").value = "";
    document.getElementById("puesto").value = "";
}