import { randomId } from "./helper.js"

const tenSP = document.getElementById('exampleInputHang1');
const nsx = document.getElementById('exampleInputNSX1');
const status = document.getElementById('exampleInputStatus1');
const money = document.getElementById('exampleInputMoney1');

const btnC = document.getElementById("btnCreate");

btnC.addEventListener("click", ()=>{
    const tenSPValue = tenSP.value;
    const nsxValue = nsx.value;
    const statusValue = status.value;
    const moneyValue = money.value;

    const newSanPham = {
        tenSP : tenSPValue,
        nsx : nsxValue,
        status : statusValue,
        money : moneyValue,
        id : randomId()
    }

    const sanPham = localStorage.getItem("SanPham")

    if (sanPham){
        const sanPhamList = JSON.parse(sanPham)
        sanPhamList.push(newSanPham)
        const newSanPhamString = JSON.stringify(sanPhamList)
        localStorage.setItem("SanPham", newSanPhamString)
        // console.log('sanPhamString dong 30', newSanPhamString)
        window.location.href = "/20.Project/template/index.html"
    } else {
        const sanPhamNew = [newSanPham]
        const sanPhamString = JSON.stringify(sanPhamNew)
        localStorage.setItem("SanPham", sanPhamString)
        // console.log('sanPhamString dong 37', sanPhamString)
        window.location.href = "/20.Project/template/index.html"
    }





    // sanPham= [
    //     {
    //         tenSP : `Panadol`,
    //         nsx : 'GSK',
    //         status : 'Còn Hàng',
    //         money : 220000,
    //         id : randomId(),
    //     }
    // ]
});











