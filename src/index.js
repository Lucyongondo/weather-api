// require('dotenv').config();
// console.log(process.env.API_KEY)
function component() {
    const elem = document.createElement('div')
  
    elem.innerHTML = `Hello ${process.env.NAME}`
  
    return elem
  }
  
  document.body.appendChild(component())
  let weather = {
   
    // "apiKey": "28c6642499mshe0c5958357bdaa8p1f70e8jsn0416472e07fc"
    "apiKey": "9899c1eca560aae5ff18aadfe9acc277",
    fetchWeather: function(city){
        fetch(
            // "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=9899c1eca560aae5ff18aadfe9acc277"
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        )
        .then((response)=> response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
      const { name } =  data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
    //   console.log(name,icon,description,temp,humidity,speed)
      document.querySelector(".city").innerText = "weather in " + name;
      document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText= `Humidity: ${humidity}%`;
      document.querySelector(".wind").innerText = `Wind Speed ${speed}km/h`;
      document.querySelector(".weather").classList.remove("loading");
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}
document
    .querySelector(".search button")
    .addEventListener('click', function(){
        weather.search();
}); 
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if (event.key == "Enter"){
        weather.search();
    }
})