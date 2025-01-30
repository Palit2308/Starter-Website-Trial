// Wait for 3 seconds, then show the "Continue" button
setTimeout(() => {
    let button = document.getElementById("continueButton");
    button.classList.remove("hidden");
    button.style.animation = "fadeIn 2s ease-in-out forwards";

    // Add click event to navigate to page2.html
    button.addEventListener("click", () => {
        window.location.href = "page2.html";
    });
}, 3000);

document.getElementById("seriousBtn").addEventListener("click", function () {
    window.location.href = "serious.html"; // Redirect to another website or page
});

document.getElementById("funBtn").addEventListener("click", function () {
    window.location.href = "fun.html"; // Redirect to another website or page
});