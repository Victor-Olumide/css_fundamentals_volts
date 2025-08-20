const spans = document.querySelectorAll('section div span:first-of-type')

const countdownDate = new Date()
countdownDate.setMonth(countdownDate.getMonth() + 3)

function startCountdown() {
    const time = new Date().getTime();
    const distance = countdownDate.getTime() - time

    const totalSeconds = Math.floor(distance/1000)
    const totalMinutes = Math.floor(totalSeconds / 60)
    const totalHours = Math.floor(totalMinutes/60)
    const totalDays = Math.floor(totalHours/24)
    const totalWeeks = Math.floor(totalDays/7)
    const totalMonths = Math.floor(totalWeeks/(365/12))

}


