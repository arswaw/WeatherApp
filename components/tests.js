import { TestsTemplate } from '../templates/tests-template.js'
import { convertKelvinToFarenheit } from '../components/current.js'

// Importing a module dynamically was tricky
// without it being default. For now, let's
// make a copy of the function we want to export
// and figure out a better solution later.
function convert24hrTime(hour) {
    switch (hour) {
        case 0:
            return "12AM"
        case 12:
            return "12PM"
        default:
            return `${hour < 12 ? hour : hour - 12}${hour >= 12 ? "PM" : "AM" }`
    }
}

function equalityComparison(a, b, func) {
    return a === b
}

function equalityComparisonArray(a, b, func) {
    return a.map((elem, index) => {
        return func(elem) === b[index]
    })
}

const Tests = {
    template: TestsTemplate,
    mounted: function() {
      this.testKelvinConvert()  
      this.test24hourConvert()
    },
    methods: {
        testKelvinConvert() {
            this.kelvinResults = equalityComparisonArray(this.kelvinData, this.kelvinAnswers, convertKelvinToFarenheit) 
        },
        test24hourConvert() {
            this.HourResults = equalityComparisonArray(this.HourData, this.HourAnswers, convert24hrTime)
        }
    },
    data: function() {
        return {
            kelvinData : [256, 128, 200, 269.817],
            kelvinAnswers : [1, -230, -100, 26],
            kelvinResults: [],
            HourData: [0, 12, 3, 23],
            HourAnswers: ["12AM", "12PM", "3AM", "11PM"],
            HourResults: []
        }
    }
}

export default Tests
