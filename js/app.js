let size = screen.width;
let elem = document.querySelectorAll(".img >div >div");
let button = document.querySelector(".img >div >div >div >a");


if (size <= 600) {
    elem[elem.length -1].classList.add("click");
    elem[elem.length -1].classList.remove("txt");
    button.addEventListener("click", function () {
        elem[elem.length -1].classList.add("click2")
    })
}
