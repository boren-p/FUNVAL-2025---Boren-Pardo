let salir=false;

while(!(salir)){
   let main= parseInt(prompt(`Bienvenido a la practica calificada #6 de Boren Pardo
      Ingresa un numero para seleccionar un ejercicio:
      1. Ejercicio 1.
      2. Ejercicio 2.
      3. Ejercicio 3.
      ...
      40. Ejercicio 40.
      41. Salir.
      
      no me caben todas las opciones en esta ventana, espero que hayas entendido la dinamica.`));

   switch (main){
      case 1:
          ejercicio1();
         break;
      case 2:
          ejercicio2();
         break;
      case 3:
          ejercicio3();
         break;
      case 4:
          ejercicio4();
         break;
      case 5:
          ejercicio5();
         break
      case 6:
          ejercicio6();
         break;
      case 7:
          ejercicio7();
         break;
      case 8:
          ejercicio8();
         break;
      case 9:
          ejercicio9();
         break;
      case 10:
          ejercicio10();
         break;
      case 11:
          ejercicio11();
         break;
      case 12:
          ejercicio12();
         break;
      case 13:
          ejercicio13();
         break;
      case 14:
          ejercicio14();
         break;
      case 15:
          ejercicio15();
         break;
      case 16:
          ejercicio16();
         break;
      case 17:
          ejercicio17();
         break;
      case 18:
          ejercicio18();
         break;
      case 19:
          ejercicio19();
         break;
      case 20:
          ejercicio20();
         break;
      case 21:
          ejercicio21();
         break;
      case 22:
          ejercicio22();
         break;
      case 23:
          ejercicio23();
         break;
      case 24:
          ejercicio24();
         break;
      case 25:
          ejercicio25();
         break
      case 26:
          ejercicio26();
         break;
      case 27:
          ejercicio27();
         break;
      case 28:
          ejercicio28();
         break;
      case 29:
          ejercicio29();
         break;
      case 30:
          ejercicio30();
         break;
      case 31:
          ejercicio31();
         break;
      case 32:
          ejercicio32();
         break;
      case 33:
          ejercicio33();
         break;
      case 34:
          ejercicio34();
         break;
      case 35:
          ejercicio35();
         break;
      case 36:
          ejercicio36();
         break;
      case 37:
          ejercicio37();
         break;
      case 38:
          ejercicio38();
         break;
      case 39:
          ejercicio39();
         break;
      case 40:
          ejercicio40();
         break;
      case 41:
         salir=true;
         alert("Gracias por visitar esta practica, hasta luego.");
         break;
      default:
         alert("ERROR: Seleccione una opción valida");
         break;
   }
}


// =======================================================
// BUCLE FOR (EJERCICIOS 1 - 15)
// =======================================================

