const { promisify } = require("util");

const client = require("../config/db");

const queryAsync = promisify(client.query).bind(client);

const registerBuyer = async (buyerData) => {
  try {
    const buyer_id = Math.random() * (1000 - 1) + 1;

    // const insertQuery = `INSERT INTO buyer(buyer_id, buyer_name, buyer_email, buyer_phone_number, occupation, address, city, state, postalcode, budget_min, budget_max, sale_type)
    //     VALUES(${buyer_id}, '${buyerData.buyer_name
    //   }', '${buyerData.buyer_email}', ${buyerData.buyer_phone_number}, '${buyerData.occupation}', '${buyerData.address}', '${buyerData.city}', '${buyerData.state}', ${buyerData.postalcode}, ${buyerData.budget_min}, ${buyerData.budget_max}, '${buyerData.sale_type}')`;

      const insertQuery = `INSERT INTO buyer(buyer_id, buyer_name, buyer_email, buyer_phone_number, occupation, address,city,state,postalcode,budget_min,budget_max,sale_type,father_name,date_of_birth,gender,wedding_date,marriage_status,annual_income,net_worth)
      VALUES(${buyer_id},'${buyerData.buyer_name}','${buyerData.buyer_email}',${parseInt(buyerData.buyer_phone_number)},'${buyerData.occupation}','${buyerData.address}','${buyerData.city}','${buyerData.state}',${parseInt(buyerData.postalcode)},${parseInt(buyerData.budget_min)},${parseInt(buyerData.budget_max)},'${buyerData.sale_type}','${buyerData.father_name}',${parseInt(buyerData.date_of_birth)},'${buyerData.gender}',${parseInt(buyerData.wedding_date)},'${buyerData.marriage_status}',${parseInt(buyerData.annual_income)},${parseInt(buyerData.net_worth)})`;
      const result = await queryAsync(insertQuery);
     
    console.log("Query:", insertQuery);

    return {
      status: 201,
      message: "buyer record created successfully",
      data: buyerData,
      result: result.rows
    };
  } catch (error) {
    console.error("Error>>", error);
    return {
      status: 500,
      messsage: "failed to register buyer"
    };
  }
};

const getBuyer = async () => {
  try {
    const selectQuery = `SELECT * FROM buyer`;
    const result = await queryAsync(selectQuery);
    return {
      status: 200,
      message: "buyer record retrieved",
      result: result.rows
    };
  } catch (error) {
    console.error("Error>>", error);
    return {
      status: 500,
      messsage: "failed retrieving buyer"
    };
  }
};


const putBuyer = async (buyer_id,buyerData) => { // Added req parameter
  try {
    const buyerId = parseInt(buyer_id);
    console.log(buyer_id)
      if (isNaN(buyerId)) {
      // Handle invalid buyer_id
      console.error("Invalid buyer_id:", buyer_id);
      return {
        status: 400,
        message: "Invalid buyer_id provided"
      };
    }
      const updateQuery = `UPDATE buyer 
      SET buyer_name ='${buyerData.buyer_name}',
          buyer_email ='${buyerData.buyer_email}',
          buyer_phone_number =${parseInt(buyerData.buyer_phone_number)}, 
          occupation ='${buyerData.occupation}',
          address ='${buyerData.address}',
          city ='${buyerData.city}', 
          state ='${buyerData.state}', 
          postalcode =${parseInt(buyerData.postalcode)},
          budget_min =${parseInt(buyerData.budget_min)}, 
          budget_max =${parseInt(buyerData.budget_max)}, 
          sale_type  = '${buyerData.sale_type}',
          father_name='${buyerData.father_name}',
          date_of_birth=${parseInt(buyerData.date_of_birth)}, 
          gender='${buyerData.gender}',
          wedding_date=${parseInt(buyerData.wedding_date)}, 
          marriage_status='${buyerData.marriage_status}',
          annual_income=${parseInt(buyerData.annual_income)}, 
          net_worth=${parseInt(buyerData.net_worth)} 
      WHERE buyer_id = ${buyer_id}`;
      console.log("Query:", updateQuery);
      const result = await queryAsync(updateQuery);
      console.log("Query:", updateQuery);
      return {
      status: 201,
      message: "Buyer record updated successfully",
      data: buyerData,
      result: result.rows
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      status: 500,
      message: "Failed to update buyer"
    };
  }
};

const deleteBuyer = async (buyer_id) => {
  try {
    const deleteQuery = `DELETE FROM buyer where buyer_id=${buyer_id}`;
    const result = await queryAsync(deleteQuery);
    return {
      status: 200,
      message: "buyer record deleted",
      result: result.rows
    };
  } catch (error) {
    console.error("Error>>", error);
    return {
      status: 500,
      messsage: "failed delete buyer"
    };
  }
};

module.exports = { registerBuyer, getBuyer,deleteBuyer ,putBuyer};