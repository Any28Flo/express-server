const express = require ('express');
//We create our own server named app
//Express server handling requests and responses
const app = express();

//our first route

app.get('/' , (req, res) =>{
    console.log(req);
    res.send('<h1>Welcome ironhacker</h1>');

})

//Server started
app.listen(3000 , () =>{
    console.log("My first server with express")
})