const bcrypt = require("bcrypt");
const { promisify } = require("util");
const client = require("../config/db");

const queryAsync = promisify(client.query).bind(client);

const registerAdmin = async (adminData) => {
  try {
    const hashedPassword = bcrypt.hashSync(adminData.password, 5);
    const id = Math.random() * (1000 - 1) + 1;

    const insertQuery = `INSERT INTO admin(id,uname,email,phno,password) 
                         VALUES(${id}, '${adminData.uname}', '${adminData.email}', ${adminData.phno}, '${hashedPassword}')`;

    const result = await queryAsync(insertQuery);

    return {
      status: 201,
      message: "Admin record created successfully",
      data: adminData,
      result: result.rows
    };
   } catch (error) {
    console.error("Error >> ", error);
    return {
      status: 500,
      message: "Failed to register admin",
    };
  }
};


const getRegisterAdmin = async () => {
  try {
    const selectQuery = "SELECT id, uname, email, phno FROM admin"; 
    const result = await queryAsync(selectQuery);
    return {
      status: 200,
      message: "Admins fetched successfully",
      data: result.rows,
    };
  } catch (error) {
    console.error("Error >> ", error);
    throw new Error("Failed to fetch admins");
  }
};

module.exports = { registerAdmin,getRegisterAdmin };
