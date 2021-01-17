const fs = require('fs');
const colors = require('colors');
const { createHash } = require('crypto');


let listadoPorHacer = [];

const guardarDB = () => {
        
    let data = JSON.stringify( listadoPorHacer );

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });

}

const cargarDB = () => {

    try {

        listadoPorHacer = require('../db/data.json');

    } catch ( error ) {
        listadoPorHacer = [];
    }
    

}

const crear = ( descripcion ) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push( porHacer );

    guardarDB();

    return porHacer;

}

const getListado = ( completado = true ) => {

    cargarDB();

    let newList = listadoPorHacer.filter(tarea => tarea.completado === completado);
    
    return newList;

}

const actualizar = ( descripcion, completado = true ) => {

    cargarDB();
    
    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

    if ( index >= 0 ) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = ( descripcion ) => {

    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

    if ( index >= 0 ) {
        listadoPorHacer.splice( index, 1 );
        guardarDB();
        return true;
    } else {
        return false;
    }

    /* Otra manera de hacer lo mismo
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if ( listadoPorHacer.length === nuevoListado.length ){
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarBD();
        return true;
    }
    */
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}