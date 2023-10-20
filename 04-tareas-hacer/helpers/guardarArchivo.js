const fs = require('fs');
const archivo = './db/data.json'; // El archivo de datos estará en formato JSON

const guardarDB = (data) => {
    fs.writeFileSync(archivo, JSON.stringify(data)); // Convierte los datos (data) a una cadena JSON y los guarda en el archivo
}

const leerDB = () => {
    if(!fs.existsSync(archivo)){
        return data;
    }
    const info = fs.readFileSync(archivo, {encoding:'utf-8'} );
    const data = JSON.parse(info);
    console.log(data);
    return data;
}

module.exports = {
    guardarDB,
    leerDB
}
