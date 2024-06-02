import {createBrowserRouter} from "react-router-dom";
import Error from "../Components/Error";
import {News} from "../Components/News";

export const router = createBrowserRouter([
     {
        path: '/news',
        element: <News/>,
        errorElement: <Error/>,
    }
]);