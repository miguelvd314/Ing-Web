// Definimos un objeto
// const deadpool = {
//     nombre: 'Wade',
//     apellido: 'Wiston',
//     poder: 'Regeneración',
//     getNombre() {
//         return `${this.nombre} ${this.apellido} ${this.poder}`;
//     }
// };

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// console.log(nombre, apellido, poder);
// console.log(deadpool.getNombre());




// // Definimos un objeto
// const deadpool = {
//     nombre: 'Wade',
//     apellido: 'Wiston',
//     poder: 'Regeneración',
//     getNombre() {
//         return `${this.nombre} ${this.apellido} ${this.poder}`;
//     }
// };

// // Desestructuración del objeto
// const { apellido, nombre, poder } = deadpool;

// // Imprimir las variables desestructuradas
// console.log(nombre, apellido, poder);





// // Definimos un objeto
// const deadpool = {
//     nombre: 'Wade',
//     apellido: 'Wiston',
//     poder: 'Regeneración',
//     getNombre() {
//         return `${this.nombre} ${this.apellido} ${this.poder}`;
//     }
// };

// // Desestructuración del objeto con valor predeterminado para "edad"
// const { apellido, nombre, poder, edad } = deadpool;

// // Imprimir las variables desestructuradas
// console.log(nombre, apellido, poder, edad);




// // Definimos un objeto
// const deadpool = {
//     nombre: 'Wade',
//     apellido: 'Wiston',
//     poder: 'Regeneración',
//     getNombre() {
//         return `${this.nombre} ${this.apellido} ${this.poder}`;
//     }
// };

// // Desestructuración del objeto con valor predeterminado para "edad"
// const { apellido, nombre, poder, edad = 20 } = deadpool;

// // Imprimir las variables desestructuradas
// console.log(nombre, apellido, poder, edad);






// // Definimos un objeto
// const deadpool = {
//     nombre: 'Wade',
//     apellido: 'Wiston',
//     poder: 'Regeneración',
//     edad: 50,
//     getNombre() {
//         return `${this.nombre} ${this.apellido} ${this.poder}`;
//     }
// };

// // Desestructuración del objeto con valor predeterminado para "edad"
// const { apellido, nombre, poder, edad = 20 } = deadpool;

// // Imprimir las variables desestructuradas
// console.log(nombre, apellido, poder, edad);






// // Definimos un objeto
// const deadpool = {
//     nombre: 'Wade',
//     apellido: 'Wiston',
//     poder: 'Regeneración',
//     edad: 50,
//     getNombre() {
//         return `${this.nombre} ${this.apellido} ${this.poder}`;
//     }
// };

// /* const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder; */

// // Función que imprime las propiedades de un héroe
// function imprimeHeroe(heroe) {
//     const { apellido, nombre, poder, edad = 20 } = heroe;
//     console.log(nombre, apellido, poder, edad);
// }

// imprimeHeroe(deadpool);








// // Definimos un objeto
// const deadpool = {
//     nombre: 'Wade',
//     apellido: 'Wiston',
//     poder: 'Regeneración',
//     edad: 50,
//     getNombre() {
//         return `${this.nombre} ${this.apellido} ${this.poder}`;
//     }
// };

// /* const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder; */

// // Función que imprime las propiedades de un héroe
// function imprimeHeroe({ apellido, nombre, poder, edad = 20 }) {
//     console.log(nombre, apellido, poder, edad);
// }

// // Llamamos a la función con el objeto deadpool
// imprimeHeroe(deadpool);





// // Definimos un objeto
// const deadpool = {
//     nombre: 'Wade',
//     apellido: 'Wiston',
//     poder: 'Regeneración',
//     edad: 50,
//     getNombre() {
//         return `${this.nombre} ${this.apellido} ${this.poder}`;
//     }
// };

// /* const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder; */
// function imprimeHeroe({ apellido, nombre, poder, edad = 20 }) {
//     nombre = 'Fernando';
//     console.log(nombre, apellido, poder, edad);
// }

// imprimeHeroe(deadpool);





// // Definimos un objeto
// const deadpool = {
//     nombre: 'Wade',
//     apellido: 'Wiston',
//     poder: 'Regeneración',
//     edad: 50,
//     getNombre() {
//         return `${this.nombre} ${this.apellido} ${this.poder}`;
//     }
// };

// function imprimeHeroe({ apellido, nombre, poder, edad = 20 }) {
//     nombre = 'Fernando';
//     console.log(nombre, apellido, poder, edad);
// }

// // Llamamos a la función con el objeto deadpool
// imprimeHeroe(deadpool);

// const heroes = ['deadpool', 'supermam', 'batmam'];
// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];
// console.log(h1, h2, h3);





// // Definimos un objeto
// const deadpool = {
//     nombre: 'Wade',
//     apellido: 'Wiston',
//     poder: 'Regeneración',
//     edad: 50,
//     getNombre() {
//         return `${this.nombre} ${this.apellido} ${this.poder}`;
//     }
// };

// function imprimeHeroe({ apellido, nombre, poder, edad = 20 }) {
//     nombre = 'Fernando';
//     console.log(nombre, apellido, poder, edad);
// }

// // Llamamos a la función con el objeto deadpool
// imprimeHeroe(deadpool);

// const heroes = ['deadpool', 'supermam', 'batmam'];
// const [h1, h2, h3] = heroes;
// console.log(h1, h2, h3);






// Definimos un objeto
const deadpool = {
    nombre: 'Wade',
    apellido: 'Wiston',
    poder: 'Regeneración',
    edad: 50,
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
};

function imprimeHeroe({ apellido, nombre, poder, edad = 20 }) {
    nombre = 'Fernando';
    console.log(nombre, apellido, poder, edad);
}

// Llamamos a la función con el objeto deadpool
imprimeHeroe(deadpool);

const heroes = ['deadpool', 'supermam', 'batmam'];

// Utilizamos la desestructuración de arrays para obtener el tercer elemento
const [, , h3] = heroes;

console.log(h3);
