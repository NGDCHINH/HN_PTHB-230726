import { counterCart } from "./category.js";
import {getItemInLocal,SANPHAM,setItemInLocal,CART,totalCart,renderCounterCart} from "../../../assets/helper/helper.js"

counterCart()

window.addEventListener("load", ()=>{
    totalCart()
    const cartList = getItemInLocal(CART)
    const tbody = document.getElementById("table-body")
    for (let i = 0; i < cartList.length; i++) {
        const cart = cartList[i];
        
        const tr = document.createElement("tr")
        //td1
        const td1 = document.createElement("td")
        const div1td1 = document.createElement("div")
        div1td1.classList.add("media")
        const div2td1 = document.createElement("div")
        div2td1.classList.add("d-flex")
        const img1 = document.createElement("img")
        img1.src = cart.img
        img1.width = 150
        img1.height = 100
        const div3td1 = document.createElement("div")
        div3td1.classList.add("media-body")
        const p = document.createElement("p")
        p.innerText = cart.tenSP
        //td2
        const td2 = document.createElement("td")
        const h5td2 = document.createElement("h5")
        h5td2.innerText = cart.money + "$"
        //td3
        const td3 = document.createElement("td")
        const div1td3 = document.createElement("div")
        div1td3.classList.add("product_count")
        const input = document.createElement("input")
        input.classList.add("input-text" , "qty")
        input.type = "Number"
        input.value = cart.counter
        input.id = cart.id
        input.addEventListener("change",(e)=>{
            totalCart()
            const cartChagne = getItemInLocal(CART)
            const timSP = cartChagne.find(item => item.id === cart.id)
            if (timSP){
                const cartNew = cartChagne.map(item => {
                    if (item.id === timSP.id && timSP.counter > 1) {
                        item.counter = Number(e.target.value)
                    }
                    return item
                })
                setItemInLocal(CART,cartNew)
                const newInput = document.getElementById(cart.id)
                const newCounter = cartNew.find(item=> item.id === cart.id)
                newInput.value = newCounter.counter
                totalMoney(cart.id, Number(newCounter.money), Number(newCounter.counter)) 
                renderCounterCart()    
            }
            
        })
        const btnIncr = document.createElement("button")
        btnIncr.classList.add("increase" , "items-count")
        btnIncr.addEventListener("click",()=>{
            const cartChagne = getItemInLocal(CART)
            totalCart()
            const timSP = cartChagne.find(item => item.id === cart.id)
            if (timSP){
                const cartNew = cartChagne.map(item => {
                    if (item.id === timSP.id && timSP.counter > 0) {
                        item.counter += 1
                    }
                    return item
                })
                setItemInLocal(CART,cartNew)
                const newInput = document.getElementById(cart.id)
                const newCounter = cartNew.find(item=> item.id === cart.id)
                newInput.value = newCounter.counter
                totalMoney(cart.id, Number(newCounter.money), Number(newCounter.counter))
                renderCounterCart() 
            }
                     
        })
        const btnDecr = document.createElement("button")
        btnDecr.classList.add("reduced" , "items-count")
        btnDecr.addEventListener("click",()=>{
            const cartChagne = getItemInLocal(CART)
            totalCart()
            const timSP = cartChagne.find(item => item.id === cart.id)
            if (timSP){
                const cartNew = cartChagne.map(item => {
                    if (item.id === timSP.id && timSP.counter > 1) {
                        item.counter -= 1
                    }
                    return item
                })
                setItemInLocal(CART,cartNew)
                const newInput = document.getElementById(cart.id)
                const newCounter = cartNew.find(item=> item.id === cart.id)
                newInput.value = newCounter.counter
                totalMoney(cart.id, Number(newCounter.money), Number(newCounter.counter)) 
                renderCounterCart()
            }
            
        })
        const iIncr = document.createElement("i")
        iIncr.classList.add("lnr" , "lnr-chevron-up")
        const iDecr = document.createElement("i")
        iDecr.classList.add("lnr" , "lnr-chevron-down")
        //td4
        const td4 = document.createElement("td")
        const h5td4 = document.createElement("h5")
        h5td4.id = `total-money-${cart.id}`
        h5td4.innerHTML = cart.counter * cart.money + `$`
        //td5
        const td5 = document.createElement("td")
        const btnDel = document.createElement("button")
        btnDel.classList.add("btn","btn-success","btn-icon-text")
        btnDel.innerHTML = "Del"
        btnDel.addEventListener("click", (e)=>{
            const cartList= localStorage.getItem("cart")
            const sanPhamObj = JSON.parse(cartList)
            const newSanPham = sanPhamObj.filter(item => item.id !== cart.id)
            const chuoiSanPham = JSON.stringify(newSanPham)
            localStorage.setItem("cart", chuoiSanPham)
            window.location.reload()
        })


        //-----------------------------------------
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        //td1
        td1.appendChild(div1td1)
        div1td1.appendChild(div2td1)
        div1td1.appendChild(div3td1)
        div2td1.appendChild(img1)
        div3td1.appendChild(p)
        //td2
        td2.appendChild(h5td2)
        //td3
        td3.appendChild(div1td3)
        div1td3.appendChild(input)
        div1td3.appendChild(btnIncr)
        div1td3.appendChild(btnDecr)
        btnIncr.appendChild(iIncr)
        btnDecr.appendChild(iDecr)
        //td4
        td4.appendChild(h5td4)
        //
        td5.appendChild(btnDel)

        tbody.appendChild(tr)

    }
})

function totalMoney (id, money, counter){
    const td = document.getElementById(`total-money-${id}`)
    td.innerText = money * counter + `$`
}