import { CurrentTemplate } from '../templates/current-template.js'
import { WEATHER_API_KEY } from '../main.js'
/*global fetch*/

const Current = {
    template: CurrentTemplate,
    methods: {
      // Amusingly OpenWeatherMap returns the temperature... in Kelvin.
      convertKelvinToFarenheit(initialTemp) {
            return Math.floor((initialTemp - 273.15) * 9/5 + 32)
        }
    },
    mounted: async function() {
        console.info("Weather Key", WEATHER_API_KEY)
        const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=46545,us&appid=${WEATHER_API_KEY}`);
        
        const weatherData = await weather.json()
        
        this.currentTemp = this.convertKelvinToFarenheit(weatherData.main.temp)
        this.city = weatherData.name
        console.info(this.currentTemp, weatherData.main.temp)
    },
    data: function() {
        return {
            currentTemp: 0,
            city: "N/A",
            zip: 0
        }
    }
}

export default Current
