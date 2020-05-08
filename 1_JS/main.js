//2000  Internet Explorer  Microsoft 

//Navegadores 
//ES6==> ECMASCRIPT 6 (JS Moderno) ""

//JS


var nombre = " Carlos";


//ES6
let x = 38;     //Es permitido  cambiar  el  valor 
const y = 3.1416;    //No es permitido  reemplaza su valor 

//StringTemplate
console.log(`Hola mi nombre es ${nombre}  y mi  edad  es  ${x}`);

//Arrow  Functions
const suma = (a, b) => {
    let resultadosuma = a + b;
    return a + b;
}


const resultado = suma(5, 9);
console.log(resultado);


//           0 1 2 3 4
let array = [1, 2, 3, 4, 5];
for (let i = 0; i <= array.length; i++) {
    console.log(`array en el indice ${i} = ${array[i]}`);
}


//const farenheitToCelsius = (gradosF) => (gradosF - 32) * 5/9;

//OBJETOS
//Propiedades => llave (string, numero, booleano, arreglos,  objeto)
//Método => Acciones  que puede hacer el objeto

//Objeto  literal 
let computadora = {
    color: "plata",
    marca: "Toshiba",
    encendida: true,


    //Metodo 
    //Scope=> el alcance de una variable 
    obtenerInfo: function () {
        return `Esta compu es ${this.color}, marca ${this.marca}`
    },
}

console.log(computadora.obtenerInfo());

//Pinguinos  Objetos : Carlos Loarca  

let myPenguin = {

    character:"Alfred",
    origin:"Zig et Puce",
    creator: "Alain Saint-Ogan",

    nombreF: () => `Hola soy un pinguino y mi nombre es ${myPenguin.character}`,

    graznar:() => `kaww kaww!!`

}


myPenguin.puedeVolar = false;
myPenguin.character="Juan";

console.log(myPenguin.nombreF());
console.log(myPenguin.graznar());
console.log(myPenguin.character());
