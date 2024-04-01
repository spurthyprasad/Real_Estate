const { registerAdmin,getRegisterAdmin } = require("../service/adminService");

const registerAdminController = async (req, res) => {
  try {
    const response = await registerAdmin(req.body);
    res.status(201).send(response);
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: "Internal server error",
    })
  }
}


const getAdminController = async (req, res) => {
  try {
    const response = await getRegisterAdmin();
    res.status(200).send(response);
  } catch (error) {
    console.error("Error >> ", error);
    res.status(500).send({
    status: 500,
    message: "Failed to fetch admins"
    });
  }
};

module.exports = {getAdminController,registerAdminController};