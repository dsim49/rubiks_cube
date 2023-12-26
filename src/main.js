const last_event_disp = document.getElementById("last_event_disp");

// === Debug Panel Const Items ===
const x_disp = document.getElementById("x_disp");
const y_disp = document.getElementById("y_disp");
const mouse_button_disp = document.getElementById("mouse_button_disp");

document.body.addEventListener("mousedown", interpret_input)

function interpret_input(event) {
    if (event.type == "mousedown")
    {
        last_event_disp.textContent = "Clicked on mainpage!";
        x_disp.textContent = event.pageX;
        y_disp.textContent = event.pageY;

        // Debug: IN NEXT TWO BLOCKS, SWITCHED 1s FOR 0s!!!
        // Temporary measure for testing.
        
        // Check for the mouse button and call the appropriate function
        switch (event.button) {
            case 1: // Left mouse button
                mouse_button_disp.textContent = "Left Mouse Button";
                turn(event);
                break;
            case 0: // Middle mouse button
                mouse_button_disp.textContent = "Middle Mouse Button";
                startRotate(event);
                break;
            case 2: // Right mouse button
                mouse_button_disp.textContent = "Right Mouse Button";
                // Do nothing special for the right mouse button
                break;
            default:
                mouse_button_disp.textContent = "Unknown Mouse Button";
                break;
        }
    }

    else if (event.type == "mouseup" && event.button == 0)
    {
        mouse_button_disp.textContent = "Middle Mouse Button";
        stopRotate(event);
    }
}

function startRotate(event) {
    rotateInterval = setInterval(() => rotate(event), 1000 / 30); // 30Hz loop
}

function stopRotate(event) {
    last_event_disp.textContent = "Stopped rotating.";
    clearInterval(rotateInterval);
}

function rotate(event) {
    last_event_disp.textContent = "Rotating..."
    x_disp.textContent = event.pageX;
    y_disp.textContent = event.pageY;
}

function turn(event) {
    last_event_disp.textContent = "Turning..."
}

// =============== Debug Panel Function ====================
function toggleDebugMode() {
    const debugPanel = document.querySelector('.debug-panel');
    const body = document.body;

    if (body.classList.contains('debug-mode')) {
        body.classList.remove('debug-mode');
        debugPanel.style.display = 'none';
    } else {
        body.classList.add('debug-mode');
        debugPanel.style.display = 'flex';
    }
}