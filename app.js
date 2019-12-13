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
//Create a new rute
app.get('/cat' , (req,res, next) =>{
    res.send(`
    <!doctype html>
    <html>
        <head>
            <meta charset ="utf-8">
            <title>Cat</title>
            <link rel = "stylesheet" href ="/stylesheet/styele.css"/>   
        </head>
        <body>
            <h1>Cat image</h1>
            <p>This is my second rute</p>
            <img src="/images/cool-cat.jpg"/>
        </body>

    </html>
    `)
})

//Server started
app.listen(3000 , () =>{
    console.log("My first server with express")
})