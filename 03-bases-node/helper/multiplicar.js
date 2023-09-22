const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path');

const crearArchivo = async (j = 5, listar = true, hasta = 10) => {
    try {
        let salida = '';
        let consola = '';
        for (i = 1; i <= hasta; i++) {
            salida += `${j} x ${i} = ${j * i}\n`;
            consola += `${j} ${'x'.green} ${i} ${'='.green} ${j * i}\n`;
        }
        if (listar) {
            console.log('============='.green);
            console.log('  Tabla del: ', colors.blue(j));
            console.log('============='.blue);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-del-${j}.txt`, salida);
        return `Tabla del ${j}`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
}