// let year = parseInt(prompt("Nhập vào năm cần tính"));

// if (year % 4 == 0 && year % 100 != 0) {
//     document.write("Năm " , year , " là năm nhuận ");
// } else if (year % 100 == 0 && year % 400 != 0){
//     document.write("Năm " , year , " không phải năm nhuận")   
// } else if (year % 100 == 0 && year % 400 == 0){
//     document.write("Năm " , year , " là năm nhuận")   
// } else {
//     document.write("Năm " , year , " không phải năm nhuận")
// }


// Bai tap tinh chi so can nang co the

// let canNang = parseFloat(prompt("Nhập vào cân năng theo đơn vị kg"));
// let chieuCao = parseFloat(prompt("Nhập vào chiêu cao theo đơn vị m"));

// let bmi = canNang / Math.pow(chieuCao,2);

// document.write("Chỉ số cân năng của bạn là: " , bmi );

// if (bmi <= 18.5) {
//     document.write("Cân nặng thấp")
// } else if (bmi > 18.5 && bmi <= 24.9) {
//     document.write("Bình thường")
// } else if (bmi > 25) {
//     document.write("Thừa cân")
// } 

// Bai tap cau lenh switch-case

// let thang = parseInt(prompt("Nhập vào tháng cần tính"));

// switch (thang) {
//     case 1:
//         if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10) {
//             document.write("Tháng " ,thang, " có 31 ngày") 
//         }
//         break;
//     case 2:
//             if (thang == 2) {
//                 document.write("Tháng " ,thang, " có 28 ngày or 29 ngày") 
//             }
//             break;
//     default:
//         document.write("Tháng " ,thang, " có 30 ngày") 
//         break;
// }

let soThu1 = parseInt(prompt("Nhập vào số đầu tiên"));
// let soThu2 = parseInt(prompt("Nhập vào số thứ 2"));

let luyThua = 0;
for(let i = 1; i <= soThu1 ; i++){
    luyThua += i;
    document.write(luyThua);
}
