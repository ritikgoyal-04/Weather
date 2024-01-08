const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '81e74df727msheb7ca6060b78362p1304efjsnd2e5b7e4614e',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};


const searchBtn = document.querySelector(".js");
const searchBox = document.querySelector(".search input");
const cityNameElement = document.querySelector(".city-place");
const weatherIcon = document.querySelector(".weather-icon");


const getWeather = (city)=>{
  searchBox.value = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city,options)
    .then(response => response.json())
    .then((response)=>{
      console.log(response)
      cityNameElement.textContent = city; 

      if(response.temp == undefined){
        document.querySelector(".error").style.display = "block"; 
        document.querySelector(".weather").style.display = "none"; 
      }else{   
        document.querySelector(".temp").innerHTML= Math.round(response.temp)+ "°c";
        document.querySelector(".humidity").innerHTML=response.humidity + "%";
        document.querySelector(".wind").innerHTML=response.wind_speed + " km/h";
        
        // if(response.temp >= 30){
        //   weatherIcon.src = "Weather/clear.png";
        // }else if(response.temp <= 30 && response.temp >22 ){
        //   weatherIcon.src = "Weather/mist.png";
        // }else if(response.temp <= 22 && response.temp >16){
        //   weatherIcon.src = "Weather/clouds.png";
        // }else if(response.temp <= 16 && response.temp >8 ){
        //   weatherIcon.src = "drizzle.png";
        // }else if(response.temp <= 8 && response.temp >4){
        //   weatherIcon.src = "rain.png";
        // }else if(response.temp <= 4 ){
        //   weatherIcon.src = "snow.png";
        // }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none"; 
      }
      })
    
}

searchBtn.addEventListener("click",(e)=>{
  e.preventDefault()
  getWeather(searchBox.value)
})

