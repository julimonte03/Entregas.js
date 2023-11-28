let nombrePersona;
let articulo;
let precio;
let cantidad;
let ticket = "Articulo      Precio      Cantidad        Total  \n"
let total = 0;
let continuar;
let cuotas;
let precioCuota;
let descuento;
let descuento2;

do {
    nombrePersona = prompt("Ingresá tu nombre: ");
    if (nombrePersona === "") {
        alert("Por favor, ingresá un nombre válido.");
    }
} while (nombrePersona === "");

alert(`Hola ${nombrePersona}, bienvenido al carrito de compras!`);

do {
    articulo = prompt("¿Qué artículo vas a llevar?");
    if (articulo === "") {
        alert("Ingresá un articulo válido")
    }

    precio = +prompt("Ingresá el precio por unidad del artículo: ");
    cantidad = +prompt("Ingresá la cantidad de artículos que llevas: ");

    if (articulo !== "" || precio > 0 || cantidad > 0) {
        total += precio * cantidad;
        fila = `${articulo}     ${precio}       ${cantidad}     ${total} \n`;
        ticket += fila;
    } else {
        alert("Ingresá valores válidos para continuar");
    }

    continuar = prompt("Si deseas agregar más productos escribí 'si', de lo contrario escribí 'no'").toLowerCase();
} while (continuar === "si");


alert(ticket)

descuento = +prompt("Ingresá el porcentaje de descuento que deseas, hasta 15%. Solo ingresá el numero deseado: ");
if (descuento >= 0 && descuento <= 15){
    total = total - (total * (descuento / 100))
    descuento2 = (total * (descuento / 100))
} 
alert("Tu descuento fue de: " + descuento2);
alert("Tu total con el descuento es de: " + total);

cuotas = +prompt("¿En cuantas cuotas queres pagar? podés hasta 6 sin interés o hasta 12 con 10% de interés");
if (cuotas <= 6){
    precioCuota = total / cuotas;
    alert(`Vas a pagar ${precioCuota} por cuota`);
}
else{
    precioCuota = (total / cuotas) + total * 0.1
    alert(`Vas a pagar ${precioCuota} por cuota`);
}

alert("Gracias por comprar!")
