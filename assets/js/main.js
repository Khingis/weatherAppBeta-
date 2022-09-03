// APIkey 62aff6b295e737297f4bce84a007a095
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//https://api.openweathermap.org/data/2.5/weather?q=marburg&units=metric&appid=62aff6b295e737297f4bce84a007a095


let weatherApi=(city)=>{

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=62aff6b295e737297f4bce84a007a095`).then((response)=>response.json())
    .then((data)=>{
        const{name}=data;
        const {icon,description} =data.weather[0];
        const {temp,humidity} = data.main;
        const {speed}=data.wind;
        const {sunrise,sunset} =data.sys;
        console.log(sunrise);
        const sunriseDiv = new Date(1000*sunrise);
        const sunsetDiv = new Date(1000*sunset);

        document.querySelector('.city').innerHTML=`Weather in ${city}`;
        document.querySelector('.temp').innerHTML=`${temp}°`;
        document.querySelector('.icon').src= `http://openweathermap.org/img/w/${icon}.png`;
        document.querySelector('.sunrise').innerHTML=`Sun will be awake at ${sunriseDiv}`; 
        document.querySelector('.sunset').innerHTML=`Sun will going to sleep at ${sunsetDiv}`;
        document.querySelector('.discription').innerHTML=`${description}`;
        document.querySelector('.humidity').innerHTML=`${humidity}%`;
        document.querySelector('.wind').innerHTML=`Wind Speed ${speed}km/h`;
        
        document.body.style.backgroundImage=`url('http://source.unsplash.com/1600x900/?${name}')`
       
    });
};

document.querySelector('.search button').addEventListener('click',(event)=>{
    event.preventDefault();
    let cityName=document.querySelector('.search-bar').value.toUpperCase();
    console.log(cityName);
    weatherApi(cityName);

});

weatherApi('Berlin');