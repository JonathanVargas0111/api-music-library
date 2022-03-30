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
const getItem = async(req,res)=>{
     try {
          req = matchedData(req)
          const {id} = req
          const data = await tracksModel.findById(id)
          if(data != null){
             res.send({data})
          }else{
               handleHtttpError(res,"Elemento no encotrado",204)
          }
     } catch (error) {
          handleHtttpError(res,'ERROR_GET_ITEMS')
     }     
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
          handleHtttpError(res,'ERROR_CREATE_ITEM',403)
     }
}

/**
* Modificar elemento
* @param{*}req
* @param{*}res
*/
const updateItem = async(req,res)=>{       
     try {
          const {id, ...body} = matchedData(req)
          const data = await tracksModel.findOneAndUpdate(
               id,body
          ) 
          res.send({data})          
     } catch (error) {
          handleHtttpError(res,'ERROR_UPDATE_ITEM',403)
     }
}

/**
* Eliminar elemento
* @param{*}req
* @param{*}res
*/
const deleteItem = async (req,res)=>{     
     try {
          req = matchedData(req)
          const {id} = req
          const data = await tracksModel.deleteOne({_id:id})
          res.send({data})          
     } catch (error) {
          console.log(error)
          handleHtttpError(res,'ERROR_DELETE_ITEMS')
     }    
}


module.exports = { getItems, getItem, createItem, updateItem, deleteItem };