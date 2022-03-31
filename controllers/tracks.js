const { matchedData } = require('express-validator')
const  {tracksModel} = require('../models')
const { handleHttpError } = require('../utils/handleError')

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
          handleHttpError(res,'ERROR_GET_ITEMS')
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
          console.log(data)
          if(data != null){
             res.send({data})
          }else{
               handleHttpError(res,"Elemento no encotrado",204)
          }
     } catch (error) {
          handleHttpError(res,'ERROR_GET_ITEMS')
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
          handleHttpError(res,'ERROR_CREATE_ITEM',403)
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
          handleHttpError(res,'ERROR_UPDATE_ITEM',403)
     }
}

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req,res)=>{     
     try{
          req = matchedData(req);
          const {id} = req;
          const deleteResponse = await tracksModel.delete({_id:id});
          const data = {
            deleted: deleteResponse.matchedCount
          }          
          res.send({data});
        }catch(error){
          console.log(error)
          handleHttpError(res,"ERROR_DELETE_ITEM")
        }
}


module.exports = { getItems, getItem, createItem, updateItem, deleteItem };