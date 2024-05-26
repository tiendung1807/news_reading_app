import {createBrowserRouter} from "react-router-dom";
import Error from "../component/Error";
import {News} from "../component/News";

export const router = createBrowserRouter([
     {
        path: '/news',
        element: <News/>,
        errorElement: <Error/>,
    }
]);