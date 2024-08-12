
const animalDiv = document.querySelector(".animalsImages");

// upload images from Images/animals file


for(let i=1;i<=16;i++){

  let img = document.createElement("img");
  let URL = `./../images/animals/${i}.jpg`;
  img.src = URL;
  img.setAttribute('onclick','changeProfile('+i+')');
  img.classList.add("image");

  animalDiv.appendChild(img);
}

function changeProfile(url){
  let profilePic =  document.querySelector(".profilePic");
  profilePic.src ="/images/animals/"+url+".jpg";
  console.log(url);

}




