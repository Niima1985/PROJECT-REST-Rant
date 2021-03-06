//import React
const React = require('react')

// Create a Def function that has one parameter html and return statement that includes the HTML skeleton

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <link rel= "stylesheet" href= "/css/style.css"></link>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/places/new">New Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def

