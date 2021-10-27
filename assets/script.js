
var searchButton = $(".btn-primary");
//the OpenWeather api key used for this project
var apiKey = "07b013a2cc611e90acf79572755f7c1f";

//grabbing the values from localastorage using the key 
var previousSearchList = JSON.parse(localStorage.getItem("city")) || [];

// Forloop for persisting the data onto HMTL page
for (var i = 0; i < previousSearchList.length; i++) {

    var city = previousSearchList[i];
    // console.log(localStorage.getItem("City"));
    //create a button or li tag 
    var buttonELement = $("<button>");
    //Set the text of the button 
    buttonELement.textContent = city;
    //add the buttons to the history div 
    $("#history").append(buttonELement);
}

function getForecast() {
    // Variable for current weather working 
    var urlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&Appid=" + apiKey + "&units=imperial";
    // Variable for 5 day forecast working
    var urlFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput + "&Appid=" + apiKey + "&units=imperial";
    //grab value from the input field 

    //Call fetch using the url  
    //Based o nthe response show the data in thml element 
    //grab html by ID and set the text for the same }

}
