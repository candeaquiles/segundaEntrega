//ENTIDADES. Creo el objeto, en este caso sera el cliente, para poder usar sus datos luego
class Clientes {
    constructor(nombre, apellido, year, phone, date, date2, noches, select, cuotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.year = year;
        this.phone = phone;
        this.date = date;
        this.date2 = date2;
        this.noches = noches;
        this.select = select;
        this.cuotas = cuotas;
    }
}
//VARIABLES. Declaro toda las variables, para luego obtener su valor



let clientes = [];
const precio = 1350
const iva = 1.21
let formasPago = document.querySelector("#formasPago").value

function validandoDatos(e) {

    e.preventDefault();


    let nombre = document.querySelector("#nombre").value
    let apellido = document.querySelector("#apellido").value
    let year = document.querySelector("#year").value
    let phone = document.querySelector("#phone").value
    let date = document.querySelector("#date").value
    let date2 = document.querySelector("#date2").value
    let noches = document.getElementById("noches").value
    //let cuotas = document.getElementById("cuotas").value

    let pagoEfectivo = precio * noches;

    clientes.push(new Clientes(nombre, apellido, year, phone, date, date2, noches, pagoEfectivo))




    let p1 = document.createElement("p")
    p1.textContent = `NOMBRE: ${nombre}, APELLIDO: ${apellido}, EDAD: ${year} AÑOS, Nº DE CONTACTO: ${phone}`
    p1.setAttribute = ("class", "primerParrafo")
    let p2 = document.createElement("p")
    p2.textContent = `FECHA DE INGRESO: ${date}, FECHA DE SALIDA: ${date2}, TOTAL DE NOCHES: ${noches}, TOTAL: ${pagoEfectivo}`
    p2.setAttribute = ("class", "segundoParrafo")

    let div1 = document.createElement("div")
    div1.setAttribute = ("class", "efectivo")

    div1.appendChild(p1)
    div1.appendChild(p2)

    let impreso = document.getElementById("pruebaRecargo")
    impreso.appendChild(div1)

    localStorage.setItem("clientes", JSON.stringify(clientes))



}

function recargo() {

    let nombre = document.querySelector("#nombre").value
    let apellido = document.querySelector("#apellido").value
    let year = document.querySelector("#year").value
    let phone = document.querySelector("#phone").value
    let date = document.querySelector("#date").value
    let date2 = document.querySelector("#date2").value
    let noches = document.getElementById("noches").value
    let cuotas = document.getElementById("cuotas").value

    clientes.push(new Clientes(nombre, apellido, year, phone, date, date2, noches, cuotas))


    const uno = precio * iva;
    const dos = uno * noches;
    const tres = dos / cuotas;

    let p3 = document.createElement("p")
    p3.textContent = `NOMBRE: ${nombre}, APELLIDO: ${apellido}, EDAD: ${year} AÑOS, Nº DE CONTACTO: ${phone}`
    let p4 = document.createElement("p")
    p4.textContent = `FECHA DE INGRESO: ${date}, FECHA DE SALIDA: ${date2}, CANTIDAD DE NOCHES: ${noches}, A PAGAR ${cuotas} CUOTAS DE ${tres}`


    let div2 = document.createElement("div")
    div2.appendChild(p3)
    div2.appendChild(p4)

    let imprimir = document.querySelector("#pruebaRecargo")
    imprimir.appendChild(div2)

    localStorage.setItem("clientes", JSON.stringify(clientes))



}

function evento(){
    let cuotas = document.getElementById("cuotas").value
}

if (formasPago == efectivo) {
    let btn = document.querySelector("#btn")
    btn.addEventListener("click", validandoDatos)
    formasPago.addEventListener("blur", evento)

} else {
    let btn = document.querySelector("#btn")
    btn.addEventListener("click", recargo)
}