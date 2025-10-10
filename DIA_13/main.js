/* crear una aplicacion q pida el nombre de usuario y 
la contraseña a una persona si esta contraseña o nombre de usuario son incorrectos 
volver a pedir q ingrese sus datos hasta q estos sean correctos
username == "ADMIN"
password == 123456
*/
let salir=false; 

while(!(salir)){
let inicial=parseInt(prompt(`
    Bienvenido a la practica calificada hecha por Boren pardo
    Escribe un numero para seleccionar un ejercicio:
    1. ejercicio #1.
    2. ejercicio #2.
    3. salir.`))

switch(inicial){
    case 1:
        ejercicio1();
        break;
    case 2:
        ejercicio2();
        break;
    case 3:
        salir=true;
        alert("gracias por usar la practica, hasta luego.")
        break;
    default:
        alert("error, ingresa un numero valido. Por favor recarga la pagina")
        break;
}
}

function ejercicio1(){
    alert("#Bienvenido al ejercicio #1")
    let un;
    let ps;

do{
    un= prompt("Ingresa tu username");
    ps= prompt("Ingresa tu contraseña");
    
    if(un === "admin" && ps === "123456n"){ 
        alert("Acceso concedido.");
    }else {
        alert("Datos incorrectos, por favor verifique los datos e intente nuevamente");
    }
} while(!(un === "admin" && ps === "123456n"));
}



function ejercicio2(){
let n=parseInt(prompt("Ingresa el numero que deseas"));
let f=1;

for(let i=1; i <= n ; i++){
    f*=i;
}
alert("el factorial de "+n+" es igual a "+f);5
}




