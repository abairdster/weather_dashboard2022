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
var apiKey = 'c14fd95fbffe9ef683b3279191cf1c93'
// var searchCityButton = $("#search_city_button");
// var searchButton = document.getElementById("search")



// searchCityButton.click(function(){
//     console.log (searchCityInput.val())
//     fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${searchCityInput.val()}&appid=${apiKey}`).then(function(response) {
//         return response.json()
//     }).then(function(response) {
//         console.log (response)
//     })
// }) 

var searchFormElement = document.getElementById('search-area')
var searchBTN = document.getElementById('search')
var fiveDay = document.getElementById('5dayWeatherContainer')

    
     var now = document.getElementById('today');
     now.textContent = moment().format('MMM Do YY');
     var tomorrow = document.getElementById('date1')
     tomorrow.textContent = moment().add(1, 'd').format('MMM Do YY')
     var date2 = document.getElementById('date2')
     date2.textContent = moment().add(2, 'd').format('MMM Do YY')
     var date3 = document.getElementById('date3')
     date3.textContent = moment().add(3, 'd').format('MMM Do YY')
     var date4 = document.getElementById('date4')
     date4.textContent = moment().add(1, 'd').format('MMM Do YY')
     var date5 = document.getElementById('date5')
     date5.textContent = moment().add(1, 'd').format('MMM Do YY')

        
var searchArea = function (event) {
    event.preventDefault();
        var search = searchFormEl.value.trim();
        if (search) {
            getCitySearch(search);
            searchFormElement.value = '';
        } else {
            alert ("Please use correct City Name.");
        }
    };
     



