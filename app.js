
// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

// console.log( argv );

let comando = argv._[0];

switch ( comando ) {
    case "crear":
        let tarea = porHacer.crear( argv.descripcion );
        console.log( colors.yellow( tarea ));
    break;

    case "listar":
        let listado = porHacer.getListado( argv.completado );
        for ( let tarea of listado ) {
            console.log('************Por Hacer************'.rainbow);
            console.log( `Tarea: ${ colors.red( tarea.descripcion ) }`.green );
            console.log( `Estado: ${ colors.red( tarea.completado ) }`.green );
            console.log('*********************************'.rainbow);
        }
    break;

    case "actualizar":
        let actualizado = porHacer.actualizar( argv.descripcion, argv.completado );
        console.log( colors.yellow( actualizado ) );
    break;

    case "borrar":
        let borrado = porHacer.borrar( argv.descripcion );
        console.log( colors.yellow( borrado ) );
    break;

    default:
        console.log('No se reconoce comando'.red);
}