require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db')
const session = require('express-session')
const passport = require('passport')
const MongoStore = require('connect-mongo')

const app = express()

const port = process.env.PORT;

app.use(session({
    secret:"duck",
    resave: false,
    saveUninitialized:true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    })
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(express.urlencoded({extended:true}))
app.use(express.json())


//
connectDB();


//static files
app.use(express.static('public'))


//template 
app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

//routing
app.use('/', require('./server/routes/auth'))
app.use('/', require('./server/routes/index'))
app.use('/', require('./server/routes/catalog'))

//Handle 404
app.get('*', function(req,res){
    res.status(404).render('404', {layout: './layouts/404'})
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})