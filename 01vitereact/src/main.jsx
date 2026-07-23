/* eslint-disable no-unused-vars */
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// eslint-disable-next-line react-refresh/only-export-components
function MyApp() {
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: "click here to visit google"
// }

const anotherElement = (
    <a href="https://google.com" target="_blank"> Visit Google </a>
)

const anotherUser = "chai"

// Parameters = tag, object(attributes), direct text, variables
const reactElement = React.createElement(
    'a',
    {href: "https://google.com", target: "_blank"},
    'click me to visit google',
    anotherUser
)

createRoot(document.getElementById('root')).render(
    // <MyApp />
    // <App />
    // <reactElement /> // error
    // anotherElement
    reactElement
)
