// Array[] vị trí
// Array.length dộ dài
// Array.push thêm vào cuối mảng
// Array.unshift thêm vào đầu màng
// Array.pop xoá phần tử cuối cùng
// Array.shift xoá phần tử đầu
// Array.sort((a, b) => a - b) sắp xếp số tăng dần
// Array.map(find,filter,forEach)


//bai 1
// const arrayAnimal = ["Lion","Tiger","Wolf","Kangaroo"]
// document.write(arrayAnimal.join(","))

//bai 2
// let number = prompt("nhập vào 1 số bất kì")

// let numberString = number.toString()

// let listNumber = numberString.split("")

// let KQ = []

// for (let i = 0 ; i < listNumber.length ; i++){
//     let so1 = listNumber[i];
//     let doiSo1 = parseInt(so1);
//     let so2 = listNumber[i+ 1];
//     let doiSo2 = parseInt(so2)

//     let checking = so1 % 2 === 0 && so2 % 2 ===0  
//     KQ.push(doiSo1)

//     if (checking) {
//         KQ.push("-")
//     }
        
// }
// document.write(KQ.join(""))


// bai 3

// let text = prompt("nhập vào 1 đoạn text")

// let listText = text.split("")

// let KQ = []

// for (let i = 0 ; i < listText.length ; i++){
//     let item = listText[i]
//     let chuThuong = item.toLowerCase()
//     let checking = chuThuong === item

//     if (checking){
//         KQ = KQ + item.toUpperCase()
//     } else {
//         KQ = KQ + item.toLowerCase()
//     }
    
// }

// document.write(KQ)

// bai 4

let text = prompt("nhập vào 1 đoạn text")

let listText = text.split("")

document.write(listText)


