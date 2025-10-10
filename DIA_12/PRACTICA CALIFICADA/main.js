
let salir=false;

while(!(salir)){
    let main=parseInt(prompt(`Bienvenido a la practica calificada #5 de Boren Pardo
        ingresa un numero para seleccionar un ejercicio:
        1. ejercicio 1
        2. ejercicio 2
        3. ejercicio 3
        4. ejercicio 4
        5. ejercicio 5
        6. salir`))
    switch (main){
        case 1:
            alert("Bienvenido al ejercicio #1")
            ejercicio1();
            break;
        case 2:
            alert("Bienvenido al ejercicio #2")
            ejercicio2();
            break;
        case 3:
            alert("Bienvenido al ejercicio #3")
            ejercicio3();
            break;
        case 4:
            alert("Bienvenido al ejercicio #4")
            ejercicio4();
            break;
        case 5:
            alert("Bienvenido al ejercicio #5")
            ejercicio5();
            break;
        case 6:
            salir=true;
            alert("Gracias por revisar mi practica, hasta luego.")
            break;
        default:
            alert("Lo siento, este numero no es valido, recarga la pagina y selecciona una opcion valida.")
            break;
    }
}



// Ejercicio 1 – Calculadora de Promedio y Rendimiento
// Pide al usuario cuatro notas (del 0 al 100).
// Calcula el promedio y muestra un mensaje según el resultado:

// “Excelente” si el promedio es mayor o igual a 90

// “Bueno” si es mayor o igual a 75

// “Regular” si es mayor o igual a 60

// “Insuficiente” en caso contrario

// Instrucciones:
// Usa if-else-if y operadores lógicos para determinar el mensaje.
// Muestra el resultado con console.log() o alert().
function ejercicio1(){
let n1=parseFloat(prompt (`Ingresa una primera nota`));
let n2=parseFloat(prompt (`Ingresa una segunda nota`));
let n3=parseFloat(prompt (`Ingresa una tercera nota`));
let n4=parseFloat(prompt (`Ingresa una cuarta nota`));
let prm= (n1+n2+n3+n4)/4;

if(prm >= 90 && prm <=100){
    alert("Felicidades, tu promedio es Excelente, total: "+prm);
} else if(prm <= 75){
    alert("Tu promedio es Bueno, total: "+prm);
} else if(prm <= 60){
    alert("Tu promedio es Regular, total: "+prm);
} else if(prm < 60 && prm >0){
    alert("Tu promedio es insuficiente, total: "+prm);
} else{
    alert("ERROR: Por favor agregue notas entre 0 y 100")
}

}

// Ejercicio 2 – Calculadora de Tarifa de Transporte
// El programa debe pedir al usuario:

// Su edad

// Si es estudiante (“sí” o “no”)

// La distancia que recorrerá (en kilómetros)

// Reglas del costo:

// Menores de 18 pagan 50% del precio base

// Estudiantes pagan 75% del precio base

// Mayores de 60 pagan 40% del precio base

// Si el viaje es mayor a 30 km, se agrega un 10% adicional al total

// Instrucciones:
// Usa condiciones anidadas (if, else if, else) y operadores lógicos para determinar el costo final.
function ejercicio2(){
    let edad=parseInt(prompt("Ingresa tu edad"));
    let estudiante= prompt("¿Éres estudiante? (sí o no)").toLowerCase();
    let distancia= parseFloat(prompt("¿Cuantos kilometros existen entre tu punto de partida y tu destino?"));
    let base=50


   if(distancia > 30){
        base += (base/100)*10;
   }

    if(edad < 18){
        base = (base/100)*50;
        alert("tu viaje cuesta "+base);
    } else if(edad >60){
        base = (base/100)*40;
        alert("tu viaje cuesta "+base);
    } else if(estudiante === "sí"||estudiante==="si"){
        base = (base/100)*75;
        alert("tu viaje cuesta "+base);
    } else {
        alert("tu viaje cuesta "+base)
    }
}

// Ejercicio 3 – Menú de Conversión de Unidades
// Muestra un menú con 4 opciones:

// Convertir de Celsius a Fahrenheit

// Convertir de Fahrenheit a Celsius

// Convertir de Metros a Kilómetros

// Convertir de Kilómetros a Metros

// El usuario debe elegir una opción y escribir el valor a convertir.
// El programa mostrará el resultado correspondiente.

