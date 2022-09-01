const clock = document.getElementById("clock");
setInterval(() => {
    const now = moment();
    const readable =now.format("dddd, MMMM Do YYYY, h:mm:ss a");
    clock.textContent = readable;
    
}, 1000);

const schedule = document.querySelector(".storage");
const  saveBtn = document.querySelector(".button")
const timeBlock = document.querySelector(".timeBlock")

storageInput.addEventListener('input' , letter => {
    text.textContent = letter.target.value
} )



const saveToStorage = ()=> {
    localStorage.setItem('textinput', timeBlock.textContent)
}

button.addEventListener('click, saveToStorage')