const {crearArchivo} =require('./helpers/multiplicar')
const argv=require('yargs').argv;
console.clear()

console.log(process.argv)
console.log(argv)
console.log('base:yargs', argv.base)

//crearArchivo(base)
//        .then(nombreArchivo=>console.log(nombreArchivo,'creado'))
//        .catch(err=>console.log(err))