/*
1. Muestra los números del 1 al 10 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇
function ejercicio1(){
   let fr=``;
   
   for (let i= 1; i <= 10; i++) {
      fr+=`${i}, `;
   }
   alert(fr);
}
/*
2. Muestra los números del 10 al 1 en orden descendente usando un bucle for.
*/
// RESPUESTA AQUÍ 👇
function ejercicio2(){
   let fr=``;

   for (let i = 10; i >= 1; i--) {
      fr+=`${i}, `;
   }
   alert(fr);
}
/*
3. Muestra solo los números pares del 1 al 20 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇
function ejercicio3(){
   let fr=``;

   for (let i = 2; i <= 20; i+=2){
      fr+=`${i}, `;
   }
   alert(fr);
}
/*
4. Muestra solo los números impares del 1 al 20 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇
function ejercicio4(){
   let fr=``;

   for (let i = 1; i <= 20; i+=2){
      fr+=`${i}, `;
   }
   alert(fr);
}
/*
5. Muestra la tabla de multiplicar del 5 (del 1 al 10).
*/
// RESPUESTA AQUÍ 👇
function ejercicio5(){
   let fr=``;

   for (let i = 5; i <= 50; i+=5){
      fr+=`${i}, `;
   }
   alert(fr);
}
/*
6. Calcula la suma de los números del 1 al 100 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇
function ejercicio6(){
   let cont=0;

   for (let i = 1; i <= 100; i++){
      cont+=i;
   }
   alert(cont);
}
/*
7. Muestra los múltiplos de 3 entre 1 y 30 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇
function ejercicio7(){
   let fr=``;
   let cont;

   for (let i = 1; i <= 10; i++){
      cont=i*3;
      fr+=`${cont}, `;
   }
   alert(fr);
}
/*
8. Calcula el factorial de un número (por ejemplo 5) usando for.
*/
// RESPUESTA AQUÍ 👇
function ejercicio8(){
   let n=parseInt(prompt("ingresa un numero"))
   let cont=1;
   
   for (let i= n; i >= 1; i--) {
      cont*= i;
   }
   alert(cont);
}
/*
9. Muestra los primeros 10 números cuadrados (1², 2², 3²…).
*/
// RESPUESTA AQUÍ 👇
function ejercicio9(){
   let fr=``;
   
   for (let i= 1; i <= 10; i++) {
      fr+=`${i}², `;
   }
   alert(fr);
}
/*
10. Muestra los números del 1 al 50 y muestra "Múltiplo de 10" cuando corresponda.
*/
// RESPUESTA AQUÍ 👇
function ejercicio10(){
   let fr=``;

   for (let i = 1; i <= 50; i++){
      if (i % 10 === 0) {
      fr += `${i} (Múltiplo de 10), `;
   } else {
      fr += `${i}, `;
   }
   }
   alert(fr);
}
/*
11. Calcula la suma de los números pares entre 1 y 50.
*/
// RESPUESTA AQUÍ 👇
function ejercicio11(){
   let fr=``;
   let cont=0;

   for (let i = 2; i <= 50; i+=2){
      cont+=i;
   }
   alert(cont);
}
/*
12. Calcula la suma de los números impares entre 1 y 50.
*/
// RESPUESTA AQUÍ 👇
function ejercicio12(){
   let fr=``;
   let cont=0;

   for (let i = 1; i <= 50; i+=2){
      cont+=i;
   }
   alert(cont);
}
/*
13. Muestra los números del 1 al 20 e indica si cada uno es "par" o "impar".
*/
// RESPUESTA AQUÍ 👇
function ejercicio13(){
   let fr=``;

   for (let i = 1; i <= 20; i++){
      if (i % 2 === 0) {
      fr += `${i} (par), `;
   } else {
      fr += `${i} (impar),`;
   }
   }
   alert(fr);
}
/*
14. Muestra los números del 1 al 30 e indica si son múltiplos de 3.
*/
// RESPUESTA AQUÍ 👇
function ejercicio14(){
   let fr=``;

   for (let i = 1; i <= 30; i++){
      if (i % 3 === 0) {
      fr += `${i} (Múltiplo de 3), `;
   } else {
      fr += `${i}, `;
   }
   }
   alert(fr);
}
/*
15. Muestra un conteo regresivo desde 20 hasta 0.
*/
// RESPUESTA AQUÍ 👇
function ejercicio15(){
   let fr=``;

   for (let i = 20; i >= 0; i--) {
      fr+=`${i}, `;
   }
   alert(fr);
}
// =======================================================
// BUCLE WHILE (EJERCICIOS 16 - 25)
// =======================================================

/*
16. Muestra los números del 1 al 10 usando un bucle while.
*/
// RESPUESTA AQUÍ 👇
function ejercicio16(){
   let n =1;
   let fr=``;
   
   while (n<=10){
      fr+=`${n}, `
      n++
   }
   alert(fr);
}
/*
17. Muestra los números pares del 2 al 20 usando while.
*/
// RESPUESTA AQUÍ 👇
function ejercicio17(){
   let n =1;
   let fr=``;
   
   while (n<=20){
      if(n%2===0){
         fr+=`${n}, `
         n++
      } else{
         n++
      }
      
   }
   alert(fr);
}
/*
18. Muestra los números del 10 al 1 usando while.
*/
// RESPUESTA AQUÍ 👇
function ejercicio18(){
   let n =10;
   let fr=``;
   
   while (n>=1){
      fr+=`${n}, `
      n--
   }
   alert(fr);
}
/*
19. Muestra los números del 1 al 30, pero solo los múltiplos de 5.
*/
// RESPUESTA AQUÍ 👇
function ejercicio17(){
   let n =1;
   let fr=``;
   
   while (n<=30){
      if(n%5===0){
         fr+=`${n}, `
         n++
      } else{
         n++
      }
      
   }
   alert(fr);
}
/*
20. Calcula la suma de los números del 1 al 20 usando while.
*/
// RESPUESTA AQUÍ 👇
function ejercicio20(){
   let n =1;
   let cont=0;
   
   while (n<=20){
      cont+=n;
      n++
   }
   alert(cont);
}
/*
21. Muestra los números del 1 al 15 e indica si son pares o impares usando while.
*/
// RESPUESTA AQUÍ 👇
function ejercicio21(){
   let n =1;
   let fr=``;
   
   while (n<=15){
      if(n%2===0){
         fr+=`${n} es par, `
         n++
      } else{
         fr+=`${n} es impar, `
         n++
      }
      
   }
   alert(fr);
}
/*
22. Muestra la tabla de multiplicar del número 7 usando while.
*/
// RESPUESTA AQUÍ 👇
function ejercicio22(){
   let n =1;
   let fr=``;
   
   while (n<=70){
      if(n%7===0){
         fr+=`${n}, `
         n++
      } else{
         n++
      }
      
   }
   alert(fr);
}
/*
23. Muestra los múltiplos de 4 entre 1 y 40 usando while.
*/
// RESPUESTA AQUÍ 👇
function ejercicio23(){
   let n =1;
   let fr=``;
   
   while (n<=40){
      if(n%4===0){
         fr+=`${n}, `
         n++
      } else{
         n++
      }
      
   }
   alert(fr);
}
/*
24. Calcula el factorial de un número (por ejemplo 6) usando while.
*/
// RESPUESTA AQUÍ 👇
function ejercicio24(){
   let n =parseInt(prompt("escribe un numero"));
   let cont=1;
   
   while (n>=1){
      cont*=n;
      n--
   }
   alert(cont);
}
/*
25. Muestra un conteo regresivo desde 15 hasta 0 usando while.
*/
// RESPUESTA AQUÍ 👇
function ejercicio25(){
   let n =15;
   let fr=``;
   
   while (n>=0){
      fr+=`${n}, `
      n--
   }
   alert(fr);
}
// =======================================================
// BUCLE DO...WHILE (EJERCICIOS 26 - 30)
// =======================================================

