// Bai tap Bien, kieu du lieu va toan tu
// bai 1
let vatLy;
let hoaHoc;
let sinhHoc;

vatLy = prompt("Nhập vào điểm Vật lý");
hoaHoc = prompt("Nhập vào điểm Hoá học");
sinhHoc = prompt("Nhập vào điểm Sinh học");

let ly = parseInt(vatLy);
let hoa = parseInt(hoaHoc);
let sinh = parseInt(sinhHoc);

let tong = ly + hoa + sinh;

let trungBinh = tong / 3;

document.write("Tông điểm 3 môn:" + tong)
document.write("Điểm trung bình 3 môn:" + trungBinh)
// bai 2

let inputDoC;

inputDoC = prompt("Nhập vào độ C")

let DoC = parseInt(inputDoC);

let DoF = ( DoC * (9 / 5) ) + 32;

document.write("Độ F là:" + DoF)
// bai 3 + bai 4
let pi = 3.14;
let banKinh;

banKinh = prompt("Nhập vào bán kính hình tròn");

let R = parseInt(banKinh);

let dienTich = R * R * pi;
let chuVi = R * 2 * pi;

document.write("Diện tích hình tròn là:" + dienTich);
document.write("Chu vi hình tròn là:" + chuVi);