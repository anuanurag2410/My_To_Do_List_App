const express=require('express');
const port=8000;
const path=require('path');

const app=express();


//Setup of View Engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.get('/',async(req,res)=>{
    try{
        return res.render('home',{
            title:'My To Do List'
    });
    }
    catch(err)
    {
        console.log("Error n Fetching Details from DB",err);
        return res.status(500).send('internal Server error ');
    }
});



//Starting the express server
app.listen(port,function(err){
    if (err){
        console.log('Error in running the Server ',err);
    }
console.log("This is Our Express Server running at port:",port);
});