const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es el valor principal de la tabla.',
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    // demandOption: true,
                    default: false,
                    describe: 'Muestra o no la tabla en consola.',
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Indica el numero hasta el que va llegar la tabla de Multiplicasion',
                })
                .check( (argv, options) => {
                    if( isNaN( argv.b ) ){
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .argv;

module.exports = argv;