/* Global Variables */
// DATE
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
//base URL & API KEY 
let baseUrl='http://api.openweathermap.org/data/2.5/forecast?zip=';
const apikey='&appid=00c6244fc5ec247a3af41db55cee1e24&units=imperial';
// selecting zip code and feeling
const zipcode = document.getElementById('zip');
const feelings=document.getElementById('feelings');
//getting showing box to make it visible
const result=document.getElementById('result');
//buton
const generate=document.getElementById('generate');
// Event listener to add function to existing HTML DOM element
generate.addEventListener("click",action)
/* Function called by event listener */
function action(event)
{
    console.log(feelings.value);
    console.log(zipcode.value);
    result.style.display="block";
    getdata(baseUrl,zipcode.value,apikey)
    //chaining promises
   .then(function(apidata)
    {console.log(apidata);
    //postcall
    postData('/weather',{date:newDate,temp:apidata.list[3].main.temp,content:feelings.value});
    updateUi();   
    })
}
/* Function to GET Project Data */
/* Function to GET Web API Data*/
const getdata=async(baseUrl,zipcode,apikey)=>
{
    const response=await fetch(baseUrl+zipcode+apikey);
    try
    {
        const apidata=await response.json();
        console.log(apidata)
        return apidata;
    }
    catch(error)
    {
        console.log("error",error);
    }
}
/* Function to POST data */
const postData=async(url="",data={})=>
{
    console.log(data)
    const response=await fetch(url,
        {
                method: 'POST', 
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
        })
    try
    {
        const newData=await response.json();
        console.log(newData);
        return newData;
    }
    catch(error)
    {
        console.log("error",error);
    }
}
/*Function To Update UI*/
const updateUi =async()=>
{
    const request=await fetch('/data');
    try
    {
        const allData=await request.json();
        document.getElementById('date').innerHTML="Date is : " + newDate;
        document.getElementById('temp').innerHTML="Tempreture is : " + allData[0].temp;
        document.getElementById('content').innerHTML="Content is : " + feelings.value;
        console.log(allData);
        return allData;
    }
    catch(error)
    {
        console.log("error",error);
    }
}