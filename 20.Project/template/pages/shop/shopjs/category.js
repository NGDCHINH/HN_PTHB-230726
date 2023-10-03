import {getItemInLocal,SANPHAM,setItemInLocal,CART} from "../../../assets/helper/helper.js"



window.addEventListener("load", ()=>{
    const sanPham = getItemInLocal(SANPHAM)
    counterCart()

    const listSP = document.getElementById("product-list")
    
    for (let i = 0; i < sanPham.length; i++) {
        const sP = sanPham[i];
        const div1 = document.createElement("div")
            const div2 = document.createElement("div")
                const image = document.createElement("img")
                const div3 = document.createElement("div")
                    const h6 = document.createElement("h6")
                    const div4 = document.createElement("div")
                    const div5 = document.createElement("div")
                        const a = document.createElement("a")
                            const span = document.createElement("span")
                            const p = document.createElement("p")

        div1.classList.add("col-lg-4","col-md-6")
        div2.classList.add("single-product")
        image.classList.add("img-fluid")
        image.src = sP.img
        div3.classList.add("product-details")
        h6.innerText = sP.tenSP
        div4.classList.add("price")
        div4.innerText = sP.money + `$`
        div5.classList.add("prd-bottom")
        a.classList.add("social-info")
        a.href = "#"
        span.classList.add("ti-bag")

        span.addEventListener("click", ()=>{
            const cart = getItemInLocal(CART)

            const timSP = cart.find(item => item.id === sP.id)
            if (timSP){
                const cartNew = cart.map(item => {
                    if (item.id === timSP.id) {
                        item.counter += 1
                    }
                    return item
                })
                setItemInLocal(CART,cartNew)
            } else {
                cart.push({... sP,counter : 1}) 
                setItemInLocal(CART,cart)
            }
            counterCart()  
   
        })
        p.classList.add("hover-text")
        p.innerText = "add to bag"
// ------------------------------------------------
        div1.appendChild(div2)
        div2.appendChild(image)
        div2.appendChild(div3)
        div3.appendChild(h6)
        div3.appendChild(div4)
        div3.appendChild(div5)
        div5.appendChild(a)
        a.appendChild(span)
        a.appendChild(p)
        listSP.appendChild(div1)
    }
})

function counterCart(){
    const gioHang = getItemInLocal(CART)
    const gioHangLength = gioHang.length
    let sum = 0;
    for (let i = 0; i < gioHang.length; i++) {
        const sPham = gioHang[i];
        sum += sPham.counter   
    }
    const dem = document.getElementById("counter")
    dem.innerText = sum
}

// const btnSwitch = document.getElementById("switch-btn")
// btnSwitch.addEventListener("click",()=>{
//     window.location.href = "/20.Project/template/pages/shop/index.html"
// })

export {counterCart}