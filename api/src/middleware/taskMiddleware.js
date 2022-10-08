const validateTitle = (req, res, next)=>{

    const {body} = req;

    if(body.title === undefined){
        res.status(400).json({message:'O titulo não foi definido'});
   
    }
    if(body.title === ''){
        res.status(401).json({message:'O titulo não pode ser vazio'});
    }
    
    next();
};


const validateStatus = (req, res, next)=>{

    const {body} = req;

    if(body.status === undefined){
        res.status(400).json({message:'O titulo não foi definido'});
   
    }
    if(body.status === ''){
        res.status(401).json({message:'O titulo não pode ser vazio'});
    }
    
    next();
    

};







module.exports = {
    validateStatus,
    validateTitle
}