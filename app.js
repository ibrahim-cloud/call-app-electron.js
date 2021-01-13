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
    fs.appendFile(path  , " Name: "+  name + " <br> Number: " + number + "<br> ******<br>" + "\n"   , function(err) {
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
      path,
      " Name: "+ name + "<br> Number: " + number + "<br> Date: " + dateStr +"<br> ******<br>" + "\n",
      
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

    let histories = [];
    histories.push(data);
    // Change how to handle the file content
    console.log("The file content is : " + data);
    document.getElementById("CH").innerHTML = `
    <p> ${data}  </p>  
    `;
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

    let Conntt = [];
    Conntt.push(dataF);
    // Change how to handle the file content
    console.log("The file content is : " + dataF);
     document.getElementById("conT").innerHTML =  `
     <p> ${dataF}  </p>     
     ` ;
  });
};
app.whenReady().then(createWindow);
