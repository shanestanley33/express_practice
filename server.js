const express = require('express');
const path = require('path');
const app = express();
const restaurantDb = require('./data/restaurant-db')
//configure the app (app.set)
app.set('view engine', 'ejs');
//tell express where our tmplates are
app.set('views', path.join(__dirname, 'views'))


// mount middleware (app.use)

//mount routes



app.get('/', function (req, res) {
    res.redirect('/restaurants')
})

app.get('/home', function(req, res) {
    res.render('home');
})

app.get('/restaurants', function(req, res) {
const restaurants = restaurantDb.getAll();
res.render('restaurants/index', { restaurants })
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

