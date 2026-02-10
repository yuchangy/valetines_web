function displayChoices() {

    const foodChoice = localStorage.getItem("userFoodSelection");

    const activityArray = JSON.parse(localStorage.getItem("activityChoices")) || [];
    const activityChoice = activityArray.length > 0 ? activityArray[0] : "None";

    // Show sections
    const resultChoices = document.querySelectorAll(".result_choices");
    resultChoices.forEach(section => {
        section.style.display = "block";
    });

    // Insert text
    document.getElementById("foodChoice").textContent = foodChoice;
    document.getElementById("activityChoice").textContent = activityChoice;
}

document.addEventListener("DOMContentLoaded", function () {

    const resultButton = document.getElementById("result_button");

    resultButton.addEventListener("click", function () {
        resultButton.style.display = "none";
        displayChoices();
    });

});
