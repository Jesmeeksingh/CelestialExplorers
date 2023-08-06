const apikey = "ShJ5lrFi2JDMZ0DSaeYUaO6wFfwBi2ZXuYrTe7U1";
const url = "https://api.nasa.gov/planetary/apod?";
let right = document.querySelector(".right-section");
let explore = document.querySelector(".explore-btn");
explore.addEventListener("click",()=>{
  let rightimg = document.querySelector(".right-section-image");
  let heading = document.querySelector(".heading-left");
  let discription = document.querySelector(".about-image");
  
  heading.textContent = "";
  discription.textContent = "";
  rightimg.innerHTML = "";

  let dateinp = document.querySelector(".right-section input");
  let date = dateinp.value;
  fetch(url+"date="+date+"&api_key="+apikey)
   .then(response =>{
    if(!response.ok){
      throw new Error("error occured man !!");
    }
    return response.json();
   })
   .then(data=>{
    let imgurl = data.hdurl;
    let explanation = data.explanation;
    let name = data.title;
    
    heading.textContent = name;
    discription.textContent=explanation
    
    let image = document.createElement("img");
    image.src = imgurl;
    rightimg.appendChild(image);
   })
   .catch(error =>{
    alert("error occured :(" , error.message);
   });

})
