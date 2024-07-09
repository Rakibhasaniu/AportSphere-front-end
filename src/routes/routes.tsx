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
            {
                path:'product',
                element:<AllProducts />
            }
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