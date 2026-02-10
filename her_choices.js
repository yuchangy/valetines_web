// -----------------------------
// STATE
// -----------------------------

let dinnerChosen = false;
let activityChoices = [];

const header = document.getElementById("main_header");

const foodArray = ["Chinese", "Japanese", "Korean", "Italian", "American"];
const randomElement = Math.floor(Math.random() * foodArray.length);

const foodButtons = document.querySelectorAll(".foodItem");
const movieButtons = document.querySelectorAll(".movieItem");
const movieContainer = document.getElementById("movie_container");
const doneButton = document.getElementById("done_button");


// -----------------------------
// FUNCTIONS
// -----------------------------

function hideAllFoodButtons() {
    foodButtons.forEach(button => {
        button.style.display = "none";
    });
}

function showActivities() {
    movieContainer.style.display = "block";
    doneButton.classList.remove("hidden");
}

function changeHeaderToActivity() {
    header.textContent = "Choice of Activity";
}


// -----------------------------
// MAIN LOGIC
// -----------------------------

document.addEventListener("DOMContentLoaded", function () {

    // FOOD SELECTION
    foodButtons.forEach(button => {

        button.addEventListener("click", function () {

            let foodChoice = button.textContent;

            if (foodChoice !== "Random") {
                localStorage.setItem("userFoodSelection", foodChoice);
            } else {
                localStorage.setItem("userFoodSelection", foodArray[randomElement]);
            }

            dinnerChosen = true;

            if (dinnerChosen) {
                changeHeaderToActivity();
            }

            // Hide ALL food buttons
            hideAllFoodButtons();

            // Show activity buttons
            showActivities();
        });

    });


    // ACTIVITY SELECTION
    movieButtons.forEach(button => {

        button.addEventListener("click", function () {

            let activityChoice = button.textContent;

            // Push into array
            activityChoices.push(activityChoice);

            // Save array properly
            localStorage.setItem(
                "activityChoices",
                JSON.stringify(activityChoices)
            );

            // Hide only clicked activity
            button.style.display = "none";
        });

    });

    // DONE BUTTON
    doneButton.addEventListener("click", function () {
        window.location.href = "final.html";
    });

});
