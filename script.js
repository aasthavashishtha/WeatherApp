const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "a78f335d36a27d51d0f2a4a3dc2de45a";

let search = document.querySelector('button');

function getImg(temp){
    if(temp > 18)
        return "images/clear.png";
    else if(temp >12)
        return "images/clouds.png";
    else if(temp > 8)
        return "images/drizzle.png";
    else 
        return "images/humidity.png"
}

search.addEventListener("click",async ()=>{
    console.log("search working");
    let inp = document.querySelector('input');
    if(inp.value != ""){
        const data =await getWeather(inp.value);
        console.log(data);
        let temp = document.querySelector(".temp");
        temp.innerText = data.main.temp + "°c";
        let city = document.querySelector(".city");
        city.innerText = data.name ;
        let humidity= document.querySelector(".humidity");
        humidity.innerText = data.main.humidity + " %";
        let wind = document.querySelector(".wind");
        wind.innerText = data.wind.speed + " KM/H";
        let img = document.querySelector(".weather-icon");
        img.src = getImg(data.main.temp);
    }
    else{
        alert("Enter a city name");
    }
})


async function getWeather(city){
    try{
        const response = await fetch(apiUrl+`${city}` + `&appid=${apikey}`);
        var data = await response.json();
        return data;
    }
    catch(err){
        console.log("kuch toh gadbad hai daya : gadbad is ", err);
    }
}

