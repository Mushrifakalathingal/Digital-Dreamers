
// Common refresh interval for all pages (in milliseconds)
const REFRESH_INTERVAL = 10000;

// Utility function to simulate random data within a range (e.g., moisture, sunlight)
function getRandomData(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to update mood based on sensor readings
function updateMood(moisture, sunlight, plantType) {
    let moodMessage;

    if (plantType === "rose") {
        if (moisture > 70) {
            moodMessage = "🌧️ Overwatered";
        } else if (moisture > 40) {
            moodMessage = "🌞 Thriving";
        } else {
            moodMessage = "💧 Needs Water";
        }
    } else if (plantType === "sunflower") {
        if (sunlight > 80) {
            moodMessage = "☀️ Soaking up the sun!";
        } else if (sunlight > 50) {
            moodMessage = "🌻 Feeling Sunny";
        } else {
            moodMessage = "🌥️ Needs More Sun";
        }
    } else if (plantType === "tulip") {
        if (moisture > 60) {
            moodMessage = "🌷 Blooming";
        } else if (moisture > 30) {
            moodMessage = "🌱 Growing";
        } else {
            moodMessage = "💧 Thirsty";
        }
    }

    return moodMessage;
}


// Function to edit plant details
function editPlant(plant) {
    const name = document.getElementById(`${plant}Name`).textContent;
    const mood = document.getElementById(`${plant}Mood`).textContent;

    // Set the current values in the input fields
    document.getElementById(`${plant}EditName`).value = name;
    document.getElementById(`${plant}EditMood`).value = mood;

    // Show the edit form
    document.getElementById(`${plant}EditForm`).style.display = 'block';
}

// Function to save changes
function saveChanges(plant) {
    const newName = document.getElementById(`${plant}EditName`).value;
    const newMood = document.getElementById(`${plant}EditMood`).value;

    // Update the plant card with the new values
    document.getElementById(`${plant}Name`).textContent = newName;
    document.getElementById(`${plant}Mood`).textContent = newMood;

    // Hide the edit form
    document.getElementById(`${plant}EditForm`).style.display = 'none';
}

// Function to cancel editing
function cancelEdit(plant) {
    // Hide the edit form
    document.getElementById(`${plant}EditForm`).style.display = 'none';
}
