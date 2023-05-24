// Функция вывода времени и даты
function setTime() {
    let dateNow = new Date()
    let hours = dateNow.getHours()
    let minutes = dateNow.getMinutes()
    let seconds = dateNow.getSeconds()
    let day = dateNow.getDay()
    let date = dateNow.getDate()
    let month = dateNow.getMonth()
    let year = dateNow.getFullYear()

    // Изменение месяцев (значения выдаются в цифрах, они меняются на слова)
    switch (month) {
        case 0: month="января"; break;
        case 1: month="февраля"; break;
        case 2: month="марта"; break;
        case 3: month="апреля"; break;
        case 4: month="мая"; break;
        case 5: month="июня"; break;
        case 6: month="июля"; break;
        case 7: month="августа"; break;
        case 8: month="сентября"; break;
        case 9: month="октября"; break;
        case 10: month="ноября"; break;
        case 11: month="декабря"; break;
    }

    // Изменение дней недели (значения выдаются в цифрах, они меняются на слова)
    switch (day) {
        case 0: day="Воскресенье"; break;
        case 1: day="Понедельник"; break;
        case 2: day="Вторник"; break;
        case 3: day="Среда"; break;
        case 4: day="Четверг"; break;
        case 5: day="Пятница"; break;
        case 6: day="Суббота"; break;
    }

    // Добавление 0 к секундам если они меньше 10(было 4, стало 04)
    if (seconds < 10) {
        seconds = "0" + seconds
    }

    // Добавление 0 к минутам если они меньше 10(было 4, стало 04)
    if (minutes < 10) {
        minutes = "0" + minutes
    }

    // Добавление 0 к часам если они меньше 10(было 4, стало 04)
    if (hours < 10) {
        hours = "0" + hours
    }

    // Добавление времени
    let clock = document.querySelector("h1.time")
    clock.innerHTML = hours + ":" + minutes + ":" + seconds

    // Добавление даты
    let fullDate = document.querySelector("h2.date")
    fullDate.innerHTML = day + " " + date + " " + month + " " + year

    // Каждую секунду будет перезапускаться эта функция
    setTimeout(() => {
        setTime()
    }, 1000);
}



setTime()