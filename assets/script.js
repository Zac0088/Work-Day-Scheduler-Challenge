const clock = document.getElementById("clock");
setInterval(() => {
    const now = moment();
    const readable =now.format("dddd, MMMM Do YYYY, h:mm:ss a");
    clock.textContent = readable;
    
}, 1000);



