/* ciber .geek

publico hombres +18 <=35

consumo minimo 10 USD

5 USD /h

permitir ver el saldo y el tiempo de juego disponible
*/

let edad=32;
let hombre=true;
let sd= 54;

edad>18 && edad<=35 && hombre==true
?console.log("¡Bienvenido a .Geek!")
:console.log("Lo sentimos, no puedes entrar");

hombre==false?console.log("vaya a hacer el almuerzo"):console.log();

sd<10?console.log("Actualmente cuentas con "+sd+" USD, recarga más dinero si quieres jugar.")
:console.log("actualmente cuentas con "+sd+" USD!! puedes jugar "+sd/5+" HORAS.");

