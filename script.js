// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the button element by its class name
    var buttons = document.getElementsByClassName("alertButton");

    // Ensure there is at least one element with the class name
    if (buttons.length > 0) {
        // Attach an event listener to the first button
        buttons[0].addEventListener("click", function() {
            // Display an alert message when the button is clicked
            alert("Item added to cart");
        });
    }
});



