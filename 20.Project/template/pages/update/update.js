import {ID_EDIT, SANPHAM, getItemInLocal, setItemInLocal, randomId} from "../../assets/helper/helper.js"

window.addEventListener("load", ()=>{
    const idEdit = getItemInLocal(ID_EDIT)
    const sanPham = getItemInLocal(SANPHAM)
    const sanPhamUpdate = sanPham.find(item => item.id === idEdit)
    const tenSP = document.getElementById('exampleInputHang1');
    tenSP.value = sanPhamUpdate.tenSP
    const nsx = document.getElementById('exampleInputNSX1');
    nsx.value = sanPhamUpdate.nsx
    const status = document.getElementById('exampleInputStatus1');
    status.value = sanPhamUpdate.status
    const money = document.getElementById('exampleInputMoney1');
    money.value = sanPhamUpdate.money
})

const update = document.getElementById("btnUpdate")
update.addEventListener("click" , ()=>{
    const tenSP = document.getElementById('exampleInputHang1').value;
    const nsx = document.getElementById('exampleInputNSX1').value;
    const status = document.getElementById('exampleInputStatus1').value;
    const money = document.getElementById('exampleInputMoney1').value;

    const sanPham = getItemInLocal(SANPHAM)
    const idEdit = getItemInLocal(ID_EDIT)
    const newData = sanPham.map(item => {
        if (item.id === idEdit){
            item.tenSP = tenSP;
            item.nsx = nsx;
            item.status = status;
            item.money = money;
        } 
        return item
    })
    setItemInLocal(SANPHAM, newData)

    window.location.href ="/20.Project/template/index.html"
})