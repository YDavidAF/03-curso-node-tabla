const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');

// console.log( base );

// console.log( process.argv );
// console.log( argv );

// console.log('base: yargs', argv.b );//utilizo b porque en la constante de la linea 2 declare en las obsiones que b = base, 

// const base = 5;


crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'.red) )
    .catch( err => console.log(err) );


