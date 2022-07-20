const fs = require('fs');
const colors = require('colors')

const crearArchivoTabla = async (base = 5, listar = false, hasta = 10) => {
    try {
        let salida = ''
        let multi = 0;
        let consola = '';

        for (let index = 0; index <= hasta; index++) {
            multi = base * index;
            salida += `${base} x ${index} =  ${multi} \n`;
            consola += `${base} ${ 'x'.blue} ${index} ${'='.blue}  ${multi} \n`;

        }

        if (listar) {
            console.log('================='.green);
            console.log('Tabla del:'.green, colors.green(base));
            console.log('================='.green);
            
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        return `tabla-${base}.txt`.blue;
    } catch (error) {
        throw error
    }

}
module.exports = {
    crearArchivoTabla
}