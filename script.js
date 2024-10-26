
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

