(()=>{document.body.appendChild(function(){const e=document.createElement("div");return e.innerHTML=`Hello ${process.env.NAME}`,e}());let e={apiKey:"9899c1eca560aae5ff18aadfe9acc277",fetchWeather:function(e){fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+"&units=metric&appid="+this.apiKey).then((e=>e.json())).then((e=>this.displayWeather(e)))},displayWeather:function(e){const{name:t}=e,{icon:n,description:r}=e.weather[0],{temp:c,humidity:i}=e.main,{speed:o}=e.wind;document.querySelector(".city").innerText="weather in "+t,document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+n+"@2x.png",document.querySelector(".description").innerText=r,document.querySelector(".temp").innerText=c+"°C",document.querySelector(".humidity").innerText=`Humidity: ${i}%`,document.querySelector(".wind").innerText=`Wind Speed ${o}km/h`,document.querySelector(".weather").classList.remove("loading")},search:function(){this.fetchWeather(document.querySelector(".search-bar").value)}};document.querySelector(".search button").addEventListener("click",(function(){e.search()})),document.querySelector(".search-bar").addEventListener("keyup",(function(t){"Enter"==t.key&&e.search()}))})();