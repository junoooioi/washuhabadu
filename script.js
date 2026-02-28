// Get the Next button element by its class or ID
const nextButton = document.querySelector(".next-btn"); // or use getElementById if you added id="next-btn"

// Add click event to the button
nextButton.addEventListener("click", function() {
    // Navigate to the next page
    window.location.href = "nari.html"; // replace with your actual next page file
});