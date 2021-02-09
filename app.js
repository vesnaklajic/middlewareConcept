const express = require('express');
const app = express();

function info(rea,res,next){
console.log("Its working");
next();

}

app.use(('/contact'),function info(req, res, next) { //using only on 'contact' page
    console.log('We got request: ' + req.url);
    next();
}); //telling express which function to use 

app.get('/', (req, res) => {//request
    //info(req,res);//our function INFO is now a middleware       
    res.send("Home page");//response
})
app.get('/contact', (req, res) => {//request
    // info(req,res);//our function INFO is now a middleware       
    res.send("Contact page");//response
})
app.get('/about',info, (req, res) => {//  INFO as a middleware in the arguments  
    //info(req,res);//our function INFO is now a middleware       
    res.send("About page");//response
})


app.listen(3500, () => {
    console.log("go server on port 3500");
})
