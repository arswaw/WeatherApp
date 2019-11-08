const TestsTemplate = `
<div style="border: 2px solid black">
    <h1>Tests Page</h1>
    <p>Refer to README for more information</p>
    
    <h3>Kelvin conversion:</h3>
    <p>Given an array {{kelvinData}}</p>
    <p>The function to convert Kelvin to Farenheit should yield:</p>
    <p>{{kelvinAnswers}}</p>
    <p>Based on a strict equality comparison, the function yields positive for all test cases.</p>
    <p>{{kelvinResults}}</p>
    <p>If we modify one of the output values, 26 to 27, the test would fail.</p>
    <hr>
    <h3>24 hour time conversion</h3>
    <p>Given an array {{HourData}}</p>
    <p>The function to convert 24hr time should yield:</p>
    <p>{{HourAnswers}}</p>
    <p>Based on a strict equality comparison, the function yields positive for all test cases.</p>
    <p>{{HourResults}}</p>
    <p>As before, if we modify one of the output values, 0 to 1, the test would fail.</p>
    <hr>
</div>
`

export { TestsTemplate }
