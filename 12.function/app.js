// let inputNumber = prompt("nhập vào 1 số bất kỳ")

// function nguyenTo(inputNumber) {
//     let check = true
//     if ( inputNumber < 2) {
//         return false
//     } else {
//         for (let i = 2; i < inputNumber; i++) {
//             if (inputNumber % i === 0)
//             check = false
//             document.write(inputNumber , " là số nguyên tố")
//             break
//         }
//     } 
//     return check
// }

// for (let i=0;i < 1000; i++){
//     const checking = nguyenTo(i)
//     if (checking) {
//         document.write(i,"<br />","là số nguyên tố")
//     } else {
//         document.write(i,"<br />"," ko là số nguyên tố")
//     }
// }

// functionCuu
// let arrayCuu = [5, 7, 300, 90, 24, 50, 75]
// document.write("-Xin chào, đay là kích thước đàn cừu của tôi:", "<br />" ,arrayCuu)
// function maxCuu(arrayCuu){
//     let max = arrayCuu[0]
//     for (let i = 1; i < arrayCuu.length; i++){
//         let cuu1 = arrayCuu[i]
//         let maxCuu = parseInt(cuu1, 10)
//         if (maxCuu > max){
//             max = maxCuu
//         }
//     }
//     document.write("<br />","Đây là con cừu kích thước lớn nhất là ",max," hãy cạo lông nó" )
//     return max
// }

// let resetMaxCuu = (max, arrayCuu) => {
//     let indexMax = arrayCuu.indexOf(max)
//     let newCuu1 = arrayCuu.map((item, index) => {
//         if (index === indexMax){
//             return 8
//         } else {
//             return item
//         }
//     })
//     document.write("<br />","Đây là kích thước đàn cừu sau khi cạo lông","<br />", newCuu1)
//     return newCuu1
// }


// let cuu50kg = function(arrayCuu){
//     let after1month = []
//     for(let i = 0; i < arrayCuu.length; i++){
//         let tangCan = arrayCuu[i]
//         let sauTangCan = tangCan + 50;
//         after1month.push(sauTangCan)
//     }
//     document.write("<br />","Đây là kích thước đàn cừu sau khi 1 tháng ","<br />", after1month)
//     return after1month
// }

// for (let i = 1 ; i < 4 ; i++){
//     document.write("<br />","-----------","Thang",i,"-----------")
//     let newCuu = maxCuu(arrayCuu)
//     arrayCuu = resetMaxCuu(newCuu,arrayCuu)
//     arrayCuu = cuu50kg(arrayCuu)
// }

//Bai tap Foot sang meter 
// let inputNumber = parseFloat(prompt("nhập vào 1 số bất kỳ"))
function footToMeter(inputNumber) {
    let meter = 0.305 * inputNumber
    document.write("<br />",inputNumber,"bằng",meter,"m","<br />")
    return meter
}

function meterToFoot(inputNumber) {
    let foot = 3.278 * inputNumber
    document.write(inputNumber,"bằng",foot,"ft")
    return foot
}

for (let i = 1 ; i <= 20 ; i++){
    let newFoot = meterToFoot(i)
    let newMeter = footToMeter(i)
    document.write("<br />")
}






