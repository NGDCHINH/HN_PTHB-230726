const person = [
        { name : "Nguyen Van A",age : 18},
        { name : "Nguyen Van B",age : 20},
        { name : "Nguyen Van C",age : 25}
]
localStorage.setItem("users", JSON.stringify(person));
// const them = document.getElementById("Them")
// them.addEventListener("click", () => {
//     localStorage.setItem("users", JSON.stringify(person));
// })
