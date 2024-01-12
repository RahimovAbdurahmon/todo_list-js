import { getData } from "./async.js"
let date = document.querySelector(".date")
let time = document.querySelector(".time")
let weekDay = ["Sun" , "Mon",  "Tues" , "Wed" , "Thurs" , "Fri" , "Sut"]
let monthDay = ["Jan" , "Feb" , "March" , "Apr" , "May" , "Jun" , "July" , "Aug" , "Sep" , "Oct" , "Now" , "Dec"]

setInterval(() => {
    let newDate = new Date()
    let week = weekDay[newDate.getDay()]
    let month = monthDay[newDate.getMonth()]
    let day = newDate.getDate()
    let year = newDate.getFullYear()
    date.innerHTML = `${week} ${month} ${day} ${year}`
    let hour = newDate.getHours() < 10 ? "0" + newDate.getHours() : newDate.getHours()
    let minut = newDate.getMinutes() < 10 ? "0" + newDate.getMinutes() : newDate.getMinutes()
    let second = newDate.getSeconds() < 10 ? "0" + newDate.getSeconds() : newDate.getSeconds()
    time.innerHTML = `${hour} : ${minut} : ${second}`
},1000)


getData()