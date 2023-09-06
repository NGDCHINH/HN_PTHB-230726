//click show text
const nutCatCanh = document.getElementById("liftoffButton")
nutCatCanh.addEventListener("mousedown", (e) => {
    let catCanh = document.getElementsByClassName("exercise-1")
    catCanh[0].innerHTML = "Houston, chúng ta đã cất cánh!"
})
//hover change color
const nutHuy1 = document.getElementById("abortMission1")
nutHuy1.addEventListener("mouseover" ,(e) => {
    nutHuy1.style.backgroundColor = "red"
})
nutHuy1.addEventListener("mouseout", (e) => {
    nutHuy1.style.backgroundColor = "rgb(139, 220, 139)"
})
//abort mission
const nutHuy2 = document.getElementById("abortMission2")
nutHuy2.addEventListener("mousedown",(e) => {
    let xacNhan = confirm("Bạn có chắc chắn muốn hủy bỏ nhiệm vụ không?")

    if (xacNhan){
        nutHuy2.innerHTML = "Nhiệm vụ bị hủy bỏ! Tàu con thoi trở về nhà."
    } else {
        nutHuy2.innerHTML = "Nhiệm vụ tiếp tục."
    }
})
const sumbit = document.getElementById("submit")
const div = document.getElementById("exercise-content")
sumbit.addEventListener("click", (e) => {
    const ten = document.getElementById("fristName").value
    const ho = document.getElementById("lastName").value
    let fullName = document.createElement("div")
    fullName.innerHTML = ho + ten
    div.appendChild(fullName)
})

