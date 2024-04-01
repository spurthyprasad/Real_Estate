const{promisify}= require("util");
const client = require("../config/db");
const queryAsync = promisify(client.query).bind(client);

const registerPurchased = async(purchasedData)=>{
    try{
        const purchased_id = Math.random() * (1000 - 1) + 1;
    // const insertQuery=`INSERT INTO purchased(seller_id,buyer_id,purchased_date,purchased_id)VALUES(${purchasedData.seller_id},${purchasedData.buyer_id},'${purchasedData.purchased_date}',${purchasedData.purchased_id})`;
    const insertQuery=`INSERT INTO purchased(seller_id,buyer_id,purchased_date,purchased_id)VALUES(${purchasedData.seller_id},${purchasedData.buyer_id},'${purchasedData.purchased_date}',${purchased_id})`;
  const result = await queryAsync(insertQuery);
    
    console.log("Query:",insertQuery)
        
        return{
            status: 201,
            message : "purchased record created successfully",
            data : purchasedData,
            result:result.rows
        };

    }catch(error){
        console.error("Error",error);
        return{
            status:500,
            message:"failed to register seller"
        };
    }
};


const getPurchased = async()=>{
    try{
    const selectQuery=`SELECT 
    p.*,
    s.seller_name AS seller_name,
    s.phone_number AS phone_number,
    s.seller_email AS seller_email,
    b.buyer_name AS buyer_name,
    b.buyer_phone_number AS buyer_phone_number,
    b.buyer_email AS buyer_email
FROM purchased p
JOIN seller s ON p.seller_id = s.seller_id
JOIN buyer b ON p.buyer_id = b.buyer_id;`;
  const result = await queryAsync(selectQuery);
        return{
            status: 200,
            message : "purchased record retrieved",
            result:result.rows
        };

    }catch(error){
        console.error("Error>>",error);
        return{
            status:500,
            message:"failed to retieve purchased data"
        };
    }
};

const deletePurchased = async(purchased_id)=>{
    try{
        
    const deleteQuery=`DELETE FROM purchased where purchased_id=${purchased_id}`;
  const result = await queryAsync(deleteQuery);
    
    console.log("Query:",deleteQuery)
        
        return{
            status: 201,
            message : "purchased deleted successfully",
            data : purchasedData,
            result:result.rows
        };

    }catch(error){
        console.error("Error",error);
        return{
            status:500,
            message:"failed to delete record"
        };
    }
};

module.exports={registerPurchased,getPurchased,deletePurchased}