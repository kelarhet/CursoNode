const { rejects } = require('assert')
const fs=require('fs')
const { resolve } = require('path')


const crearArchivo=async(base=5)=>{
    console.log('========================')
    console.log('        Tabla del:',base)
    console.log('========================')
    try{
    let salida=``;
    for(let i=1;i<=10;i++){
        salida+=`${base}x${i}=${base*1}\n`
    }
    console.log(salida)
    fs.writeFileSync(`tabla-${base}.txt`,salida)
   
    return `tabla-${base}.txt`
    }
    catch(error){
        throw error

    }
}
module.exports={crearArchivo}
