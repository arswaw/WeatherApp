import { FiveDayTemplate } from '../templates/fiveday-template.js'
import { WEATHER_API_KEY } from '../main.js'
/*global fetch*/

const FiveDay = {
    template: FiveDayTemplate,
    mounted: async function() {
        console.info("Weather Key", WEATHER_API_KEY)
        // Upon reading the documentation, I found out that you can have it return imperial to you automatically.
        const weather = await fetch(`https://api.openweathermap.org/data/2.5/forecast?units=imperial&zip=46545,us&appid=${WEATHER_API_KEY}`);

        const weatherData = await weather.json()

        this.forecasts = weatherData.list

        console.info(weatherData, this.forecasts)
    },
    data: function() {
        return {
            forecasts: [],
            showSimplifiedView: false
        }
    },
    methods: {
        // We need to find out what day of the week a forecast is on.
        findDayOfWeek(day) {
            switch (new Date(day.dt_txt).getDay()) {
                case 0:
                    return "Sunday"
                case 1:
                    return "Monday"
                case 2:
                    return "Tuesday"
                case 3:
                    return "Wednesday"
                case 4:
                    return "Thursday"
                case 5:
                    return "Friday"
                default:
                    return "Saturday"
            }
        },
        // We need to grab the 9AM temp prediction from each day.
        grabOneForecastFromEachDay(forecasts, hour) {
            return forecasts.filter(forecast => {
                return new Date(forecast.dt_txt).getHours() === hour
            })
        },
        renderOneFromEachDay() {
            return this.grabOneForecastFromEachDay(this.forecasts, 9)
        },
        renderHumanReadableHour(day) {
            const hour = new Date(day.dt_txt).getHours()

            return this.convert24hrTime(hour)
        },
        convert24hrTime,
        renderHumanReadableMonth(day) {
            switch (new Date(day.dt_txt).getMonth()) {
                case 0:
                    return "January"
                case 1:
                    return "February"
                case 2:
                    return "March"
                case 3:
                    return "April"
                case 4:
                    return "May"
                case 5:
                    return "June"
                case 6:
                    return "July"
                case 7:
                    return "August"
                case 8:
                    return "September"
                case 9:
                    return "October"
                case 10:
                    return "November"
                default:
                    return "December"
            }
        },
        renderHumanReadableDate(day) {
            return new Date(day.dt_txt).getDate()
        },
        // One could just use this, for simplicity, but it isn't clear whether or not
        // there is a JS date method which provides full month and day of week names.
        renderNativeDateString(day) {
            return new Date(day.dt_txt).toDateString()
        },
        retrieveOWPIcon(day) {
            return `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
        }
    }
}

function convert24hrTime(hour) {
    switch (hour) {
        case 0:
            return "12AM"
        case 12:
            return "12PM"
        default:
            return `${hour < 12 ? hour : hour - 12} 
                    ${hour >= 12 ? "PM" : "AM" }`.trim()
    }
}

export default FiveDay
