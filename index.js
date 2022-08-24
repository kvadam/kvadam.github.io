// Hamburger menu

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");
});

// Contact

const addressIcon = document.getElementById("address-icon");
const addressText = document.getElementById("address-text");

const phoneIcon = document.getElementById("phone-icon");
const phoneNumberText = document.getElementById("phone-number-text");

const emailIcon = document.getElementById("email-icon");
const emailText = document.getElementById("email-text");

addressIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(addressText.innerText);
});

phoneIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(phoneNumberText.innerText);
});

emailIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(emailText.innerText);
});
