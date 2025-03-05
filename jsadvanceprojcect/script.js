let inputbox = document.querySelector('.input_text_box');
let searchbtn = document.querySelector('.search_btn');
let weatherimg = document.querySelector('.weather_img_box');
let temperature = document.querySelector('.degree_temp');
let description = document.querySelector('.temp_wind');
let humidity = document.querySelector('.humidity');
let windspeed = document.querySelector('.wind-speed');
let locationnotfound = document.querySelector('.location-not-found');
let bottomcontainer = document.querySelector('.bottom_container');

// async function checkweather(city){
//     const apiKey = "749a8d3cd5cc2642d2cd44f14b245828";
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
//     let weatherdata = await fetch(`${url}`).then(response =>response.json());
//     // let weatherdata = await promise.json();
//     if(weatherdata.cod === '404'){
//         locationnotfound.style.display = 'flex';
//         bottomcontainer.style.display = 'none';
//         return;
//     }
//     if(weatherdata.cod === ''){
//         locationnotfound.style.display = 'flex';
//         bottomcontainer.style.display = 'none';
//         return;
//     }
    
    
//     locationnotfound.style.display = 'none';
//     bottomcontainer.style.display = 'flex';

//  temperature.innerHTML = `${Math.round(weatherdata.main.temp-273.15)}°C`;
//  description.innerHTML =`${weatherdata.weather[0].description}`;
//  humidity.innerHTML = `${weatherdata.main.humidity}%`;
//  windspeed.innerHTML = `${weatherdata.wind.speed}Km/H`;

//  switch(weatherdata.weather[0].main){
//     case 'Clouds': 
//         weatherimg.src = "/Weather App/assets/cloud.png"
//     break;
//     case 'Clear':
//     weatherimg.src = "/Weather App/assets/clear.png"
//     break;
//     case 'Rain':
//         weatherimg.src = "/Weather App/assets/rain.png"
//     break;
//     case 'Mist':
//         weatherimg.src = "/Weather App/assets/mist.png"
//     break;
//     case 'Snow':
//         weatherimg.src = "/Weather App/assets/snow.png"
//     break;
// }
// }

// searchbtn.addEventListener('click',()=>{
    
//     checkweather(inputbox.value);
// })


// step 1
// input value data show on clicking btn


async function checkweatherdata(city){
// alert(city);
  myapiskey = "749a8d3cd5cc2642d2cd44f14b245828";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myapiskey}`;
  let response = await fetch(url);
  let data = await response.json();
//   console.log(data.cod);
if(data.cod === `404`){
    console.log('error');
    locationnotfound.style.display = 'flex';
    bottomcontainer.style.display = 'none';
    return;
}
else{
    locationnotfound.style.display = 'none';
    bottomcontainer.style.display = 'flex';
}
// temperature.innerHTML = `${data.main.temp}`;//we see that whether is in kelvin change to celcius
temperature.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
description.innerHTML = `${data.weather[0].description}`;
humidity.innerHTML = `${data.main.humidity}%`;
windspeed.innerHTML = `${data.wind.speed}KM/H`;
console.log(data.weather[0].main)
// switch()
 switch(data.weather[0].main){
    case 'Clouds': 
        weatherimg.src = "/cloud.png"
    break;
    case 'Clear':
    weatherimg.src = "/clear.png"
    break;
    case 'Rain':
        weatherimg.src = "/rain.png"
    break;
    case 'Mist':
        weatherimg.src = "/mist.png"
    break;
    case 'Snow':
        weatherimg.src = "/snow.png"
    break;
}

}


searchbtn.addEventListener('click',()=>{
    checkweatherdata(inputbox.value)
})