const clock = document.getElementById("clock");
setInterval(() => {
    const now = moment();
    const readable = now.format("dddd, MMMM Do YYYY, h:mm:ss a");
    clock.textContent = readable;

}, 1000);

var saveBtn = document.querySelectorAll(".saveBtn");
saveBtn.forEach(function(node){
    node.addEventListener("click", function(){
        var description = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.getItem(time, description);
    })
});

$("#hour1 .description").val(localStorage.getItem("hour1"));


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


