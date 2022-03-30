const mongoose = require("mongoose")
const mongooseDelete = require('mongoose-delete')


const StorageSceheme = new mongoose.Schema(
    {
        url:{
            type:String
        },
        filename:{
            type:String
        }
    },
    {
        timestamps:true,//TODO createdAt, updateAt
        versionKey:false
    }
);

TracksScheme.plugin(mongooseDelete,{overrideMethods:"all"})
module.exports = mongoose.model("storage",StorageSceheme)