const SANPHAM = "SanPham"
const ID_EDIT = "id-edit"
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

  function setItemInLocal(key, value){
   const strngData = JSON.stringify(value)
   localStorage.setItem(key, strngData)
  }
  export {randomId, setItemInLocal, getItemInLocal, SANPHAM, ID_EDIT}