var getCitySearch = function (search) {
    var searchApi = 'https://api.openweathermap.org/data/2.5/weather?q=' + search  + '&units=imperial' +'&appid=c14fd95fbffe9ef683b3279191cf1c93';
    fetch(searchApi)
    .then(function (response) {
        if (response.ok) {
            console.log("response 1")
            return response.json()
    .then(function (data) {
    
    var citylatlon = JSON.parse(localStorage.getItem('search')) || [] 
        citylatlon.push( data.name);
    var latlonapi = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + data.coord.lat + '&lon=' + data.coord.lon +  '&units=imperial' + '&appid=c14fd95fbffe9ef683b3279191cf1c93';
    fetch(latlonapi)
    .then(function (response2){
        console.log("response 2")
        return response2.json();
    })
    .then (function(weatherDisplay) {
        console.log(weatherDisplay)
        
            var city = document.getElementById('cityAndDate')
            city.textContent =  data.name
            var currentTemp = document.getElementById('currentTemp')
            currentTemp.textContent = "Temp: " + data.main.temp + " °C"
            var currentWind = document.getElementById('currentWind')
            currentWind.textContent = "Wind: " + weatherDisplay.daily[0].wind_gust + " MPH"
            var currentHumidity = document.getElementById('currentHumidity')
            currentHumidity.textContent = "Humidity: " + data.main.humidity + " %"
            var uvi = document.getElementById('currentUvi')
            uvi.textContent = "UV-Index: " + weatherDisplay.current.uvi

             var weatherIcon1 = document.getElementById('weatherIcon1')
             var icon1 = data.weather[0].icon 
             console.log(icon1)
             var url1 = 'http://openweathermap.org/img/wn/' + icon1 + '@2x.png'
             console.log(url1)
             weatherIcon1.src = url1
             
             var weatherIcon2 = document.getElementById('weathermoji-1')
             var icon2 = weatherDisplay.daily[1].weather[0].icon
             console.log(icon2)
             var url2 = 'http://openweathermap.org/img/wn/' + icon2 + '@2x.png'
             console.log(url2)
             weatherIcon2.src = url2
        
            var weatherIcon3 = document.getElementById('weathermoji-2')
            var icon3 = weatherDisplay.daily[2].weather[0].icon
            console.log(icon3)
            var url3 = 'http://openweathermap.org/img/wn/' + icon3 + '@2x.png'
            console.log(url3)
            weatherIcon3.src = url3
        
            var weatherIcon4 = document.getElementById('weathermoji-3')
            var icon4 = weatherDisplay.daily[3].weather[0].icon
            console.log(icon4)
            var url4 = 'http://openweathermap.org/img/wn/' + icon4 + '@2x.png'
            console.log(url4)
            weatherIcon4.src = url4
        
            var weatherIcon5 = document.getElementById('weathermoji-4')
            var icon5 = weatherDisplay.daily[4].weather[0].icon
            console.log(icon5)
            var url5 = 'http://openweathermap.org/img/wn/' + icon5 + '@2x.png'
            console.log(url5)
            weatherIcon5.src = url5
        
            var weatherIcon6 = document.getElementById('weathermoji-5')
            var icon6 = weatherDisplay.daily[5].weather[0].icon
            console.log(icon6)
            var url6 = 'http://openweathermap.org/img/wn/' + icon6 + '@2x.png'
            console.log(url6)
            weatherIcon6.src = url6

            uviColor = weatherDisplay.current.uvi
             if (uviColor <= 2 ) {
                uvi.style.backgroundColor = 'green'
             } else if (uviColor >= 3 && uviColor <= 5) {
                uvi.style.backgroundColor = 'yellow'
             } else if (uviColor >= 6 && uviColor <= 7) {
                uvi.style.backgroundColor = 'orange'
             } else if ( 7 >= uviColor && uviColor <= 10) {
                uvi.style.backgroundColor = 'red'
             } else {
                uvi.style.backgroundColor = 'purple'
             }

        var temp1 = document.getElementById('temp1')
        temp1.textContent = "Temp: " + weatherDisplay.daily[1].temp.day + " °C"
        var wind1 = document.getElementById('wind1')
        wind1.textContent = "Wind: " + weatherDisplay.daily[1].wind_gust + " MPH"
        var humid1 = document.getElementById('humid1')
        humid1.textContent = "Humidity: " + weatherDisplay.daily[1].humidity + " %"
        
        var temp2 = document.getElementById('temp2')
        temp2.textContent = "Temp: " + weatherDisplay.daily[2].temp.day + " °C"
        var wind2 = document.getElementById('wind2')
        wind2.textContent = "Wind: " + weatherDisplay.daily[2].wind_gust + " MPH"
        var humid2 = document.getElementById('humid2')
        humid2.textContent = "Humidity: " + weatherDisplay.daily[2].humidity + " %"
        
        var temp3 = document.getElementById('temp3')
        temp3.textContent = "Temp: " + weatherDisplay.daily[3].temp.day + " °C"
        var wind3 = document.getElementById('wind3')
        wind3.textContent = "Wind: " + weatherDisplay.daily[3].wind_gust + " MPH"
        var humid3 = document.getElementById('humid3')
        humid3.textContent = "Humidity: " + weatherDisplay.daily[3].humidity + " %"
        
        var temp4 = document.getElementById('temp4')
        temp4.textContent = "Temp: " + weatherDisplay.daily[4].temp.day + " °C"
        var wind4 = document.getElementById('wind4')
        wind4.textContent = "Wind: " + weatherDisplay.daily[4].wind_gust + " MPH"
        var humid4 = document.getElementById('humid4')
        humid4.textContent = "Humidity: " + weatherDisplay.daily[4].humidity + " %"
        
        var temp5 = document.getElementById('temp5')
        temp5.textContent = "Temp: " + weatherDisplay.daily[5].temp.day + " °C"
        var wind5 = document.getElementById('wind5')
        wind5.textContent = "Wind: " + weatherDisplay.daily[5].wind_gust + " MPH"
        var humid5 = document.getElementById('humid5')
        humid5.textContent = "Humidity: " + weatherDisplay.daily[5].humidity + " %"
        });
            
                console.log(data)
            }); 
        } else {
            alert('Error: ' + response.statusText);
        }
    })
};


searchBTN.addEventListener('click', searchArea ) 























































    
       
    
    
   



    

    
    







