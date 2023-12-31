const inquirer = require('inquirer');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1.'} Buscar Ciudad`
            },
            {
                value: 2,
                name: `${'2.'} Historial`
            },
            {
                value: 0,
                name: `${'0.'} Salir`
            }
        ]
    }
];

const pausas = [
    {
        type: 'input',
        name: 'enter',
        message: `\nPresione ${'ENTER'} para continuar\n`
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log('======================');
    console.log(' Seleccione una opcion');
    console.log('======================\n');
    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;
};

const pausa = async () => {
    console.log('\n');
    const { enter } = await inquirer.prompt(pausas);
    return enter;
}

const leerInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];
    const { desc } = await inquirer.prompt(question);
    return desc;
};

const listarLugares = async (lugares = []) => {
    const choices = lugares.map((lugar, i) => {
        const idx = `${i + 1}`;
        return {
            value: lugar.id,
            name: `${idx} ${lugar.nombre}`
        }
    });

    // Para crear una opción en la parte superior
    // Será la opción de cancelar
    choices.unshift({
        value: '0',
        name: '0.' + 'Cancelar'
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione lugar:',
            choices
        }
    ];

    const { id } = await inquirer.prompt(preguntas);
    return id;
}

const mostrarListadoChecklist = async (tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        const idx = `${i + 1}`;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        }
    });

    const preguntas = [
        {
            type: 'checkbox',
            name: 'ids',//retornara un arreglo de id
            message: 'Seleccione',
            choices
        }
    ];

    const { ids } = await inquirer.prompt(preguntas);
    return ids;
}

const confirmar = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];
    const { ok } = await inquirer.prompt(question);
    return ok;
};

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listarLugares,
    confirmar,
    mostrarListadoChecklist
};
