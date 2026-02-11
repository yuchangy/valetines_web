function displayChoices() {

    const foodChoice = localStorage.getItem("userFoodSelection");

    const activityArray = JSON.parse(localStorage.getItem("activityChoices")) || [];
    
    // Show sections
    const resultChoices = document.querySelectorAll(".result_choices");
    resultChoices.forEach(section => {
        section.style.display = "block";
    });

    // Insert food choice text
    document.getElementById("foodChoice").textContent = foodChoice || "None";
    
    // Insert all activity choices
    const activityContainer = document.getElementById("activityChoice");
    activityContainer.innerHTML = ""; // Clear existing content
    
    if (activityArray.length > 0) {
        // Create a list of activities
        activityArray.forEach((activity, index) => {
            const activityItem = document.createElement("div");
            activityItem.className = "activity-item";
            activityItem.textContent = `${index + 1}. ${activity}`;
            activityContainer.appendChild(activityItem);
        });
    } else {
        activityContainer.textContent = "None";
    }
}

document.addEventListener("DOMContentLoaded", function () {

    const resultButton = document.getElementById("result_button");

    resultButton.addEventListener("click", function () {
        resultButton.style.display = "none";
        displayChoices();
    });

});
