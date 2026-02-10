const timeButtons = document.querySelectorAll(".button, .evening");
const dayButton = document.getElementById("day");

function checkAllHidden() {
    let allHidden = true;

    timeButtons.forEach(button => {
        if (button.style.display !== "none") {
            allHidden = false;
        }
    });

    if (allHidden) {
        dayButton.style.display = "block";
    }
}

// Attach the same behavior to all time buttons
timeButtons.forEach(button => {
    button.addEventListener("click", function () {
        this.style.display = "none";
        checkAllHidden();
    });
});

dayButton.addEventListener("click", function () {
    window.location.href = "food.html";
});
