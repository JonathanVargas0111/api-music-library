const { matchedData } = require('express-validator')
const  {tracksModel} = require('../models')
const { handleHtttpError } = require('../utils/handleError')

/**
* Obtener lista de elementos
* @param{*}req
* @param{*}res
*/
const getItems = async (req,res)=>{
     try {
          const data = await tracksModel.find({})
          res.send({data})          
     } catch (error) {
          handleHtttpError(res,'ERROR_GET_ITEMS')
     }     
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
     try {
          const body = matchedData(req)
          const data = await tracksModel.create(body) 
          res.send({data})          
     } catch (error) {
          console.log(error)
          handleHtttpError(res,'ERROR_CREATE_ITEM',403)
     }
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