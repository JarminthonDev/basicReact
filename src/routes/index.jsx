import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Detail from "../views/Details";
import Home from "../views/Home";
import Error404 from "../views/Error404";
import Profile from "../views/profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <Error404/>
    },
    {
        path: '/detail/:eventId',
        element: <Detail/>
    },
    {
        path:'/profile',
        element: <Profile/>,
        children:[
            {
                path:'my-info',
                element:<div>My info</div>
                // element:<My-info/>
            },
            {
                path:'liked-events',
                // element:<Liked-events></Liked-events>
            }
        ]
    }   

])

const MyRoutes = () => <RouterProvider  router={router} />

export default MyRoutes;