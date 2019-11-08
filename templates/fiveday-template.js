const FiveDayTemplate = `
    <div>
        <div>
            <h3>5 Day Forecast for Mishawaka</h3>
            <input type="checkbox" id="checkbox" v-model="showSimplifiedView">
            <label for="checkbox">{{ showSimplifiedView ? "Show all hours view" : "Show simplified view" }}</label>
        </div>
        <div v-if="!showSimplifiedView" v-for="day of forecasts">
                <div>
                    <div class="pretty-box-top">
                        <img v-bind:src=retrieveOWPIcon(day)>
                        <h1>{{findDayOfWeek(day)}} {{renderHumanReadableHour(day)}}</h1>
                    </div>
                    <div class="pretty-box">
                        <h1>{{day.main.temp}}F</h1>
                    </div>
                </div>
        </div>
        <div v-if="showSimplifiedView" v-for="day of grabOneForecastFromEachDay(forecasts, 9)">
            <div>
                    <div class="pretty-box-top">
                        <img v-bind:src=retrieveOWPIcon(day)>
                        <h1>{{findDayOfWeek(day)}} {{renderHumanReadableHour(day)}}</h1>
                    </div>
                    <div class="pretty-box">
                        <h1>{{day.main.temp}}F</h1>
                    </div>
                </div>
        </div>
    </div>
`

export { FiveDayTemplate }
