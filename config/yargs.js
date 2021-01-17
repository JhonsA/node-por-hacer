const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
        alias: 'c',
        default: true,
        type: 'boolean',
        desc: 'Marca como completada o pendiente la tarea'
    };

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion } )
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado } )
    .command('borrar', 'Borrar una tarea', { descripcion } )
    .command('listar', 'Listar lista', { completado } )
    .help()
    .argv;


module.exports = {
    argv
}