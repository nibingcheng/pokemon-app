const { query } = require('express');
const express = require('express');
const app = express();

// const fruits = ['apple', 'banana', 'pear', 'apple'];
// GET route
// app.get("/somedata", (req, res) => {
//     res.send('Here is your info');
// });

// Get route for awsome
// app.get('/fruits/awsome', (req, res)=>{
//     res.send('Fruits are awsome');
// })

// app.get('/fruits/count', (req, res)=>{
//     let fruit = req.query.fruit;
//     let count = fruits.filter((val) => {
//         return val === fruit;
//     }).length;
//     res.send(`The number of available ${fruit}s are ${count}`);
// })

//GET route for fruits
// app.get('/fruits/:index', (req, res)=> {
// res.send(fruits[req.params.index])
// })


app.listen(3000, ()=>{
    console.log('Server is running');
})