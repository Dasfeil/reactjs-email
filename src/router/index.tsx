import React from 'react'
import App from '../App'
import Messages from './route/Message/index'
import Contacts from './route/Contact/index'
import Preferences from './route/Preference/index'
import {createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "messages",
                element: <Messages/>
            },
            {
                path: "contacts",
                element: <Contacts/>
            },
            {
                path: "preferences",
                element: <Preferences/>
            }
        ]
    },
])

export default router