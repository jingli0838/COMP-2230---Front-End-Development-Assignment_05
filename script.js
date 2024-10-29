// config.js 

import { config } from './config.js';

const baseUrl = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos"

const myApiKey = config.NASA_API_KEY;

const dateNode = document.getElementById("earthDate");
//let selectedDate = dateNode.value;

//let url =`${baseUrl}?earth_date=${selectedDate}&api_key=${myApiKey}`

async function fetchPhotos(resourcePath){
    try {
        const response = await fetch(resourcePath);

        if(!response.ok){
            throw new Error(`HTTP Error: ${response.status}`)
        }

        // if response is good, use the JSON method to parse the response body
        return response.json();

        //const data = await response.json();
        //console.log(data)

    } catch(error){
        // handle the error
        console.error(`Failed to fetch: ${error.message}`);
    }
}



const buttonNode = document.querySelector("button");

buttonNode.addEventListener("click",function(){
    const selectedDate = dateNode.value;
    // check the selecteddate is valid or not
    if(!selectedDate){
        alert("please select a date.")
        return;
    }
   
    //fetch data
   let url =`${baseUrl}?earth_date=${selectedDate}&api_key=${myApiKey}`;
   fetchPhotos(url).then(data => console.log(data));

    // display the photos 
   displayPhotos(url,selectedDate);
})



async function displayPhotos(resourcePath,date){
    const containerNode = document.getElementById("marsPhotosContainer");
    // clear the old photos
    containerNode.innerHTML = "";
    // add a title of the photos
    const dateTitle = document.createElement('h2');
    const headerMessage = `Mars Rover Photos on ${date} `;
    dateTitle.textContent = headerMessage;
    containerNode.append(dateTitle);

    //fetch the data
    const marsPhotosData = await fetchPhotos(resourcePath);
    // check the array is empty or not
    if(marsPhotosData.photos.length === 0){
        let errorMessage = `No photo taken on ${date}`;
        
        containerNode.innerHTML= errorMessage;
        return;
    }

    let photoNumber = 0;
    marsPhotosData.photos.forEach(photo => { 
        //destructuring
        const {camera:{full_name},
            sol, img_src} = photo;
        
        //Select 3 photos to display
        if(photoNumber <3){
            const imgNode = document.createElement('img');
            imgNode.src = img_src;
            //imgNode.title = `Taken by ${camera.full_name} on sol ${sol}`
            containerNode.append(imgNode);
            // add the information of the camera
            const textNode = document.createElement('p');
            textNode.textContent = `Taken by ${full_name} on sol ${sol}`
            containerNode.append(textNode);
            photoNumber ++;
        }
        
    });
}


