document.getElementById('homebtn').addEventListener('click', function () {
    window.location.href = `${window.location.origin}/index.html`;
});




document.getElementById('donateLink').addEventListener('click', function () {
    window.location.href = `${window.location.origin}/pages/forms-page/donation-form.html`;
});




document.getElementById('applicationLink').addEventListener('click', function () {
    window.location.href = `${window.location.origin}/pages/forms-page/application-form.html`;
});

document.getElementById('otherworksLink').addEventListener('click', function () {
    window.location.href = `${window.location.origin}/pages/other-works-page/other-works.html`;
});

document.getElementById('partnersLink').addEventListener('click', function () {
    window.location.href = `${window.location.origin}/pages/partnerpage/partner.html`;
});


document.getElementById('servicesLink').addEventListener('click', function () {
    window.location.href = `${window.location.origin}/pages/services-page/services-page.html`;
});

document.getElementById('eventsLink').addEventListener('click', function () {
    window.location.href = `${window.location.origin}/pages/events-page/events.html`;
});



var hero = document.getElementById('hero');
var heroPlaceholder = document.getElementById('placeholder');



document.addEventListener("DOMContentLoaded", () => {
    const hero = document.getElementById("hero");
    const myspan = document.getElementById("myspan");
    const heroPlaceholder = document.getElementById("placeholder");
    const imageProgress = document.getElementById("imageProgress");

    // Array of background images
    const images = [
        "url('/assets/images/landingpage/1.png')",
        "url('/assets/images/landingpage/23.png')",
        "url('/assets/images/landingpage/24.png')",
    ];

    // Placeholder text array
    const placeholder = [
        'BE BRAVE TO BE YOU',
        "Mindanao's Leading LGBTQ+ Organization",
        "Unity in Diversity",
    ];
    let currentIndex = 0;
    const progressDuration = 5000; // Duration in milliseconds for the progress bar to fill (5 seconds)
    const progressUpdateInterval = 100; // Interval to update the progress bar in milliseconds

    // Function to change the background and placeholder text
    const changeBackground = () => {
        hero.style.backgroundImage = images[currentIndex];
        heroPlaceholder.innerHTML = placeholder[currentIndex];
        heroPlaceholder.style.transition = "500ms";
        // Change the span color depending on the image index
        if (currentIndex === 1) {
            heroPlaceholder.style.fontSize = "4.17vw"; // Corrected: removed extra space
        } else if (currentIndex === 2) {
            heroPlaceholder.style.fontSize = "5.77vw"; // Corrected: removed extra space
        }
        else if (currentIndex === 0) {
            heroPlaceholder.style.fontSize = "7.77vw"; // Corrected: removed extra space
        }



        currentIndex = (currentIndex + 1) % images.length; // Cycle through images
    };

    // Function to update the progress bar and change background when progress completes
    const updateProgressBar = () => {
        let progressValue = 0;

        const interval = setInterval(() => {
            progressValue += (100 / (progressDuration / progressUpdateInterval));
            imageProgress.value = progressValue;

            // When progress reaches 100%, change background and reset progress
            if (progressValue >= 100) {
                clearInterval(interval);
                changeBackground();
                startProgressCycle();
            }
        }, progressUpdateInterval);
    };

    // Function to start the progress bar cycle
    const startProgressCycle = () => {
        imageProgress.value = 0; // Reset progress bar value
        updateProgressBar(); // Start updating the progress bar
    };

    // Start the cycle when the page loads
    changeBackground(); // Set initial background and text
    startProgressCycle();
});


