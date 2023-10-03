import { USER,getItemInLocal,setItemInLocal,CHECK, LOGIN, authpage } from "./assets/helper/helper.js"


const btnLogin = document.getElementById("btnLogin")

btnLogin.addEventListener("click",()=>{
    const name = document.getElementById("loginName").value
    const password = document.getElementById("loginPassword").value

    const user = getItemInLocal(USER)
    const finduser = user.find(item => item.username === name && item.password === password)
    console.log(finduser)
    if (finduser){
        const loginCheck = document.getElementById("loginCheck")
        if (loginCheck.checked){
            setItemInLocal(CHECK, true)
        }else{
            setItemInLocal(CHECK, false)
        }
        setItemInLocal(LOGIN, finduser)
        window.location.href = "/20.Project/template/index.html"
    }else{
        alert("Wrong user or password")
    }
})


const btnSwitch = document.getElementById("switch-btn")
btnSwitch.addEventListener("click",()=>{
    window.location.href = "/20.Project/template/pages/shop/index.html"
})
