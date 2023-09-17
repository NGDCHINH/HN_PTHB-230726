// key : value => thuộc tính
// 1 thuộc tính cách nhau bởi dấu ","
// key và vakue cách nhau bởi dấu ":"
// value có thẻ à tát cả các kiểu dữ liệu đã được học
//VD tạo obj bằng class
// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//         this.getName = this.getName;
//     }
//     getName () {
//         console.log(this.name)
//     }
// }
// const student = new Person("hai", 18)
class ToDoList {
    
}


//---------------------------BaiTap---------------------------//
//Bai 1
const Rectangle = {
    chieuDai : 10,
    chieuRong : 5,
    dienTich : function(){
        return this.chieuDai * this.chieuRong
    },
    chuVi : function(){
        return (this.chieuDai + this.chieuRong) * 2
    },
}
console.log(Rectangle.dienTich())
console.log(Rectangle.chuVi())

//Bai 2
const Temperature = {
    doC : 26,
    doiSangF : function(){
        return this.doC * 9 / 5 + 32
    },
    doiSangK : function(){
        return this.doC + 273.15
    },
}
Temperature.doC = 25,
console.log(("Độ F là:"+Temperature.doiSangF()))
console.log(("Độ K là:"+Temperature.doiSangK()))
document.write(`Độ F là: ${Temperature.doiSangF()}`)
document.write(`<br/>Độ K là: ${Temperature.doiSangK()}`)


