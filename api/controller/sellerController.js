const { registerSeller, getSeller, deleteSeller, getImages, putSeller } = require("../service/sellerService");

const registerSellerController = async (req, res) => {
    try {
        const response = await registerSeller(req.body);

        res.status(201).send(response);
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: "Internal Server Error"
        })
    }
}



const getSellerController = async (req, res) => {
    try {
        const response = await getSeller();

        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: "Internal Server Error"
        })
    }
}

async function updateSellerController(req,res){
    try{
        const response= await putSeller(req.params.seller_id,req.body);

        res.status(200).send(response);
    }catch(error){
        res.status(500).send({
            status:500,
            message:"Internal Server Error"
        });
    }
}


const deleteSellerController = async (req, res) => {
    try {
        const response = await deleteSeller(req.params.id);

        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: "Internal Server Error"
        })
    }
}

const getImagesController = async (req, res) => {
    try {
        const response = await getImages(req.params.id);

        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: "Internal Server Error"
        })
    }
}


module.exports = { updateSellerController,registerSellerController, getSellerController, deleteSellerController, getImagesController }