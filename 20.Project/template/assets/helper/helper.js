const SANPHAM = "SanPham"
const ID_EDIT = "id-edit"
const USER = "users"
const LOGIN = "login"
const CHECK = "loginCheck"
const CART = "cart"

function randomId() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  }
  
  function getItemInLocal(key) {
   const itemInLocal = localStorage.getItem(key)
   const kQ = JSON.parse(itemInLocal)

   return kQ ?? []
  }

  function authpage(){
   const userLogin = getItemInLocal(LOGIN)
   if (userLogin.length === undefined){
      return;
   }else{
      window.location.href = "/20.Project/template/authpage.html"
   }
  }
  function setItemInLocal(key, value){
   const strngData = JSON.stringify(value)
   localStorage.setItem(key, strngData)
  }
  
  const totalCart = ()=>{
   const cartList = getItemInLocal(CART) 
   let sum = 0
   for (let i = 0; i < cartList.length; i++) {
      const sP = cartList[i];
      const cartSum = Number(sP.money) * Number(sP.counter)
      sum = sum + cartSum 
   }
   const cartTong = document.getElementById("cart-sum")
   cartTong.innerText = sum + `$`
  }

  const renderCounterCart = () => {
   const cartCounter = document.getElementById("counter")
   const cartSP = getItemInLocal(CART)
   let sum = 0
   for (let i = 0; i < cartSP.length; i++) {
      const sP = cartSP[i];
      sum = sum + sP.counter 
   }
   cartCounter.innerText = sum
}

  export {randomId, setItemInLocal, getItemInLocal,authpage, SANPHAM, ID_EDIT,USER,CHECK,LOGIN,CART,totalCart,renderCounterCart}
