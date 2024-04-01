const { promisify } = require("util");
const client = require("../config/db");
const queryAsync = promisify(client.query).bind(client);

const registerSeller = async (sellerData) => {
    try {
        const seller_id = Math.random() * (1000 - 1) + 1;

        const insertQuery = `INSERT INTO seller(seller_id, seller_name, seller_email, phone_number, address, city, state, postalcode, square_footage, year_built, price, description, amenities, certified_by, road_space, direction, sale_type)
        VALUES(${seller_id},'${sellerData.seller_name}','${sellerData.seller_email}',${parseInt(sellerData.phone_number)},'${sellerData.address}','${sellerData.city}','${sellerData.state}',${parseInt(sellerData.postalcode)},${parseInt(sellerData.square_footage)},${parseInt(sellerData.year_built)},${parseInt(sellerData.price)},'${sellerData.description}','${sellerData.amenities}','${sellerData.certified_by}',${parseInt(sellerData.road_space)},'${sellerData.direction}','${sellerData.sale_type}')`;

        // const insertQuery= `INSERT INTO seller(seller_id,seller_name)VALUES(${seller_id},'${sellerData.seller_name}')`



        const result = await queryAsync(insertQuery);

        if (sellerData.images) {
            for (const image of sellerData.images) {
                const id = Math.random() * (1000 - 1) + 1;
                const insertQuery = `INSERT INTO image(seller_id, image,id) VALUES(${seller_id}, '${image}',${id})`;
                await queryAsync(insertQuery);
            }
        }
        //console.log("Query:",insertQuery);


        return {
            status: 201,
            message: "seller record created successfully",
            data: sellerData,
            result: result.rows
        };
    } catch (error) {
        console.error("Error", error);
        return {
            status: 500,
            message: "failed to register seller"
        };
    }
};



const getSeller = async () => {
    try {
        const selectQuery = `SELECT * from seller`;
        const result = await queryAsync(selectQuery);
        return {
            status: 200,
            message: "seller retreived successfully",
            result: result.rows
        };
    } catch (error) {
        console.error("Error >>", error);
        return {
            status: 500,
            message: "failed to register seller"
        };
    }
};

const putSeller = async(seller_id,sellerData)=>{
try{
    const sellerId = parseInt(seller_id);
    console.log(seller_id)
    if(isNaN(sellerId)){

        console.error("Invalid seller Id",seller_id);
        return{
            status:400,
            message:"Invalid Seller Id provided"
        };
    }
    const updateQuery=`UPDATE seller 
    SET seller_name='${sellerData.seller_name}',
        seller_email='${sellerData.seller_email}',
        phone_number=${sellerData.phone_number},
        address='${sellerData.address}',
        city='${sellerData.city}',
        state='${sellerData.state}',
        square_footage='${sellerData.square_footage}',
        year_built='${sellerData.year_built}',
        price='${sellerData.price}',
        description='${sellerData.description}',
        amenities='${sellerData.amenities}',
        certified_by='${sellerData.certified_by}',
        road_space='${sellerData.road_space}',
        direction='${sellerData.direction}',
        sale_type='${sellerData.sale_type}',
        postalcode='${sellerData.postalcode}'
    WHERE seller_id=${seller_id}`;
    console.log("Query:",updateQuery);
    const result = await queryAsync(updateQuery);
    console.log("Query",updateQuery);
    return{
        status:200,
        message:"seller record updated successfully",
        data : sellerData,
        result: result.rows
    };
}catch(error){
    console.error("Error:",error);
    return{
        status:500,
        message:"Failed to update seller"
    };

}

};


const deleteSeller = async (seller_id) => {
    try {
        const deleteQuery = `DELETE from seller where seller_id=${seller_id}`;
        const result = await queryAsync(deleteQuery);

        return {
            status: 200,
            message: "seller record deleted successfully",
            result: result.rows
        };
    } catch (error) {
        console.error("Error >>", error);
        return {
            status: 500,
            message: "failed to delete seller"
        };
    }
};


const getImages = async (seller_id) => {
    try {
        const selectQuery = `SELECT * from image where seller_id = ${seller_id}`;
        const result = await queryAsync(selectQuery);
        return {
            status: 200,
            message: "Images retreived successfully",
            result: result.rows
        };
    } catch (error) {
        console.error("Error >>", error);
        return {
            status: 500,
            message: "failed to retive images"
        };
    }
}

module.exports = { registerSeller, getSeller, putSeller,deleteSeller, getImages };