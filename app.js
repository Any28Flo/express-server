const express = require ('express');
//We create our own server named app
//Express server handling requests and responses
const app = express();
//Make everything inside of public/available
app.use(express.static('public'));

//our first route

app.get('/' , (req, res, next) =>{
    console.log(req);
    console.log(__dirname);
    res.sendFile(__dirname + '/views/home-page.html');

})
//Create a new rute
app.get('/cat' , (req,res, next) =>{
    res.sendFile(__dirname + 'views/cat-page.html');
});

//Server started
app.listen(3000 , () =>{
    console.log("My first server with express")
})