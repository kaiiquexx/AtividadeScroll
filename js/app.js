function scrollChangeColor() {
    let header = document.querySelector("header");

    if (scrollY > 850) {
        header.classList.add("style-bkg")
    }
    else{
        header.classList.remove("style-bkg")
    }
    if (scrollY > 1800) {
        header.classList.add("style-bkg2")
    }
    else{
        header.classList.remove("style-bkg2")
    }
    if (scrollY > 2700) {
        header.classList.add("style-bkg3")
    }
    else{
        header.classList.remove("style-bkg3")
    }
}

window.addEventListener('scroll', scrollChangeColor)

function scrollArrowHome() {
    let arrow = document.querySelector(".fa-circle-arrow-up")

    if (scrollY > 800) {
        arrow.style.opacity = "1"
    }
    else  {
        arrow.style.opacity = "0"
    }
}

window.addEventListener('scroll', scrollArrowHome)