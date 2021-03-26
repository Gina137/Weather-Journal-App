// Require Express to run server and routes
const express=require("express");
// Start up an instance of app
const app=express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors=require("cors");
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
//set port
const port=3000;
const server=app.listen(port,listening);
function listening()
{
    console.log(`server is Running from port:${port}`);
}
// Setup empty JS array to act as endpoint for all routes
projectData =[];
//get request
app.get('/data',gettingData);
function gettingData(req,res)
{
    res.send(projectData);
    console.log(projectData);
}
//post request
app.post('/weather',postingData)
function postingData(req,res)
{
    newEntry=
    {
        date:req.body.date,
        temp:req.body.temp,
        content:req.body.content
    }
    console.log(newEntry);
    projectData.push(newEntry);
    // console.log(projectData);
}