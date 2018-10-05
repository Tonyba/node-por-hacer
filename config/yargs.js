const descripcion = {
    demand: true,
    alias: 'a',
    desc: 'descripcion de la actualizacion'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'marca como completado'
}

const argv = require('yargs')
    .command('crear', 'crea una tarea por hacer', { descripcion })
    .command('actualizar', 'actualiza una tarea', { descripcion, completado })
    .command('borrar', 'borra una tarea', { descripcion })
    .help()
    .argv

module.exports = {
    argv
}