import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import Regidter from "../pages/Register/Regidter";
import Cart from "../pages/Cart/Cart";
import Addproduct from "../pages/AddProduct/Addproduct";
import BrandProduct from "../pages/Barand/BrandProduct";
import PrivateRoute from "./PrivateRoute";
import Shop from "../pages/Shop/Shop";
import ShopDetails from "../pages/Shop/ShopDetails";
import UpdateProduct from "../pages/Shop/UpdateProduct";
import ErrorPage from "../ErrorPage/ErrorPage";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('https://assignemtn-10-server-e2n5acsaj-mdnayanmolla.vercel.app/products')      
            },
            {
               path:'/addProduct',
               element: <PrivateRoute> <Addproduct></Addproduct> </PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Regidter></Regidter>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            }, 
            {
             path: '/shop',
             element: <Shop></Shop>,
             loader: ()=> fetch('https://assignemtn-10-server-e2n5acsaj-mdnayanmolla.vercel.app/products')      
            },
            {
             path: '/details/:id',
             element: <ShopDetails></ShopDetails>,
             loader: ({params})=> fetch(`https://assignemtn-10-server-e2n5acsaj-mdnayanmolla.vercel.app/products/${params.id}`)      
            },
            {
             path: '/update/:id',
             element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
             loader: ({params})=> fetch(`https://assignemtn-10-server-e2n5acsaj-mdnayanmolla.vercel.app/products/${params.id}`)      

            },
            {
             path:'/brands/:Bname',
             element: <PrivateRoute><BrandProduct></BrandProduct></PrivateRoute>,
             loader: ()=>  fetch('./brand.json')
            }
        ]
      },
])

export default router;