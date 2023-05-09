import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main/Main";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=> fetch('http://localhost:5000/coffees')
            },
            {
                path:'/addCoffee',
                element:<AddCoffee></AddCoffee>    
            },
            {
                path:'/updateCoffee',
                element:<UpdateCoffee></UpdateCoffee>
            }
        ]
    }
])

export default router;