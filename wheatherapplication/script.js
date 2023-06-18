function fetchWheather(){
    let place=id_place.value
    

fetch(`https://api.openweathermap.org/data/2.5/weather?appid=8f9164d0bb1a347b51a7d0e25e247b6c&q=${place}&units=metric`)
.then(res=>res.json()).then(data=>displayWheather(data))
}

function displayWheather(data){
    let placename=data.name
    let temp=data.main.temp
    let mintemp=data.main.temp_min
    let maxtemp=data.main.temp_max
    let pressure=data.main.pressure
    let humidity=data.main.humidity
    let windspeed=data.wind.speed
    let winddegree=data.wind.deg
    let icon=data.weather[0].icon
    let desc=data.weather[0].description
    let feels_like=data.main.feels_like
    let htmlData=`
    <div class="card">
  <h5 class="card-header">Wheather forecasting</h5>
  <div class="card-body">
    
  
    <h5 class="card-title"><a><i class="fa-solid fa-location-dot"></i></a> ${placename}</h5>
    <p class="card-text"><a><i class=" fa-location-dot"></i></a><h2>${temp}<h2></p>
    <p class="card-text"><h2>${desc}<h2></p>
    <p class="card-text"><a><i class="fa-solid fa-temperature-three-quarters"></i></a><h2>${feels_like}<h2></p>
    <p class="card-text"><h2>${humidity}<h2></p>

    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
    
    `
    document.querySelector("#id_result").innerHTML=htmlData

    
}

function fetchWheatherbylocation(){
   navigator.geolocation.getCurrentPosition((p)=>{
    let lat=p.coords.latitude
    let long=p.coords.longitude
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=8f9164d0bb1a347b51a7d0e25e247b6c&units=metric`)
    .then(res=>res.json()).then(data=>displayWheather(data))
   
   
   })

  }