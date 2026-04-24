let puestoseleccionado = null;
// cargar datos
let datos = localStorage.getItem("datos");

if (datos) {
    datos = JSON.parse(datos);
} else {
    datos = [];
}
// si no hay datos reales dentro del array, se crean
if (!datos[0]) {

    datos = [];

    for (let i = 1; i <= 12; i++) {
        datos.push({
            num: i,
            estado: "libre",
            nombre: ""
        });
    }

    localStorage.setItem("datos", JSON.stringify(datos));
}
// contenedor
let c = document.getElementById("bus");
// crear botones de asientos
for (let i = 1; i <= 12; i++) {
    let b = document.createElement("button");
    b.id = "a" + i;

    let asiento = datos[i - 1];

    if (asiento.estado == "libre") {
        b.style.background = "green";
        b.textContent = i;
        b.onclick = () => puestoseleccionado = i;
    } else {
        b.style.background = "red";
        b.textContent = asiento.nombre;
        b.disabled = true;
    }

    c.appendChild(b);
}
// función aceptar
function Aceptar() {
    let n = document.getElementById("nom").value;

    if (!puestoseleccionado || n == "") return;

    datos[puestoseleccionado - 1] = {
        num: puestoseleccionado,
        estado: "ocupado",
        nombre: n
    };

    localStorage.setItem("datos", JSON.stringify(datos));

    location.reload();
}