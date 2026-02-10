const buttons = document.querySelectorAll(".button, .evening");
const dayButton = document.getElementById("day");

buttons.forEach(button => {
    button.addEventListener("click", function () {

        // Hide ALL time buttons
        buttons.forEach(b => b.style.display = "none");

        // Show the entire day button
        dayButton.style.display = "block";
    });
});

dayButton.addEventListener("click", function () {
    window.location.href = "food.html";
});
