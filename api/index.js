const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const client = require("./config/db");

//routes
const adminRoutes = require("./routes/adminRoute");
const buyerRoutes = require("./routes/buyerRoute");
const sellerRoutes= require("./routes/sellerRoute");
const purchasedRoutes= require("./routes/purchasedRoute");



const app = express();
app.use(express.json({ limit: '50mb' }));

app.use(cors({
  origin: "http://localhost:3000"
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

dotenv.config();

// http://localhost:8080/api/admin/adminRoutes
app.use("/api/admin", adminRoutes);


// http://localhost:8080/api/buyer/buyerInfo
app.use("/api/buyer",buyerRoutes)

//http://localhost:8080/api/seller/sellerInfo
app.use("/api/seller",sellerRoutes)

//http://localhost:8080/api/purchased/purchasedInfo
app.use("/api/purchased",purchasedRoutes)



app.listen(process.env.PORT, () => {
  if (client.connect()) {
    console.log("Database is connected");
  } else {
    console.log("Error connecting to Database");
  }
  console.log(`Server is running on ${process.env.PORT}`);
});

