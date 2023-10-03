const express = require('express');
const path = require('path');
const app = express();
const todoDb = require('./data/restaurant-db')
//configure the app (app.set)
app.set('view engine', 'ejs');
//tell express where our tmplates are
app.set('views', path.join(__dirname, 'views'))


// mount middleware (app.use)

//mount routes



app.get('/', function (req, res) {
    res.redirect('/home')
})

app.get('/home', function(req, res) {
    res.render('home');
})


//get localhost:3000/todos
app.get('/restaurants', function(request, response) {
    response.render('restaurants/index', {
        restaurants: restaurantDb.getAll()
    })
})



app.listen(3000, function() {
    console.log('listening to port 3000')
})

