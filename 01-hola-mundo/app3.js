console.log('Iniciando el programa');// 1
setTimeout(()=>{
    console.log('Primer TimeOut');// 5
},3000);

setTimeout(()=>{
    console.log('Segundo TimeOut');// 2
},3000);

setTimeout(()=>{
    console.log('Tercer TimeOut');// 3
},3000);

console.log('Fin del Programa');// 4