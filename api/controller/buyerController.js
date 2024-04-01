const { registerBuyer, getBuyer,putBuyer ,deleteBuyer} = require("../service/buyerService");

const registerBuyerController = async (req, res) => {
  try {
    const response = await registerBuyer(req.body);

    res.status(201).send(response);
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: "Internal server Error"
    })
  }
}
const getBuyerController = async (req, res) => {
  try {
    const response = await getBuyer();

    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: "Internal server Error"
    })
  }
}


async function updateBuyerController(req, res) {
  try {
    const response = await putBuyer(req.params.buyer_id,req.body);

    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: "Internal server Error"
    });
  }
}

const deleteBuyerController = async (req, res) => {
  try {
    const response = await deleteBuyer(req.params.id);
    

    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: "Internal server Error"
    })
  }
}

module.exports = { registerBuyerController, getBuyerController ,deleteBuyerController,updateBuyerController}