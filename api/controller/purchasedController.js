const{registerPurchased, getPurchased,deletePurchased}=require("../service/purchasedService");

const registerPurchasedController = async(req,res)=>{
    try{
        const response = await registerPurchased(req.body);
        res.status(201).send(response);

    }catch(error){
        res.status(500).send({
           status : 500,
           message :"Internal server Error"
        })
    }
}

const getPurchasedController = async(req,res)=>{
    try{
        const response = await getPurchased();
        res.status(200).send(response);

    }catch(error){
        res.status(500).send({
           status : 500,
           message :"Internal server Error"
        })
    }
}
const deletePurchasedController = async(req,res)=>{
    try{
        const response = await deletePurchased(req.params.id);
        res.status(200).send(response);

    }catch(error){
        res.status(500).send({
           status : 500,
           message :"Internal server Error"
        })
    }
}

module.exports={registerPurchasedController,getPurchasedController,deletePurchasedController}