require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
} = require('./helpers/inquirer');

const Tareas = require('./models/tareas');

console.clear();

const main = async() => {
    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB(); // función que carga la BD si existen datos los retorna
    if (tareasDB) { // cargar tareas leídas
        tareas.cargarTareasFromArray(tareasDB); // se invoca la función cargarTarea
    }
    do {
        // la función inquirerMenu imprime el menú.
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                //crear opcion
                const desc = await leerInput('Descipcion:');
                tareas.crearTarea(desc);
                break;

            case '2':
                tareas.listadoCompleto(tareasDB)
                break;

            case '3':
                tareas.listarPendientesCompletadas(tareasDB,true)
                break;
                
            case '4':
                tareas.listarPendientesCompletadas(tareasDB,false)
                break;

            case '5': // Completado, Pendiente
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
                break;
            
            case '6': // Borrar tarea
                const id = await listadoTareasBorrar(tareas.listadoArr);
                //pregunta de confirmacion
                if(id!== '0'){
                    const ok = await confirmar('¿Esta seguro?');
                    if(ok){
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada correctamente')
                    }
                }
                break;
        }
        guardarDB(tareas.listadoArr);
        await pausa();
    } while (opt !== '0');
}
main();
