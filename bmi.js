document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input')
    const resultSpan = document.querySelectorAll('div')[1].children[0]
    const statusSpan = document.querySelectorAll('div')[1].children[1]
    const recommendationSpan = document.querySelectorAll('div')[1].children[2]

    function calculateBMI() {
        const weight = parseFloat(inputs[0].value)
        const height = parseFloat(inputs[1].value)

        if (isNaN(weight) || isNaN(height) || height <= 0) {
            resultSpan.textContent = 'Enter valid values'
            statusSpan.textContent = ''
            recommendationSpan.textContent = ''
            return;
        }

        const bmi = weight / Math.pow(height / 100, 2)
        resultSpan.textContent = `BMI: ${bmi.toFixed(1)}`

        let status = ''
        let recommendation = ''

        if (bmi < 18.5) {
            status = 'Underweight'
            recommendation = 'Consider a balanced diet and consult a healthcare provider.'
        } else if (bmi < 25) {
            status = 'Normal'
            recommendation = 'Maintain your healthy lifestyle.'
        } else if (bmi < 30) {
            status = 'Overweight'
            recommendation = 'Try to increase physical activity and watch your diet.'
        } else {
            status = 'Obese'
            recommendation = 'Seek advice from a healthcare professional for weight management.'
        }

        statusSpan.textContent = `Status: ${status}`
        recommendationSpan.textContent = `${recommendation}`
    }

    inputs.forEach(input => {
        input.addEventListener('input', calculateBMI)
    })
})
calculateBMI()