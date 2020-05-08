//Palabra reservada  => palabra exclusiva  del lenguaje  , no podemos usarlo  en  variables (let,  returrn, math)

//Vamos a declarar  una Clases

class perro {
    //Método constructor 
    constructor(raza, tamanio, nombre) {

        console.log("Se ejecuto el constructor");
        this.raza = raza;
        this.tamanio = tamanio;
        this.nombre = nombre;

    }

    comer(comida) {
        //Coloca compáracIones estrictas
        if (comida === "croquetas") {
            return (" =) ");
        } else {
            return (" =( ");
        }
    }
    saludo() {
        return `Hola mi nombre es  ${this.nombre}`;
    }

    getNombre() {
        return this.nombre;
    }

    GetRaza() {
        return this.raza;
    }

    setNombre() {

        return this.nombre

    }

}


//Instancia de clase perro 
const snoopy = new perro("Beagle", "pequeño", "Snoopy");
const scooby = new perro("Gran Danés", "grande", "Scooby");

console.log(snoopy);
console.log(scooby);

console.log(snoopy.comer("croquetas"));
console.log(scooby.comer("tacos"));

console.log(scooby.getNombre());
console.log(scooby.GetRaza());
console.log(scooby.setNombre());

