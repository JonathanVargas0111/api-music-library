const  {storageModel} = require('../models')


const PUBLIC_URL = process.env.PUBLIC_URL

/**
* Obtener lista de elementos
* @param{*}req
* @param{*}res
*/
const getItems = async (req,res)=>{
     console.log()
     const data = await storageModel.find({})
     res.send({data})
}

/**
* Obtener elemento especifico
* @param{*}req
* @param{*}res
*/
const getItem = (req,res)=>{
      
}


/**
* Crear elemento
* @param{*}req
* @param{*}res
*/
const createItem = async (req,res)=>{   
     
     const {body, file} = req
     const filename = file.filename
     const fileData = {
          filename:filename,
          url:`${PUBLIC_URL}/${filename}`
     }
     const data = await storageModel.create(fileData)
     res.send(data)  
}


/**
* Modificar elemento
* @param{*}req
* @param{*}res
*/
const updateItem = (req,res)=>{    
    
}

/**
* Eliminar elemento
* @param{*}req
* @param{*}res
*/
const deleteItem = (req,res)=>{     
    
}


module.exports = { getItems, getItem, createItem, updateItem, deleteItem };