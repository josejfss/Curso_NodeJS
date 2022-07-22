const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    },
    hasta:{
        alias: 'h',
        default : 1
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .command('hasta', 'Genera la tabla hasta ese número')
    .help()
    .argv;


module.exports = {
    argv
}