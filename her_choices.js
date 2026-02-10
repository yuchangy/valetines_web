// -----------------------------
// STATE
// -----------------------------

let dinnerChosen = false;
let activityChoices = [];

const header = document.getElementById("main_header");

// Food options
const foodArray = ["Chinese", "Japanese", "Korean", "Italian", "American"];
const randomElement = Math.floor(Math.random() * foodArray.length);

// Buttons / Containers
const foodButtons = document.querySelectorAll('.foodItem');
const movieButtons = document.querySelectorAll('.movieItem');
const movieContainer = document.getElementById('movie_container');


// -----------------------------
// FUNCTIONS
// -----------------------------

function showActivities() {
    movieContainer.style.display = "flex";
}

function changeHeaderToActivity() {
    header.textContent = "Choice of Activity";
}


// -----------------------------
// FOOD SELECTION
// -----------------------------

document.addEventListener('DOMContentLoaded', function () {

    foodButtons.forEach(function (button) {

        button.addEventListener('click', function () {

            const foodChoice = button.textContent;

            // Save food selection
            if (foodChoice !== "Random") {
                localStorage.setItem('userFoodSelection', foodChoice);
            } else {
                localStorage.setItem('userFoodSelection', foodArray[randomElement]);
            }

            // Mark dinner as chosen
            dinnerChosen = true;

            // Change header
            if (dinnerChosen) {
                changeHeaderToActivity();
            }

            // Hide only clicked button
            button.classList.add("hidden");

            // Show activity options
            showActivities();
        });

    });

});


// -----------------------------
// ACTIVITY SELECTION
// -----------------------------

document.addEventListener('DOMContentLoaded', function () {

    movieButtons.forEach(function (button) {

        button.addEventListener('click', function () {

            const activityChoice = button.textContent;

            // Add to array
            activityChoices.push(activityChoice);

            // Store array for next page
            localStorage.setItem('activityChoices', JSON.stringify(activityChoices));

            // Hide clicked button
            button.classList.add("hidden");

            // Go to final page
            window.location.href = "final.html";
        });

    });

});
