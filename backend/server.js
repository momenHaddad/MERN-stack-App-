require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const workoutRoutes = require('./routes/workouts');

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

app.get('/', (req, res) =>{
    res.json({mssg:'asdasd'})
})


//routes
app.use('/api/workouts', workoutRoutes)


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('listening on port ', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


