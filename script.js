function getRandomData(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateMood(plantType) {
    const moisture = getRandomData(0, 100); // Simulated moisture level
    const sunlight = getRandomData(0, 100); // Simulated sunlight level

    let moodMessage;

    if (plantType === "rose") {
        moodMessage = moisture > 70 ? "🌧️ Overwatered" :
                      moisture > 40 ? "🌞 Thriving" :
                      "💧 Needs Water";
    } else if (plantType === "sunflower") {
        moodMessage = sunlight > 80 ? "☀️ Soaking up the sun!" :
                      sunlight > 50 ? "🌻 Feeling Sunny" :
                      "🌥️ Needs More Sun";
    } else if (plantType === "tulip") {
        moodMessage = moisture > 60 ? "🌷 Blooming" :
                      moisture > 30 ? "🌱 Growing" :
                      "💧 Thirsty";
    }

    document.getElementById(`${plantType}Mood`).textContent = moodMessage;
    document.getElementById(`${plantType}Moisture`).textContent = `${moisture}%`;
    document.getElementById(`${plantType}Light`).textContent = sunlight > 50 ? "High" : "Low";
    document.getElementById(`${plantType}Temp`).textContent = `${getRandomData(15, 30)}°C`;
}

function startPlantUpdates(plantType) {
    setInterval(() => updateMood(plantType), 5000); // Update mood every 5 seconds
}

// Initial mood display for the page
window.onload = function() {
    startPlantUpdates(document.title.toLowerCase().split(' - ')[0]); // Starts updates based on the plant type from the title
};
