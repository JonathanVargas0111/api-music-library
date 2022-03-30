
const handleHtttpError=(res,message='Algo', code=403)=>{
    res.status(code)
    res.send({error:message})
}

module.exports = {handleHtttpError}