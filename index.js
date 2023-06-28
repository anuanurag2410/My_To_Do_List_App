const express=require('express');
const port=8000;
const path=require('path');

const app=express();


//Setup of View Engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));




//Starting the express server
app.listen(port,function(err){
    if (err){
        console.log('Error in running the Server ',err);
    }
console.log("This is Our Express Server running at port:",port);
});