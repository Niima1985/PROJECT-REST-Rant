// Get the environment variables
require('dotenv').config()
//Require needed node modules
const express = require('express')
//Initialized the app object
const app = express()
const methodOverride = require('method-override')

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//import the router that created in places.js
app.use('/places', require('./controllers/places'))

// Create a homepage route
app.get('/', (req, res) => {
    res.render('home')
})

// Create a Wildcard route
app.get('*', (req, res) => {
    res.render('error404')
})

// listen to a port number defined by a local environment variable
app.listen(process.env.PORT)
