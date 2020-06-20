let buttons = document.querySelectorAll(".buttons >img");

let slide = document.querySelectorAll(".img >div");

let interval = setInterval(slideRight, 5000)

buttons[0].addEventListener("click", slideLeft)

buttons[1].addEventListener("click", slideRight)


function slideRight() {
    for (let index = 0; index < slide.length; index++) {
        if (index == slide.length -1) {
            for (let i = 0; i < slide.length; i++) {
                slide[i].classList.add("transition");
            }
            slide[0].classList.remove("transition");
            clearInterval(interval);
            break;
        }else{
            if (!slide[index].classList.contains("transition")) {
                for (let i = 0; i < slide.length; i++) {
                    slide[i].classList.add("transition");
                }
                slide[index + 1].classList.remove("transition");
                clearInterval(interval);
                break;
            }
        }
    }
    interval = setInterval(slideRight, 5000)
}

function slideLeft() { 
    for (let index = 0; index < slide.length; index++) {
        if (!slide[index].classList.contains("transition")) {
            if (index == 0) {
                for(let i = 0; i < slide.length; i++) {
                    slide[i].classList.add("transition");
                }
                slide[slide.length -1].classList.remove("transition");
                clearInterval(interval);
                break;
            }else{
                for (let i = 0; i < slide.length; i++) {
                    slide[i].classList.add("transition");
                }
                slide[index - 1].classList.remove("transition");
                clearInterval(interval);
                break;
            }
        }
    }
    interval = setInterval(slideRight, 5000)
}
