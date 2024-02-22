const fs = require("fs");

// synchronously and Asynchronously mathod 

// Asynchronous Mathod 

fs.open('abc.txt', (err,data)=>{
    if(err){
        console.log('Failed to open file');
    }
    else
    {
    console.log('File open sucesasafully');
    }  
})

// synronous Method 

//  fs.openSync('abc.txt');

//  console.log('File open successfuly');