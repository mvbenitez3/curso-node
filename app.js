const { crearArchivoTabla } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')


console.clear();


//const base = 3;
/* const [, , arg3 = 'base=5'] = process.argv;
const [ , base=5] = arg3.split('=')
*/
crearArchivoTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err)) 