/*
26. Muestra los números del 1 al 10 usando do...while.
*/
// RESPUESTA AQUÍ 👇
function ejercicio26(){
   let n =1;
   let fr=``;
   
   do{
      fr+=`${n}, `
      n++
   } while (n<=10)
   alert(fr);
}
/*
27. Pide un número y muestra su tabla de multiplicar usando do...while.
*/
// RESPUESTA AQUÍ 👇
function ejercicio27(){
   let n =parseInt(prompt("Ingresa un numero"));
   let fr=``;
   let i=1;

   do{
      fr+=`${n*i}, `
      i++
   } while (i<=10)
   alert(fr);
}
/*
28. Muestra los números del 10 al 1 usando do...while.
*/
// RESPUESTA AQUÍ 👇
function ejercicio28(){
   let n =10;
   let fr=``;
   
   do{
      fr+=`${n}, `
      n--
   }while (n>=1)
   alert(fr);
}
/*
29. Muestra los números del 1 al 30 y muestra un mensaje cuando sea múltiplo de 6.
*/
// RESPUESTA AQUÍ 👇
function ejercicio29(){
   let n=1
   fr=``;

   do{
      if(n%3===0){
         fr+=`${n} multiplo de 3, `
         n++
      } else{
         fr+=`${n}, `
         n++
      }
   } while(n<=30)
      alert(fr);
}
/*
30. Calcula la suma de los números del 1 al 50 usando do...while.
*/
// RESPUESTA AQUÍ 👇
function ejercicio30(){
   let n=1;
   cont=0;

   do{
      cont+=n;
      n++
   }while(n<=50);
   alert(cont);
}
// =======================================================
// COMBINACIÓN DE TEMAS (EJERCICIOS 31 - 40)
// =======================================================

