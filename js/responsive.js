let size = screen.width;
let elem = document.querySelectorAll(".img >div >div");
let button = document.querySelector(".img >div >div >div >a");
window.addEventListener("resize", resize);
button.addEventListener("click", red);
function red() {
    setTimeout(perro, 2500);
}
function perro() {
    window.location.href = "indexwritten.html"
}


function resize () {
    size = screen.width;
    if (size <= 600) {
        elem[elem.length -1].classList.add("click");
        elem[elem.length -1].classList.remove("txt");
        button.addEventListener("click", function () {
            elem[elem.length -1].classList.add("click2")
            setTimeout(() => {
                elem[elem.length -1].classList.remove("click2")
            }, 1500);
        });
    }
    console.log(size)
}
resize();