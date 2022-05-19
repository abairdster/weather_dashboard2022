//Calling function ();
//Function ();
//Get stored cities from localStorage
//When form is submitted...
// This line will grab the city from the input box
    // Return from function early if submitted city is blank
    //Adding city-input to the city array
//Function get Response Weather 
//Clear content of today-weather
// Create a new table row element
    //Api to get UV index
    //Api to get 7-day forecast  
//Click function to each Li 
//Declare a variable to store the searched city


// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
var apiKey = "c14fd95fbffe9ef683b3279191cf1c93"
var searchHistoryList = $('#search-history-list');
var searchCityInput = $("#search_input");
var searchCityButton = $("#search_city_button");
var clearHistoryButton = $("#clear_history");
var currentCity = $("#current_city");
var currentTemp = $("#current_temp");
var currentHumidity = $("#current_humidity");
var currentWindSpeed = $("#current_wind_speed");
var UVindex = $("#uv_index");
var weatherContent = $("#weather-content");


searchCityButton.click(function(){
    console.log (searchCityInput.val())
    fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${searchCityInput.val()}&appid=${apiKey}`).then(function(response) {
        return response.json()
    }).then(function(response) {
        console.log (response)
    })
}) 




























































    
       
    
    
   



    

    
    







