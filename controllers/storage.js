const fs = require("fs");
const { matchedData } = require("express-validator")
const  {storageModel} = require('../models')
const { handleHttpError } = require('../utils/handleError')

const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`

/**
* Obtener lista de elementos
* @param{*}req
* @param{*}res
*/
const getItems = async (req,res)=>{
     try {
          const data = await storageModel.find({})
          res.send({data})
     } catch (error) {
          handleHttpError(res, "ERROR_LIST_ITEMS")
     }
}

/**
* Obtener elemento especifico
* @param{*}req
* @param{*}res
*/
const getItem = async (req,res)=>{     
     try {
          const {id} = matchedData(req)
          const data = await storageModel.findById(id)
          res.send({data})
     } catch (error) {
          handleHttpError(res, "ERROR_DETAIL_ITEM")
     } 
}


/**
* Crear elemento
* @param{*}req
* @param{*}res
*/
const createItem = async (req,res)=>{   
     
   try {
     const {body, file} = req
     const filename = file.filename
     const fileData = {
          filename:filename,
          url:`${PUBLIC_URL}/${filename}`
     }
     const data = await storageModel.create(fileData)
     res.send(data)  
   } catch (error) {        
     handleHttpError(res, "ERROR_DETAIL_ITEM")
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
const deleteItem =async (req,res)=>{     
     try {
          const { id } = matchedData(req);
          const dataFile = await storageModel.findById(id);
          await storageModel.delete({ _id: id });
          //const deleteResponse = await storageModel.deleteOne({ _id: id });
          const { filename } = dataFile;
          const filePath = `${MEDIA_PATH}/${filename}`; //TODO c:/miproyecto/file-1232.png      
          //fs.unlinkSync(filePath);
          const data = {
            filePath,
            deleted: 1
          };
      
          res.send({ data });
        } catch (error) {
          handleHttpError(res, "ERROR_DELETE_ITEM");
        }
}


module.exports = { getItems, getItem, createItem, deleteItem };