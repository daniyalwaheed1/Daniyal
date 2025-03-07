     // Initialize Vanta.js with Halo effect
     VANTA.HALO({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        backgroundColor: 0x0,
        amplitudeFactor: 2.00,
        size: 1.50
    });

    const heroHeading = document.querySelector('.hero-heading');
    const welcomeText = "Welcome to My Portfolio";
    let index = 0;

    function typeWriter() {
        if (index < welcomeText.length) {
            heroHeading.textContent += welcomeText.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Adjust speed here (100ms per character)
        } else {
            const remainingTime = 2000 - (welcomeText.length * 100);
            setTimeout(() => {
                heroHeading.style.display = 'none';
                const aboutContainer = document.querySelector('.about-container');
                aboutContainer.style.visibility = 'visible';
                aboutContainer.style.opacity = '1';
            }, remainingTime);
        }
    }

   

// Get the elements for the menu toggle and the menu itself
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

// Toggle the visibility of the menu on click
menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("visible"); // This will show/hide the menu
    menuToggle.classList.toggle("active"); // This will toggle the hamburger icon
});


typeWriter();





    

    
    
    
    





