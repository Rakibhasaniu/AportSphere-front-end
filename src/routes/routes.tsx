import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateManager from "../pages/admin/CreateManager";
import AllProducts from "../pages/product/AllProducts";
import AddProducts from "../pages/product/AddProducts";
import ManageProducts from "../pages/product/ManageProducts";
import SellReport from "../pages/admin/SellReport";
import MDashboard from "../pages/manager/MDashboard";
import UpdateProduct from "../pages/admin/UpdateProduct";
import SellProduct from "../pages/product/SellProduct";
import GetAllSales from "../pages/admin/GetAllSales";



const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'about',
                element:<About />
            },
            {
                path:'contact',
                element:<Contact />
            },
           
        ]
    },
    {
        path:'/admin',
        element:<App />,
        children:[
            {
               index:true,
                element:<AdminDashboard />
            },
            {
               path:'dashboard',
                element:<AdminDashboard />
            },
            {
               path:'create-admin',
                element:<CreateAdmin />
            },
            {
               path:'create-manager',
                element:<CreateManager />
            },
            {
               path:'add-product',
                element:<AddProducts />
            },
            {
               path:'manage-product',
                element:<ManageProducts />
            },
            {
               path:'sell-report',
                element:<SellReport />
            },
            {
               path:'all-product',
                element:<AllProducts />
            },
            {
               path:'all-sales',
                element:<GetAllSales />
            },
        ]
    },
    {
        path:'/manager',
        element:<App />,
        children:[
            {
               index:true,
                element:<MDashboard />
            },
            {
               path:'dashboard',
                element:<MDashboard />
            },
            {
               path:'update-product',
                element:<UpdateProduct />
            },
            {
               path:'all-product',
                element:<AllProducts />
            },
        ]
    },
    {
        path:'/seller',
        element:<App />,
        children:[
            
            {
               path:'all-product',
                element:<AllProducts />
            },
            {
               path:'sell-product',
                element:<SellProduct />
            },
        ]
    },
    {
        path:'/login',
        element: <Login />
    },
    {
        path:'/register',
        element: <Register />
    },
]);

export default router;