const spans = document.querySelectorAll("span:first-of-type")

function setClock(){
    const hour =new Date().getHours()
    const minute =new Date().getMinutes()
    const second =new Date().getSeconds()

    spans[0].textContent = hour > 12 ? `${hour -12 < 10 ? '0': ''}${hour - 12}` : `${hour < 10 ? '0': ''}${hour}`
    spans[1].textContent = minute < 10 ? `0${minute}` : minute
    spans[2].textContent =second < 10 ? `0${second}` : second

    setTimeout(setClock, 1000)
}
setClock()