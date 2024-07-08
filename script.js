const container = document.getElementById("container")
const slider = document.getElementById("slider")
const output = document.querySelector("output")
const button = document.querySelector("button")
let containerSize = 800
let size = 16

output.innerHTML = slider.value

slider.oninput = function () {
    output.innerHTML = this.value;
}

const reset = () => {
    const squares = document.querySelectorAll(".box")
    for (let i = 0; i < (size * size); i++) {
        squares[i].style.opacity = 0.1
        squares[i].style.backgroundColor = "white"
    } 
}

button.onclick = reset

const changeColor = () => {
    const squares = document.querySelectorAll(".box")
    for (let i = 0; i < (size * size); i++) {
        squares[i].style.opacity = 0.1
        squares[i].addEventListener("mouseover", e => {
            let currentOpacity = parseFloat(e.target.style.opacity)
            if (currentOpacity < 1) {
                e.target.style.opacity = (currentOpacity + 0.1).toFixed(1);
            }
            e.target.style.backgroundColor = "red"
        })
    }
}

for (let i = 0; i < (size * size); i++) {
    const div = document.createElement("div")
    div.setAttribute("class", "box")
    div.style.width = `${containerSize / size}px`
    div.style.height = `${containerSize / size}px`
    container.appendChild(div)
    console.log(div)
}

changeColor()

slider.addEventListener("change", e => {
    container.innerHTML = ""
    const sliderValue = e.target.value
    size = sliderValue
    for (let i = 0; i < (size * size); i++) {
        const div = document.createElement("div")
        div.setAttribute("class", "box")
        div.style.width = `${containerSize / size}px`
        div.style.height = `${containerSize / size}px`
        container.appendChild(div)

    }
    changeColor()
})

