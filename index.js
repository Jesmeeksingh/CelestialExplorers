const apikey='ShJ5lrFi2JDMZ0DSaeYUaO6wFfwBi2ZXuYrTe7U1';
const url='https://api.nasa.gov/planetary/apod?';
let right =document.querySelector('.right-section');
let explore = document.querySelector('.explore-btn');
explore.addEventListener('click',()=>{
    
    let rightimg=document.querySelector('.right-section-image');
    rightimg.remove();
    
    let newrightimg = document.createElement('div');
    newrightimg.classList.add('right-section-image');
    right.appendChild(newrightimg);

    let dateinp = document.querySelector('.right-section input');
    let date =dateinp.value;
    let request = new XMLHttpRequest();
    request.open('GET',url+'date='+date+'&api_key='+apikey,true);
    request.send();
    request.onload = function(){
        if(request.status===200){
        let data = JSON.parse(request.responseText);
        let imgurl = data.hdurl;
        let image =document.createElement('img');
        image.src=imgurl;
        newrightimg.appendChild(image);
        }
        else{
            alert('error');
        }
    }
}) 