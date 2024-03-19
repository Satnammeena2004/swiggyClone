import { Fragment,StrictMode } from "react";
import {createRoot} from 'react-dom'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Root , {loader as rootLoader,action as rootAction} from "./routes/root";
import ErrorPage from "./routes/erroe-page";
import Contacts ,{loader as contactLoader} from '../react-router-sample/routes/contact'
import EditContact , {action as editAction} from "./routes/edit";
import { action  as destroyAction} from "./routes/destroy";



const router = createBrowserRouter([
    {
        path:'/',
        element: <Root/>,
        errorElement:<ErrorPage/>,
        loader:rootLoader,
        action:rootAction,
        children:[
            {
                path:'contacts/:contactId',
                element :<Contacts/>,
                loader:contactLoader,

            },
            {
                path:'contacts/:contactId/edit',
                element :<EditContact/>,
                loader:contactLoader,
                action:editAction,
            },
            {
                path:'contacts/:contactId/destroy',
                action:destroyAction,
            }
        ]
    },
    
])



function MyRoot(){

    return   <RouterProvider router={router} />
}

export default MyRoot;

