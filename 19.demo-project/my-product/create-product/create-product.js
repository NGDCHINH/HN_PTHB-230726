import {randomId} from "./../helper.js"

const productName = document.getElementById("basic-icon-default-productName")
console.log("🚀 ~ file: create-product.js:4 ~ productName:", productName)
const nsx = document.getElementById("basic-icon-default-nsx")
const status = document.getElementById("basic-icon-default-status")
const price = document.getElementById("basic-icon-default-price")



const btnSubmit = document.getElementById("btnSubmit")

btnSubmit.addEventListener("click", ()=> {
  const productNameValue = productName.value
  const nsxValue = nsx.value
  const statusValue = status.value
  const priceValue = price.value

  const newProduct = {
    productName :productNameValue,
      nsx : nsxValue,
      status : statusValue,
      price : priceValue,
      id: randomId()
  }
  console.log("🚀 ~ file: create-product.js:20 ~ btnSubmit.addEventListener ~ newProduct:", newProduct)


  const products = localStorage.getItem("products")

if (products) {
  // cchuyen sang dang nguyen thuy cua product list
  const productsList = JSON.parse(products)
  console.log(productsList);
  // them san pham moi vao danh sach 
  productsList.push(newProduct)
  // luu vao local storage
  //  - bien list product thanh dang string
  const newListProductString = JSON.stringify(productsList)
  // - luu vao local
  localStorage.setItem("products", newListProductString)
}else{
  const productsNew = [newProduct]
  const productsString =  JSON.stringify(productsNew)
  localStorage.setItem("products", productsString)
}

window.location.href = "/my-product/home/index.html"
})