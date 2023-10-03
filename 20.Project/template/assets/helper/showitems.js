import { ID_EDIT, setItemInLocal,authpage, LOGIN, getItemInLocal } from "../helper/helper.js"

authpage()

window.addEventListener("load", ()=>{
    const sanPhamString = localStorage.getItem("SanPham")
    const sanPham = JSON.parse(sanPhamString) ?? []
    const tBody = document.getElementById("table-items")

    for(let i = 0; i < sanPham.length; i++){
        const sanPhamList = sanPham[i]
        const tr = document.createElement("tr")

        // tao td 1
        const td1 = document.createElement("td")
        const div1td1 = document.createElement("div")
        div1td1.classList.add("d-flex" ,"align-items-center")
        const div2td1 = document.createElement("div")
        div2td1.classList.add("table-user-name" , "ml-3")
        const ptd1 = document.createElement("p")
        ptd1.classList.add("mb-0" , "font-weight-medium")
        ptd1.innerText = sanPhamList.tenSP
        td1.appendChild(div1td1)
        div1td1.appendChild(div2td1)
        div2td1.appendChild(ptd1)
        tr.appendChild(td1)

        //tao td 2
        const td2 = document.createElement("td")
        td2.innerText = sanPhamList.nsx
        tr.appendChild(td2)

        //tao td 3
        const td3 = document.createElement("td")
        const div1td3 = document.createElement("div")
        div1td3.classList.add("badge", sanPhamList.status > 0 ? "badge-inverse-success" : "badge-inverse-danger")
        div1td3.innerText = sanPhamList.status > 0 ? "Còn Hàng" : "Hết Hàng"
 
        td3.appendChild(div1td3)
        tr.appendChild(td3)

        //tao td 4
        const td4 = document.createElement("td")
        td4.innerText = sanPhamList.money + "$"
        tr.appendChild(td4)

        //tao td 5
        //update
        const td5 = document.createElement("td")
        const btnEdit = document.createElement("btn")
        btnEdit.addEventListener("click", (e)=>{
            setItemInLocal(ID_EDIT,sanPhamList.id)
            window.location.href = "/20.Project/template/pages/update/basic_elements.html"
        })
        btnEdit.innerText = "Edit"
        btnEdit.classList.add("btn" , "btn-dark" , "btn-icon-text")
        //Delete
        const btnDel = document.createElement("btn")
        btnDel.addEventListener("click", (e)=>{
            console.log(sanPhamList.id)
            const idSanPham = localStorage.getItem("SanPham")
            const sanPhamObj = JSON.parse(idSanPham)
            const newSanPham = sanPhamObj.filter(item => item.id !== sanPhamList.id)
            const chuoiSanPham = JSON.stringify(newSanPham)
            localStorage.setItem("SanPham", chuoiSanPham)
            window.location.reload()
        })
        btnDel.classList.add("btn" , "btn-success" , "btn-icon-text")
        btnDel.innerText = "Del"
        td5.appendChild(btnEdit)
        td5.appendChild(btnDel)
        tr.appendChild(td5)
        tBody.appendChild(tr)
    }
    

})

const logout = document.getElementById("logout")
logout.addEventListener("click",()=>{
    const listLog = JSON.parse(getItemInLocal(LOGIN))
    if(listLog){
        localStorage.removeItem(LOGIN)
    }
})