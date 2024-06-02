let input = document.getElementById("cityname")
const weatherList = document.getElementById("weatherlist");
// const weatherIcon = document.querySelector("weather-icon");

const apikey = "62f87ae0eb310e576045c9c21d962de7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function addCity(){
    let tempCity = input.value ;
    input.value="";
    const response = await fetch(apiUrl + tempCity + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

        let li = document.createElement("div");
        li.className="weather-list-item";
        // let div = document.createElement("div");
        // div.className="weather-info";
        
        // let h2 = document.createElement("h2");
        // h2.className ="location";
        // h2.innerHTML = data.name;

        // let p = document.createElement("p");
        // p.className="temperature";
        // p.innerHTML =  `${Math.round(data.main.temp)}°C`;

        // let p2 = document.createElement("p");
        // p2.className="description";
        // p2.innerHTML = data.weather[0].description;

        // div.appendChild(h2);
        // div.appendChild(p);
        // div.appendChild(p2);
        
            // Create the card div
            const card = document.createElement('div');
            card.className = 'card';
        
            // Create the weather div
            const weather = document.createElement('div');
            weather.className = 'weather';
        
            // Create and append the weather icon
            const weatherIcon = document.createElement('img');
            weatherIcon.className = 'weather-icon';
            //weatherIcon.src = "images/clouds.png";
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "images/clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "images/clear.png";
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "images/rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "images/drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "images/mist.png";
            }
            else if(data.weather[0].main == "Haze"){
                weatherIcon.src = "images/mist.png";
            }
            
            // weatherIcon.src = 'images/rain.png';
            
            weather.appendChild(weatherIcon);

       

            // Create and append the temperature
            const temp = document.createElement('h1');
            temp.className = 'temp';
            temp.textContent = `${Math.round(data.main.temp)}°C`;
            weather.appendChild(temp);
        
             // Create and append the city name
             const city = document.createElement('h2');
             city.className = 'city';
             city.textContent = data.name;
             weather.appendChild(city);
           
        
            // Create the details div
            const details = document.createElement('div');
            details.className = 'details';
        
            // Create and append the first column for humidity
            const col1 = document.createElement('div');
            col1.className = 'col';
        
            const humidityIcon = document.createElement('img');
            humidityIcon.src = 'images/humidity.png';
            col1.appendChild(humidityIcon);
        
            const humidityText = document.createElement('div');
        
            const humidityValue = document.createElement('p');
            humidityValue.className = 'humidity';
            humidityValue.textContent = `${data.main.humidity}%`;
            humidityText.appendChild(humidityValue);
        
            const humidityLabel = document.createElement('p');
            humidityLabel.textContent = 'humidity';
            humidityText.appendChild(humidityLabel);
        
            col1.appendChild(humidityText);
            details.appendChild(col1);
        
            // Create and append the second column for wind speed
            const col2 = document.createElement('div');
            col2.className = 'col';
        
            const windIcon = document.createElement('img');
            windIcon.src = 'images/wind.png';
            col2.appendChild(windIcon);
        
            const windText = document.createElement('div');
            windText.id = 'wind';
        
            const windValue = document.createElement('p');
            windValue.className = 'wind';
            windValue.textContent = `${data.wind.speed}km/h`;
            windText.appendChild(windValue);
        
            const windLabel = document.createElement('p');
            windLabel.textContent = 'wind speed';
            windText.appendChild(windLabel);
        
            col2.appendChild(windText);
            details.appendChild(col2);
        
            // Append the details div to the weather div
            weather.appendChild(details);
        
            // Append the weather div to the card div
            card.appendChild(weather);

          
       li.appendChild(card);
        

         let span2 = document.createElement("button")
         span2.innerHTML="\u00d7";
         span2.className = "delete";
         li.appendChild(span2);

         weatherList.appendChild(li);
         saveData();
       
    
}

weatherList.addEventListener("click", function(e){
    if(e.target.className === "delete"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData()
{
    localStorage.setItem("savedData",weatherList.innerHTML )
}
function showData()
{
    weatherList.innerHTML = localStorage.getItem("savedData");
}
//console.log( localStorage.getItem("savedData"))
showData();