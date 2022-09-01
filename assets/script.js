const clock = document.getElementById("clock");
setInterval(() => {
    const now = moment();
    const readable = now.format("dddd, MMMM Do YYYY, h:mm:ss a");
    clock.textContent = readable;

}, 1000);

// const schedule = document.querySelector(".storage");
// const  saveBtn = document.querySelector(".button")
// const timeBlock = document.querySelector(".timeBlock")

// storageInput.addEventListener('input' , letter => {
//     text.textContent = letter.target.value
// } )



// const saveToStorage = ()=> {
//     localStorage.setItem('textinput', timeBlock.textContent)
// }

// button.addEventListener('click, saveToStorage')


var elements = $(".time-block");
var d = new Date();
var h = d.getHours();
for (i = 0; i < elements.length; i++) {
    var t = parseInt(elements[i].getAttribute("data-hour"));
    if (h < t) {
        elements[i].classList.add("future");
        elements[i].classList.remove("past");
        elements[i].classList.remove("present");
    } else if (h > t) {
        elements[i].classList.add("past");
        elements[i].classList.remove("future");
        elements[i].classList.remove("present");
    } else if (h === t) {
        elements[i].classList.add("present");
        elements[i].classList.remove("future");
        elements[i].classList.remove("past");
    } else if (h > 16 && h < 9) {
        elements[i].classList.add("future");
        elements[i].classList.remove("past");
        elements[i].classList.remove("present");
    }
}


