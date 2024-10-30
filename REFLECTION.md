# Can I explain what my code does?
- The whole project is a Mars Rover photo viewer that fetches images from NASA’s API based on a selected date. The html file has a date input form, a button, and a container to display photos. The javascript is the file to make the webpage functional with 4 main function: fetchPhotos(date), displayPhotos(photos, description), loadInitialPhotos() and Button Event Listener.
# What was my coding process?
- I created a fetchPhotos(date) function to fetch photos from the NASA API, selecting the first three photos returned. Then, created the structure of the html file. Also, I created a displayPhotos(photos, description) function with two parameters: photos and description. The displayPhotos function displays both the photos fetched by fetchPhotos and the description on the webpage.
- Next, I created loadInitialPhotos, a function that sets a specific default date. Inside loadInitialPhotos, I invoke fetchPhotos(date) with the default date, and then call displayPhotos(photos, description) to display the selected photos and description on the webpage by default.
- Then, I added an addEventListener to a button to trigger an event when the button is clicked. In the event callback, fetchPhotos(date) and displayPhotos(photos, description) are invoked so that photos for the selected date are displayed on the webpage
- After finishing the javascript code and html, I designed the style of the webpage on css file.
# What challenges did I have?
- At the start of the project, I had problems with showing the data fetched on the consol. The errors on the consol indicated it was caused by the if and return satement and undefied variable. When this issue was addressed, the rest part was easier than before.
# What would I do differently now?
- I think I will be more careful about execution order of the code and pay more attention to the details of the instruction.

# Resource: 
- How to Use the JavaScript Fetch API to Get Data from the NASA APOD API
https://sophiali.dev/javascript-fetch-api-with-nasa-api

- How to call a javascript function when page load
https://stackoverflow.com/questions/3842614/how-do-i-call-a-javascript-function-on-page-load