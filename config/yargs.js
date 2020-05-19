const descripcion = {
    demand: true,
    alias:'d',
    desc: 'Descripcion de la tarea'
}
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}


const argv =  require('yargs')
    .command('crear', 'Crear por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar las tareas por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar tareas que no estan en mi diario', {
        descripcion
    })   
    .help()
    .argv;

    module.exports = { argv };