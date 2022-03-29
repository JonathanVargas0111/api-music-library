const  {tracksModel} = require('../models')

/**
* Obtener lista de elementos
* @param{*}req
* @param{*}res
*/
const getItems = async (req,res)=>{
     const data = await tracksModel.find({})
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
     const {body} = req
     console.log(body)
     const data = await tracksModel.create(body)
     res.send({data})  
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