/*
31. Pide un número y muestra todos los números desde 1 hasta ese número.
   Si es múltiplo de 3, muestra "Fizz", si es múltiplo de 5, muestra "Buzz".
*/
// RESPUESTA AQUÍ 👇
function ejercicio31(){
   let numero = parseInt(prompt("Ingresa un numero (de preferencia mayor al 10)"));
   let fr=``;

   for (let i = 1; i <= numero; i++) {
      if (i % 3 === 0){
         fr+=`${i} Fizz, `;
      } else if (i % 5 === 0){
         fr+=`${i} Buzz, `;
      } else {
         fr+=`${i}, `;
      }
      
   }
   alert(fr);
}
/*
32. Pide al usuario un número y calcula su factorial usando un bucle.
*/
// RESPUESTA AQUÍ 👇
function ejercicio32(){
   let n =parseInt(prompt("escribe un numero"));
   let cont=1;
   
   while (n>=1){
      cont*=n;
      n--
   }
   alert(cont);
}
/*
33. Pide nombre de usuario y contraseña.
   Si usuario es "Kevin" o "Belen" y contraseña es "1234",
   muestra "Acceso autorizado", de lo contrario "Denegado".
*/
// RESPUESTA AQUÍ 👇
function ejercicio33(){
   let nombre=prompt("Ingresa tu nombre").toLowerCase();
   let contra=prompt("Ingresa tu contraseña");
   let mensaje="";

   if((nombre ==`kevin`||nombre==`belen`)||contra==1234){
      mensaje ="ACCESO AUTORIZADO"
      alert(mensaje);
   } else{
      mensaje ="ACCESO DENEGADO alejate de mi satanas."
      alert(mensaje);
   }
}
/*
34. Pide un número y muestra todos los pares hasta ese número.
   Luego muestra la cantidad total de pares encontrados.
*/
// RESPUESTA AQUÍ 👇
function ejercicio34(){
   let n=parseInt(prompt("Escribe un numero(de preferencia mayor a 10)"));
   let cont=0
   let fr=``;
   for (let i = 0; i < n; i+=2) {
      fr+=`${i}, `
      cont++
   }
   alert(`${fr} numero de pares: ${cont}.`)
}
/*
35. Calcula la suma de todos los múltiplos de 3 y 5 entre 1 y 100.
*/
// RESPUESTA AQUÍ 👇
function ejercicio35(){
   let cont3 =0;
   let cont5 =0;

   for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0){
         cont3+=i;
      } else if (i % 5 === 0){
         cont5+=i;
      }
   }
   alert(cont3+cont5);
}
/*
36. Pide un número y muestra si es primo o no, usando un bucle para verificar divisores.
*/
// RESPUESTA AQUÍ 👇
function ejercicio36(){
   let nmr = parseInt(prompt("ingresa un numero"));
   let mensaje;
if (nmr<2){
         mensaje= "ERROR: escriba bien."
         alert(mensaje);}
   for (let i = 2; i < nmr; i++) {
      if(nmr % i === 0){
         mensaje= "NO ES PRIMO";
         alert(mensaje);
         break;
      }else{
         mensaje= "ES PRIMO";
         alert(mensaje);
         break;
      }
   }
}
/*
37. Simula un inicio de sesión:
   Tienes 3 intentos para ingresar correctamente usuario="admin" y contraseña="1234".
   Si falla los 3 intentos, muestra "Acceso bloqueado".
*/
// RESPUESTA AQUÍ 👇
function ejercicio37(){
   let int= 0;

   for (let i = 0; i <= int; i++) {
      let admin = prompt("Ingresa tu nombre de usuario, tienes tres intentos");
      let contr = parseInt(prompt("Ingresa tu contraseña"));

      int++
      if(admin === "admin" && contr === 1234){
         alert("Acceso concedido, Bienvenido");
         break;
      } else if (int==3){
         alert("ACCESO BLOQUEADO: se te agotaron las opciones")
         break; 
      } else{
         alert("Datos incorrectos, por favor intente nuevamente");
      }
   }
}
/*
38. Pide 5 números y calcula su suma total y promedio.
*/
// RESPUESTA AQUÍ 👇
function ejercicio38(){
   let n1=parseFloat(prompt("ingresa un numero")) ||0;
   let n2=parseFloat(prompt("ingresa un numero")) ||0;
   let n3=parseFloat(prompt("ingresa un numero")) ||0;
   let n4=parseFloat(prompt("ingresa un numero")) ||0;
   let n5=parseFloat(prompt("ingresa un numero")) ||0;

   let suma= n1+n2+n3+n4+n5;
   let prom= suma/5;

   alert (`La suma de tus numeros es ${suma} y tu promedio es ${prom}`);
}
/*
39. Muestra los números del 1 al 50.
   Si el número es divisible por 3 muestra "Fizz",
   si es divisible por 5 muestra "Buzz",
   si es divisible por ambos muestra "FizzBuzz".
*/
// RESPUESTA AQUÍ 👇
function ejercicio39(){
   let fr=``;

   for (let i = 1; i <= 50; i++) {
      if ((i % 3 === 0) && (i % 5 === 0)){
         fr+=`${i} FizzBuzz, `;
      } else if (i % 5 === 0){
         fr+=`${i} Buzz, `;
      } else if (i % 3 === 0){
         fr+=`${i} Fizz, `;
      } else {
         fr+=`${i}, `;
      }
   }
   alert(fr);
}
/*
40. Juego de adivinar número:
   Genera un número aleatorio entre 1 y 10.
   Usa un bucle para pedir al usuario que adivine.
   Da pistas si el número es mayor o menor.
   El juego termina cuando adivina.
*/
// RESPUESTA AQUÍ 👇
function ejercicio40(){
   let numeroSecreto = Math.floor(Math.random() * 10) + 1;
  let intento;
  
  do {
    intento = parseInt(prompt("Adivina el número (entre 1 y 10):"));
    
    if (isNaN(intento) || intento < 1 || intento > 10) {
      alert("Por favor, escribe un número válido entre 1 y 10.");
      continue;
    }

    if (intento < numeroSecreto) {
      alert("El número secreto es mayor.");
    } else if (intento > numeroSecreto) {
      alert("El número secreto es menor.");
    } else {
      alert("¡Felicidades! Adivinaste el número 🎉");
    }

  } while (intento !== numeroSecreto);
}

