require('dotenv').config();
const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");
console.clear();

const main = async () => {
    const busquedas = new Busquedas();
    let opt = 0;

    do {
        // Llamada a la función que pinta el menú
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                // Mostrar mensaje
                const lugar = await leerInput('Ciudad: ');
                //buscar los lugares
                const lugares = await busquedas.ciudad(lugar);
                //seleccionar el lugar
                const id = await listarLugares(lugares);
                if(id === '0') continue; // cancela
                const lugarSel = lugares.find(l => l.id === id);
                //guardar en arreglo
                busquedas.agregarHistorial(lugarSel.nombre);
                //clima
                const clima = await busquedas.climaLugar(lugarSel.lat,lugarSel.lng);

                //mostrar los resultados
                console.clear();
                console.log('\nInformación de la Ciudad\n');
                console.log('Ciudad:',lugarSel.nombre);
                console.log('Lat:',lugarSel.lat);
                console.log('Lng:',lugarSel.lng);
                console.log('Temperatura:',clima.temp);
                console.log('Maxima:',clima.max);
                console.log('Mínima:',clima.min);
                console.log('Estado del clima:',clima.desc);
                break;
            
            case 2:
                // aqui en vez de busqueda.historial poner busqueda.historialCapitalizado
                busquedas.historialCapitalizado.forEach((lugar,i) => {
                    const idx = `${i+1}`;
                    console.log(`${idx} ${lugar}`);
                })
                break;
            
            case 0:
                // TO DO: Lógica para la opción 0
                break;
            }    
        await pausa();
            
    } while (opt !== 0);
};
main();
