const express = require ('express');
//We create our own server named app
//Express server handling requests and responses
const app = express();
//Make everything inside of public/available
app.use(express.static('public'));

//our first route

app.get('/' , (req, res, next) =>{
    console.log(req);
    res.send('<h1>Welcome ironhacker</h1>');

})

//Server started
app.listen(3000 , () =>{
    console.log("My first server with express")
})