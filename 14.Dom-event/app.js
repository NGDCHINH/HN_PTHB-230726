// let gio = document.getElementById("Gio")
// let phut = document.getElementById("Phut")
// let giay = document.getElementById("Giay")
// let time = setInterval( () => {
//     const date = new Date()
//     if (gio.innerHTML = date.getHours() < 10){
//        gio.innerHTML = "0" + (innerHTML = date.getHours())
//     } else{
//         gio.innerHTML =  (innerHTML = date.getHours())
//     }
//     if (phut.innerHTML = date.getMinutes() < 10){
//         phut.innerHTML = "0" + (innerHTML = date.getMinutes())
//     } else{
//         phut.innerHTML =  (innerHTML = date.getMinutes())
//     }
//     if (giay.innerHTML = date.getSeconds() < 10){
//         giay.innerHTML = "0" + (innerHTML = date.getSeconds())
//     } else{
//         giay.innerHTML =  (innerHTML = date.getSeconds())
//     }
// },1000)

let endDate = new Date("September 23,2023 07:00:00").getTime()
console.log(endDate)
let cd = setInterval(()=>{
    let now = new Date().getTime()
    let demNguoc = endDate - now
    console.log(demNguoc)
    let hours = Math.floor(demNguoc % (24 * 60 * 6 * 1000)/(60 * 60 * 1000))
    let minutes = Math.floor(demNguoc % (60 * 60 * 1000)/(60 * 1000))
    let seconds = Math.floor(demNguoc % (60 * 1000) / 1000)
    let gio = document.getElementById("Gio").innerHTML = hours
    let phut = document.getElementById("Phut").innerHTML = minutes
    let giay = document.getElementById("Giay").innerHTML = seconds
},1000)