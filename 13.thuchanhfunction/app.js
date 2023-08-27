//bai1
let bai1 = () => {
    console.log("Xin chào Rikkei Academy")
}
bai1()
//bai2
let bai2 = (binhPhuong) => {
    return binhPhuong * binhPhuong
}
let tinhBinhPhuong = bai2(19)
console.log(tinhBinhPhuong)
//bai3
const bai3 = function (nam) {
    const theKy = nam / 100
    return Math.ceil(theKy)
}
let timTheKy = bai3(1954)
console.log(timTheKy)
//bai4
const ngatChuoi = (chuoi) => {
    let doDaiChuoi = chuoi.length;
    if (doDaiChuoi < 15){
        return chuoi
    }
    const spliceChuoi = chuoi.slice(0, 15)
    return spliceChuoi + "..."
}
const chuoi = ngatChuoi("Xin chào Rikkei Academy")
console.log(chuoi)
//bai5
const doiChu = (chu) => {
    let chuDau = chu[0].toUpperCase()
    let spliceChuoi = chu.slice(1).toLowerCase()
    return chuDau + spliceChuoi
}
const uppercase = doiChu("rIKKEIii")
console.log(uppercase)
//bai6
const maxNumber = (mangNumber) => {
    let max = mangNumber[0]
    for (let i = 1; i < mangNumber.length; i++){
        if (mangNumber[i] > max){
            max = mangNumber[i]
            } 
        }
        return max
}
let timSoLon = maxNumber([5, 7, 100, 90, 24, 50, 75])
console.log(timSoLon)
//bai7
function checkChanLe(number){
    if (number % 2 === 0){
        return `${number} là số chẵn`
    } 
    return `${number} là số lẻ`
}
function checkSoNguyenTo(number){
    let laSoNguyenTo = true 
    if (number < 2){
        return false
        return `${number} không là số nguyên tố`
    } else {
        for(let i = 2; i < number; i++){
            if (number % i ===0)
            laSoNguyenTo = false
            break
        }      
    }
    if(laSoNguyenTo){
        return true
        return `${number} là số nguyên tố`
    }
    return false
    return `${number} ko là số nguyên tố`
}
function checkSoHoanHao(number){
    let uocCuaSo = []
    for (let i = 0; i < number; i++){
        if(number % i === 0){
            uocCuaSo.push(i)
        }
    }
    let tongUoc = 0
    for (let i = 0; i < uocCuaSo.length; i++){
        tongUoc += uocCuaSo[i]
    }
    if (tongUoc === number){
        return `${number} là số hoàn hảo`
    }
    return `${number} là ko số hoàn hảo`
}
function main(number){
    let chanLe = console.log(checkChanLe(number))
    let nguyenTo = console.log(checkSoNguyenTo(number))
    let hoanHao = console.log(checkSoHoanHao(number))
}
main(28)
//bai8
function trungBinhCong(arrayNumber){
    let tong = 0
    for(let i = 0; i < arrayNumber.length; i++){
        tong += arrayNumber[i]
    }
    return tong / arrayNumber.length
}
console.log(trungBinhCong([1, 2, 3, 4, 9]))
//bai9
function inNT(number){
    for (let i = 0; i < number; i++){
        let checkNT = checkSoNguyenTo(i)
        if (checkNT == false ){
            console.log(i)
        }
    }
}
inNT(28)
//baitapvenha
// Bài Tập về nhà - gửi bài tập trên git
// cho 1 mảng số ngẫu nhiên.
// viet ham có thể tái sử dụng trên nhiều mảng khác nhau
// sắp xếp mảng đó từ bé đến lớn // [1,2,3,4,6,7,8,9]
// sắp xếp mảng đố từ lơn đến bé // [9,8,7,6,4,3,2,1]
// khong su dung ham co san
// từ bé đén lơn
function sapXepNL(arrayNumber){
    let arraySapXep = [];
    for(let i = 0; i < arrayNumber.length-1; i++){
        for(let j = i + 1; j < arrayNumber.length; j++){
            let min = i
            if (arrayNumber[j] < arrayNumber[min]){
                min = j
            }
            let tam = arrayNumber[i]
                arrayNumber[i] = arrayNumber[min]
                arrayNumber[min] = tam
                arraySapXep.push(tam)
        }
    }
    return arrayNumber
}
console.log(sapXepNL([9,8,7,6,4,3,2,1]))
// từ lớn đến bé
function sapXepLN(arrayNumber){
    let arraySapXep = [];
    for(let i = 0; i < arrayNumber.length-1; i++){
        for(let j = i + 1; j < arrayNumber.length; j++){
            let max = i
            if (arrayNumber[j] > arrayNumber[max]){
                max = j
            }
            let tam = arrayNumber[i]
                arrayNumber[i] = arrayNumber[max]
                arrayNumber[max] = tam
                arraySapXep.push(tam)
        }
    }
    return arrayNumber
}
console.log(sapXepLN([1,2,3,4,6,7,8,9]))
    
    