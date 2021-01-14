const { app, BrowserWindow } = require("electron");
const fs = require("fs");
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("index.html");
}
function save() {
  let number = document.getElementById("Pnumber").value;
  let name = document.getElementById("name").value;
  let path = "./files/Contact.txt";
  
// check file
    if (fs.existsSync(path)) {
    fs.appendFile(path  , " Name : "+name+";"+ " Number : "+number+";" +"*****"+";"+ "\n"  , function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("new number saved");
      
      }
    });
  } 
  else {
        console.log("the file is not exists");
  }

 
}
const call = () => {
  let number = document.getElementById("Pnumber").value;
  let name = document.getElementById("name").value;
  let path = "./files/List.txt";
  var date = new Date();
  var dateStr =
    ("00" + date.getDate()).slice(-2) +"/" +("00" + (date.getMonth() + 1)).slice(-2) +"/" + 
    date.getFullYear() + " " +("00" + date.getHours()).slice(-2) + ":" +("00" + date.getMinutes()).slice(-2) +
    ":" + ("00" + date.getSeconds()).slice(-2);
    // check file
  if (fs.existsSync(path)) {
    fs.appendFile(
      path," Name : "+name+";"+ " Number : "+number+";" +" Date : "+dateStr+";"+"*****"+";" + "\n",
      
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Calling" +number);
          document.getElementById("Info").innerHTML = `${ "Number: " +  number + "<br>" + " Name: "+ name }`;
         ;
        }
      }
    );
  } else {
    console.log("the file is not exists");
    
  }
};

const Histo = () => {
  let path = "./files/List.txt";
  if (path === undefined) {
    console.log("No file selected");
    return;
  }

  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      alert("An error ocurred reading the file :" + err.message);
      return;
    }
    var str_array = data.toString().split('/n');
    var text ="";
    var i ;
    var j;
       for( i = 0; i < str_array.length; i++) {
        var cube = str_array[i];
        console.log( data.split('/n')[i])
        for( j = 0; j < cube.split(';').length; j++) {
             console.log( cube.split(';')[j]);
             text += cube.split(';')[j] + "<br>";

    }
    
  }
   document.getElementById("CH").innerHTML = text ;
  });
};
const Conntact = () => {
  let path = "./files/Contact.txt";
  if (path === undefined) {
    console.log("No file selected");
    return;
  }
  fs.readFile(path, "utf-8", (err, dataF) => {
    if (err) {
      alert("An error ocurred reading the file :" + err.message);
      return;
    }

    // let Conntt = [];
    // Conntt.push(dataF);

    var str_arrayF = dataF.toString().split('/n');
    var textF ="";
    var i ;
    var j;
       for( i = 0; i < str_arrayF.length; i++) {
        var cubeF = str_arrayF[i];
        console.log( dataF.split('/n')[i])
        for( j = 0; j < cubeF.split(';').length; j++) {
             console.log( cubeF.split(';')[j]);
             textF += cubeF.split(';')[j] + "<br>";

    }
    
  }
   document.getElementById("conT").innerHTML = "<p>" +textF + "</p>" ;
  });
};
app.whenReady().then(createWindow);
