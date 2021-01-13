const fs = require('fs');
const path = ('path');
btnCreate = document.getElementById('btnCreate');
fileName = document.getElementById('fileName');
fileContents =document.getElementById('fileContents');
let pathName = path.join(__dirname,'Files');
btnCreate.addEventListener('click',function () {
    let file =path.join(pathName,fileName.value)
    let contents = fileContents.value
    
    fs.writeFile(file,contents,function(err) {
        if (err){
            return console.log(err) 
        }
        console.log('the file was created');
        
    })
    
})