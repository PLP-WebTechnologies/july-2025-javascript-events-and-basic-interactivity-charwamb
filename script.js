// INTERACTIVE FEATURE 1: COUNTER //
let count = 0;
const countBtn=
document.getElementById("count-btn");
const countDisplay=
document.getElementById("count-display")
;

countBtn.addEventListener("click", () =>
{
    count++;
    countDisplay.textContent = count;
});

// INTERACTIVE FEATURE 2: THEME SWITCHER //
const themeBtn =
document.getElementById("theme-btn");
themeBtn.addEventListener("click", () =>
{

document.body.classList.toggle("dark-mode");
  themeBtn.textContent =
document.body.classList.contains("dark-mode")
    ? "Switch to Light Mode"
    : "Toggle Dark Mode";
});

// FORM VALIDATION (CUSTOM) //
const form =
document.getElementById("signup-form");
const formMessages =
document.getElementById("form-messages");

form.addEventListener("submit", function (e) {
    e.preventDefault(); //Prevent form from refreshing the page
    formMessages.innerHTML = ""; // Clear old messages
    let errors = [];

    // Username validation
    const username =
    document.getElementById("username")
    .value.trim();
    if (username.length < 3) {
        errors.push("Username must be atleast 3 characters long.");
    }

    // Email validation (basic regex)
    const email = 
    document.getElementById("email").
    trim();
    const emailRegex = /.+@.+\..+/;
    if (!emailRegex.text(email)) {
        errors.push("Please enter a valid email address.");
    }

    // Password validatio
    const password =
    document.getElementById("password")
    .value.trim();
    if (password.length < 6) {
        errors.push("Password must be atleast 6 characters long.");
    }

    // Show results
    if (errors.length > 0) {
        formMessages.style.color = "red";
        formMessages.innerHTML = errors.join("<br>");
    } else {
        formMessages.style.color = "green";
        formMessages.innerHTML = "Form submitted successfully!";
        form.reset();
    }
});


