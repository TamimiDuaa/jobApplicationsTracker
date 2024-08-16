
let application="";

console.log(sessionStorage.getItem('application'));
if(sessionStorage.getItem('application')===undefined || sessionStorage.getItem('application')===null){
  application = "";
}
else{
  application+=sessionStorage.getItem('application');
}

try {
  // select data and store it to variable
document.getElementById('submitBtn').addEventListener("click",(e)=>{
  e.preventDefault();
  
    const companyName=document.getElementById("CompanyName").value;
    const position= document.getElementById("position").value;
    const appliedDate=document.getElementById("appliedDate").value;
    const appStatus= document.getElementById("appStatus").value;
    const notes= document.getElementById("Notes").value;
  
    application += companyName+","+position+","+appliedDate+","+appStatus+","+notes+";";
  console.log(application);
  
  sessionStorage.setItem('application',application);
  
   window.location.href = "applications.html";
})
} catch (error) {
  console.log(error);
}

try {
  
window.onload = function() {
  // Get the value from sessionStorage
    //creating a table row 
  
    const tableBody = document.querySelector(".table-body");

    
    const appsArray = sessionStorage.getItem('application').split(";");
  console.log(appsArray.length);
    for(let i=0;i<appsArray.length-1;i++){
      console.log("appsArray "+ appsArray[i]);
      let app =  appsArray[i].split(",");
      let tr = document.createElement("tr");
        
        let companyNameTd = document.createElement("td");
        companyNameTd.innerHTML =app[0];
        let positionTd = document.createElement("td");
        positionTd.innerHTML = app[1];
        let appliedDateTd = document.createElement("td");
        appliedDateTd.innerHTML = app[2];
        let appStatusTd =  document.createElement("td");
        appStatusTd.innerHTML =app[3];
        let notesTd = document.createElement("td");
        notesTd.innerHTML = app[4];
      
        tr.appendChild(companyNameTd);
        tr.appendChild(positionTd);
        tr.appendChild(appliedDateTd);
        tr.appendChild(appStatusTd);
        tr.appendChild(notesTd);
      
      tableBody.appendChild(tr);
      

    }
   
  }  

} catch (error) {
  
}

// For Settings Page
try {
  
const animalDiv = document.querySelector(".animalsImages");

// upload images from Images/animals file
  for(let i=1;i<=16;i++){

    let img = document.createElement("img");
    let URL = `images/animals/${i}.jpg`;
    img.src = URL;
    img.setAttribute('onclick','changeProfile('+i+')');
    img.classList.add("image");
  
    animalDiv.appendChild(img);
  }
  
  function changeProfile(url){
    let profilePic =  document.querySelector(".profilePic");
    profilePic.src ="images/animals/"+url+".jpg";
  
  }

} catch (error) {
  console.log(error);
}