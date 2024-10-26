//Define possible moods with associated image
const moods=[
    { mood: "happy", Imagesrc:"Emoji/2.jpg" },
    { mood: "sad", Imagesrc:"Emoji/3.jpg" },
    { mood: "hungry", Imagesrc:"Emoji/5.jpg" },
    { mood: "thirsty", Imagesrc:"Emoji/7.jpg" },
    { mood: "angry", Imagesrc:"Emoji/4.jpg" },
    { mood: "extenstential Dread", Imagesrc:"Emoji/6.jpg" },
];
//Function to change mood
function changeMood() {
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    document.body.style.backgroundImage = `url(${randomMood.Imagesrc})`;
    document.getElementById("mood-text").innerText = `I am feeling ${randomMood.mood}`;

    // Apply mood image and text

    document.body.style.backgroundImage = `url(${randomMood.Imagesrc})`;

    document.getElementById("mood-text").innerText = `I am feeling ${randomMood.mood}`;
}

//Instalize a random mood on page load changeMood()

// Button click event to switch pages

document.getElementById("mood-button").addEventListener("click", function() {
    window.location.href = "happy"; // Change this to your desired page
});


// Add event listener to button
document.getElementById("mood-button").addEventListener("click", changeMood);