// Instrucciones:
// Usa switch-case para realizar las conversiones y prompt() para las entradas.
function ejercicio3(){
    let salir=false;
    while(!(salir)){
    let main = parseInt(prompt(`CONVERSOR
            Escribe un numero para seleccionar una opción:
            1. Convertir de Celsius a Fahrenheit.
            2. Convertir de Fahrenheit a Celsius.
            3. Convertir de Metros a Kilómetros.
            4. Convertir de Kilómetros a Metros.
            5. Salir.`));
    switch(main){
            case 1:
                let valorC=parseFloat(prompt("ingresa un valor en Celsius:"));
                let convF= valorC*(9/5)+32;
                alert(`Tu valor ingresado de ${valorC}°C equivale a ${convF.toFixed(3)}°C`);
                break;
            case 2:
                let valorF=parseFloat(prompt("ingresa un valor en Fahrenheit:"));
                let convC= (valorF-32)*5/9;
                alert(`Tu valor ingresado de ${valorF}°F equivale a ${convC.toFixed(3)}°C`);
                break;
            case 3:
                let valorM=parseFloat(prompt("Ingresa un valor en metros:"));
                let convKm= valorM/1000;
                alert(`Tu valor ingresado de ${valorM}m equivale a ${convKm.toFixed(3)}km`);
                break;
            case 4:
                let valorKm=parseFloat(prompt("Ingresa un valor en Kilometros:"));
                let convM= valorKm*1000;
                alert(`Tu valor ingresado de ${valorKm}km equivale a ${convM}m`);
                break;
            case 5:
                salir=true;
                alert("Gracias por usar el conversor, hasta luego")
                break;
            default:
                alert("Seleccione una opción valida.");
    }
}
}
// Ejercicio 4 – Sistema de Descuentos en una Tienda
// El usuario debe ingresar:

// El precio total de su compra

// Si tiene tarjeta de cliente frecuente (“sí” o “no”)

// Reglas:

// Si el total es mayor a 500, aplica un 10% de descuento

// Si además tiene tarjeta, aplica un 5% adicional

// Si el total es menor o igual a 100, aplica un recargo del 5%

// El programa debe mostrar el precio final y un mensaje indicando qué descuento se aplicó.

// Instrucciones:
// Utiliza operadores de asignación y condiciones anidadas para determinar el total.
function ejercicio4(){
    let precio=parseFloat(prompt("Ingrese el precio total de su compra:"));
    let trj=prompt("¿Tiene usted tarjeta de cliente frecuente? si o no.").toLowerCase();
    let add=(precio/100)*5;
    let msjAdd="";
    

    if (precio >500){
        precio-=((precio/100)*10);
        msjAdd=", tienes descuento del 10% por compra mayor a 500 USD"
    }
    
    if (trj=="si"||trj=="sí"){
        precio+=add;
        msjAdd+=", tienes un descuento adicional del 5% por cliente frecuente"
    }
    
    if(precio<=100){
        precio+=add;
        msjAdd+=(" tuvo un cargo adicional de 5% por compra menor a 100 USD");
    }
    alert(`Tu compra tiene un precio final de $${precio.toFixed(2)} USD${msjAdd}.`);
}

// Ejercicio 5 – Calculadora de Edad y Etapa de Vida
// Pide al usuario:

// Su año de nacimiento

// El año actual

// Calcula su edad y muestra un mensaje según el rango:

// Menor de edad: menos de 18 años

// Adulto joven: entre 18 y 30 años

// Adulto: entre 31 y 59 años

// Adulto mayor: 60 años o más

// BONUS:
// Pregunta además si ya cumplió años este año (“sí” o “no”) y ajusta la edad si es necesario.

// Instrucciones:
// Usa operadores de comparación, if-else-if, y parseInt() para convertir los datos numéricos.

function ejercicio5(){
let añoN=parseInt(prompt("Ingresa tu año de nacimiento"));
let añoA=parseInt(prompt("Ingresa el año actual"));
let edad=añoA-añoN;

if(edad >= 0 && edad < 18){
    alert(`Tienes ${edad} años. Eres menor de edad.`);
} else if (edad >=18 && edad < 30){
    alert(`Tienes ${edad} años. Eres adulto joven.`);
} else if (edad >= 30 && edad < 60){
    alert(`Tienes ${edad} años. Eres adulto.`);
} else if (edad >= 60 && edad <200){
    alert(`Tienes ${edad} años. Eres adulto mayor`)
} else{
    alert(`una de dos, o acabas de salir de un sarcófago, o vienes a apostar en juegos deportivos.`)
}


}