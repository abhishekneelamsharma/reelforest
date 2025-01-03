import MyParticles from "../components/Particles";
import Home from "../pages/home/Home";
import Language from "../pages/language/Language";
import Login from "../pages/login/Login";
import New_order from "../pages/new_order/New_order";
import Order from "../pages/order/Order";
import Register from "../pages/register/Register";

const route = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/new-order",
        element: <New_order />
    },
    {
        path: "/order",
        element: <Order/>
    },
    {
        path: "/language",
        element: <Language/>
    },
    {
        path: "/particle",
        element: <MyParticles/>
    },
]

export default route;