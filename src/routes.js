import Index from "views/Index.js";
import AddBuyers from "views/examples/AddBuyers.js";
import AddSellers from "views/examples/AddSellers.js";
import AddPurchased from "views/examples/AddPurchased.js";


import Buyers from "views/examples/Buyers.js";
import Sellers from "views/examples/Sellers.js";
import Purchases from "views/examples/purchased.js";

import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Icons from "views/examples/Icons.js";
// import Purchases from "views/examples/Sellers";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: <Icons />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: <Maps />,
  //   layout: "/admin",
  // },
  {
    path: "/add-buyers",
    name: "Add Buyers",
    icon: "ni ni-single-02 text-yellow",
    component: <AddBuyers />,
    layout: "/admin",
  },
  {
    path: "/add-sellers",
    name: "Add Sellers",
    icon: "ni ni-single-02 text-yellow",
    component: <AddSellers />,
    layout: "/admin",
  },
  {
    path: "/add-purchased",
    name: "Add Purchased",
    icon: "ni ni-single-02 text-yellow",
    component: <AddPurchased />,
    layout: "/admin",
  },
  {
    path: "/buyers",
    name: "Buyers",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Buyers />,
    layout: "/admin",
  },
  {
    path: "/sellers",
    name: "Sellers",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Sellers />,
    layout: "/admin",
  },
  {
    path: "/purchases",
    name: "purchases",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Purchases />,
    layout: "/admin",
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: <Login />,
  //   layout: "/auth",
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: <Register />,
  //   layout: "/auth",
  // },
];
export default routes;
