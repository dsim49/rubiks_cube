const last_event_disp = document.getElementById("last_event_disp");
const x_disp = document.getElementById("x-disp");
const y_disp = document.getElementById("y-disp");

document.body.addEventListener("mousedown", rotate)

function rotate(event)
{
    last_event_disp.textContent = "Clicked on mainpage!";
    x_disp.textContent = event.pageX;
    y_disp.textContent = event.pageY;
}