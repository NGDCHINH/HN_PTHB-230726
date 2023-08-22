// Bai 4
// const inputNumber = prompt("nhap vao day so bat ky");
// const arrayNumber = inputNumber.split(",");
// let KQ = 0
// for (let i=0;i < arrayNumber.length; i++){
//     let so1 = arrayNumber[i]
//     let sumNumber = parseInt(so1, 10)
//     KQ += sumNumber;
// }
// document.write(KQ);

// Bai 5
// let max = arrayNumber[0]
// for (let i = 1; i < arrayNumber.length; i++){
//     let so1 = arrayNumber[i]
//     let maxNumber = parseInt(so1, 10)
//     if (maxNumber > max){
//         max = maxNumber
//     }
// }
// document.write(max)

// let min = arrayNumber[0]
// for (let i = 1; i < arrayNumber.length; i++){
//     let so1 = arrayNumber[i]
//     let minNumber = parseInt(so1, 10)
//     if (minNumber < min){
//         min = maxNumber
//     }
// }
// document.write(min)

// const listNumber = [3, 4, 6, -9, 10, -88, 2];
// const inputNumber = +prompt("nhap vao day so bat ky");
// let checking = listNumber.includes(inputNumber);
// if (checking === true){
//     document.write("Có tồn tại", listNumber.indexOf(inputNumber));
// } else {
//     document.write("Không tồn tại");
// }




let arrayCuu = [5, 7, 300, 90, 24, 50, 75]
document.write("-Xin chào, đay là kích thước đàn cừu của tôi:", "<br />" ,arrayCuu)
let max = arrayCuu[0]
for (let i = 1; i < arrayCuu.length; i++){
    let cuu1 = arrayCuu[i]
    let maxCuu = parseInt(cuu1, 10)
    if (maxCuu > max){
        max = maxCuu
    }
}
document.write("<br />","-Con cừu có kích thước lớn nhất là: ", max , ", hãy cạo lông nó")

let indexMax = arrayCuu.indexOf(max)
arrayCuu[indexMax] = 8
document.write("<br />","-Sau khi cạo lông đây là đàn cừu của tôi: " ,"<br />",arrayCuu)

let newCuu = arrayCuu.map(after1month)
function after1month(arrayCuu){
    return arrayCuu + 50;
}
document.write("<br />","-Đây là đàn cừu của tôi sau 1 tháng: " ,"<br />",newCuu)

max = newCuu[0]
for (let i = 1; i < newCuu.length; i++){
    let cuu1 = newCuu[i]
    let maxCuu = parseInt(cuu1, 10)
    if (maxCuu > max){
        max = maxCuu
    }
}
document.write("<br />","-Con cừu có kích thước lớn nhất là: ", max , ", hãy cạo lông nó")

indexMax = newCuu.indexOf(max)
newCuu[indexMax] = 8
document.write("<br />","-Sau khi cạo lông đây là đàn cừu của tôi: " ,"<br />",newCuu)
//Tháng 2
let newCuu1 = newCuu.map(after2month)
function after2month(newCuu){
    return newCuu + 50;
}
document.write("<br />","-Đây là đàn cừu của tôi sau 1 tháng tiếp theo: " ,"<br />",newCuu1)

max = newCuu1[0]
for (let i = 1; i < newCuu1.length; i++){
    let cuu1 = newCuu1[i]
    let maxCuu = parseInt(cuu1, 10)
    if (maxCuu > max){
        max = maxCuu
    }
}
document.write("<br />","-Con cừu có kích thước lớn nhất là: ", max , ", hãy cạo lông nó")

indexMax = newCuu1.indexOf(max)
newCuu1[indexMax] = 8
document.write("<br />","-Sau khi cạo lông đây là đàn cừu của tôi: " ,"<br />",newCuu1)
// Tháng 3
let newCuu2 = newCuu1.map(after3month)
function after3month(newCuu1){
    return newCuu1 + 50;
}
document.write("<br />","-Đây là đàn cừu của tôi sau 1 tháng tiếp theo: " ,"<br />",newCuu2)

max = newCuu2[0]
for (let i = 1; i < newCuu2.length; i++){
    let cuu1 = newCuu2[i]
    let maxCuu = parseInt(cuu1, 10)
    if (maxCuu > max){
        max = maxCuu
    }
}
document.write("<br />","-Con cừu có kích thước lớn nhất là: ", max , ", hãy cạo lông nó")

indexMax = newCuu2.indexOf(max)
newCuu2[indexMax] = 8
document.write("<br />","-Sau khi cạo lông đây là đàn cừu của tôi: " ,"<br />",newCuu2)
// Ban cuu
let KQ = 0
for (let i=0;i < newCuu2.length; i++){
    let banCuu = newCuu2[i]
    let sumCuu = parseInt(banCuu, 10)
    KQ += sumCuu;
}
document.write("<br />","-Chán chăm cừu nên bán được:",KQ * 2,"$")



