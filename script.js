const container = document.getElementById("container")
const slider = document.getElementById("slider")
const output = document.querySelector("output")
const button = document.querySelector("button")

let containerSize = 800

window.onresize = function () {

    // i just put in slider function from below to basically reset the whole thing so it would resize for smaller screens when the screen size is changed
    if (container.offsetWidth == 400) {
        containerSize = 400
        container.innerHTML = ""
        const sliderValue = slider.value
        size = sliderValue
        for (let i = 0; i < (size * size); i++) {
            const div = document.createElement("div")
            div.setAttribute("class", "box")
            div.style.width = `${containerSize / size}px`
            div.style.height = `${containerSize / size}px`
            container.appendChild(div)

        }
        changeColor()

    } else if (container.offsetWidth == 800) {
        containerSize = 800
        
        container.innerHTML = ""
        const sliderValue = slider.value
        size = sliderValue
        for (let i = 0; i < (size * size); i++) {
            const div = document.createElement("div")
            div.setAttribute("class", "box")
            div.style.width = `${containerSize / size}px`
            div.style.height = `${containerSize / size}px`
            container.appendChild(div)

        }
        changeColor()
    }
}


// this is x*x squares
let size = 16

// when slider value changes the output of slider changes as well
output.innerHTML = slider.value

// what the hell I googled this xddddd
slider.oninput = function () {
    output.innerHTML = this.value;
}

// resets the color
const reset = () => {
    const squares = document.querySelectorAll(".box")
    for (let i = 0; i < (size * size); i++) {
        squares[i].style.opacity = 0.1
        squares[i].style.backgroundColor = "white"
    }
}

// self explanatory i think
button.onclick = reset

// i must have spent some proper time on this damn
const changeColor = () => {
    //takes all the .box squares and everytime the mouse goes over it it changes the opacity so that the color would change
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

// 0 idea how this works and I aint touching it, I should have commented damn
for (let i = 0; i < (size * size); i++) {
    const div = document.createElement("div")
    div.setAttribute("class", "box")
    div.style.width = `${containerSize / size}px`
    div.style.height = `${containerSize / size}px`
    container.appendChild(div)
    console.log(div)
}

// changes opacity at the start I think
changeColor()



console.log(container.offsetWidth)

// whole thing below does same as for loop above but according to slider value
const slide = e => {
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
}
slider.addEventListener("change", slide)