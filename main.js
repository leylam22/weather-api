const api_key='09f689094bf848e5be3100904231805';

let searchCity = 'Leyland'

function getWeather(searchCity) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${searchCity}&aqi=no`)
    .then((x)=>x.json())
    .then((x)=>render(x))
    .catch((x)=>renderNotFound())
}

const container=document.querySelector('.container')
const weatherContainer = document.querySelector('.weather_container')
const search = document.querySelector('.search-bar')
const srch =document.querySelector('.search')
const searchBtn= document.querySelector('.search-btn')

search.addEventListener('keyup', (e)=>{
    searchCity=e.target.value.trim()
})

searchBtn.addEventListener('click', ()=>{
    getWeather(searchCity)
})

function render(weather) {
    const weatherContainer = document.querySelector('.weather_container')
    const name = weather.location.name
    const country= weather.location.country
    const time =  weather.location.localtime.slice(10,16)
    const tempC =weather.current.temp_c
    const text = weather.current.condition.text
    const icon = weather.current.condition.icon
    const windKph = weather.current.wind_kph
    const humidity = weather.current.humidity
    const feelsLike = weather.current.feelslike_c
    const uv = weather.current.uv

    weatherContainer.innerHTML=''

    const nameSpan=document.createElement('span')
    nameSpan.innerText=`${name}`
    nameSpan.className='city'
    const location_icon=document.createElement('i')
    location_icon.className=' fa-solid fa-location-dot fa-lg'
    const countrySpan=document.createElement('span')
    countrySpan.innerText=`${country} `
    countrySpan.className='country'
    countrySpan.appendChild(location_icon)
    const timeSpan=document.createElement('span')
    timeSpan.innerText=`${time}`
    timeSpan.className='time'
    const time_icon=document.createElement('i')
    time_icon.className='fa-solid fa-clock fa-lg'
    timeSpan.appendChild(time_icon)
    const tempSpan=document.createElement('span')
    tempSpan.innerText=`${tempC}°C`
    tempSpan.className='temp'
    const iconImg=document.createElement('img')
    iconImg.src=icon
    iconImg.className='icon'
    const img=document.createElement('div')
    img.className='img'

    img.appendChild(iconImg)
    weatherContainer.appendChild(img)

    const windKphSpan=document.createElement('span')
    windKphSpan.innerText=`Wind speed: ${windKph} kh/h`
    windKphSpan.className='windKph'
    const humiditySpan=document.createElement('span')
    humiditySpan.innerText=`Humidity: ${humidity}%`
    humiditySpan.className='humidity'
    const first=document.createElement('div')
    first.className='first'
    first.appendChild(windKphSpan)
    first.appendChild(humiditySpan)
    const feelsLikeSpan=document.createElement('span')
    feelsLikeSpan.innerText=`Feels Like: ${feelsLike}°C`
    feelsLikeSpan.className='feelsLike'
    const uvSpan=document.createElement('span')
    uvSpan.innerText=`UV: ${uv} Moderate`
    uvSpan.className='uv'
    const second=document.createElement('div')
    second.className='second'
    second.appendChild(feelsLikeSpan)
    second.appendChild(uvSpan)

    weatherContainer.appendChild(tempSpan)
    weatherContainer.appendChild(nameSpan)
    weatherContainer.appendChild(countrySpan)
    weatherContainer.appendChild(timeSpan)
    // weatherContainer.appendChild(windKphSpan)
    // weatherContainer.appendChild(humiditySpan)
    weatherContainer.appendChild(first)
    // weatherContainer.appendChild(feelsLikeSpan)
    // weatherContainer.appendChild(uvSpan)
    weatherContainer.appendChild(second)
}

function renderNotFound() {
    const weatherContainer = document.querySelector('.weather_container')
    weatherContainer.innerHTML=''
    const notFoundSpan = document.createElement('span')
    notFoundSpan.innerText='City is not found, please try again!'
    weatherContainer.appendChild(notFoundSpan)
}

getWeather(searchCity)





