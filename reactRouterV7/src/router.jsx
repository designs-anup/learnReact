import { createBrowserRouter } from "react-router";
import App from "./App";
import home from "./pages/home";
import about from "./pages/about";
import contact from "./pages/contact";
import signIn from "./pages/signIn";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: App, // as a layout,
        children: [
            {
                path: '',
                Component: home
            },
            {
                path: 'about',
                Component: about
            },
            {
                path: 'contact',
                Component: contact
            },
            {
                path: 'signIn',
                Component: signIn
            }
        ]
    }
])

