document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1400,
    });

    // Scroll detection for navbar background and text color change
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarBrand = document.querySelector(".navbar-brand");
    const chipsetSection = document.getElementById("chipset-section");
    const batterySection = document.getElementById("battery-section");

    window.addEventListener("scroll", () => {
        const chipsetBottom = chipsetSection.getBoundingClientRect().bottom;
        const batteryTop = batterySection.getBoundingClientRect().top;

        // Check if we're in the Battery section
        if (batteryTop <= window.innerHeight && chipsetBottom <= 0) {
            navbar.classList.add("light-navbar");
            navbar.classList.remove("dark-navbar");
        } else {
            navbar.classList.add("dark-navbar");
            navbar.classList.remove("light-navbar");
        }
    });
});

function updatePerformanceDescriptions() {
    const dropdown = document.getElementById("comparison-dropdown");
    const selectedValue = dropdown.value;

    const firstPerformance = document.querySelector("#chipset-section .col-md-6:nth-child(1) p:nth-child(2)");
    const secondPerformance = document.querySelector("#chipset-section .col-md-6:nth-child(2) p:nth-child(2)");

    if (selectedValue === "15-plus" || selectedValue === "15") {
        firstPerformance.textContent = "30% faster";
        secondPerformance.textContent = "40% faster";
    } else if (selectedValue === "14-plus" || selectedValue === "14") {
        firstPerformance.textContent = "50% faster";
        secondPerformance.textContent = "50% faster";
    }
}