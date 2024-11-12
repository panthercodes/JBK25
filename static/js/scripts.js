window.addEventListener('scroll', function () {

    var navbar = document.getElementById('navbar');

    var scrollPosition = window.scrollY;

    if (scrollPosition >= 200) {

        navbar.classList.add('scrolled');

    } else if (scrollPosition < 200) {
        navbar.classList.remove('scrolled');
    }
});

// Carousel
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);
        })
    });
}


const texts = [
    "Find a cure for diseases",
    "Maintain industry standards",
    "Push your drug to the next level",
    "Breakdown policies and procedures",
    "Ensure products meet FDA standards",
    "Streamline the submission process",
    "Build a motivated team"
];
let index = 0;
let textIndex = 0;
let isDeleting = false;

function typeText() {
    const currentText = texts[index];
    const textToShow = isDeleting ? currentText.slice(0, textIndex - 1) : currentText.slice(0, textIndex + 1);

    document.getElementById("typing-text").textContent = textToShow;


    if (!isDeleting && textIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeText, 500);
    } else if (isDeleting && textIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
        document.getElementById("typing-text").textContent = ""; // Clear text immediately after deleting
        setTimeout(typeText, 500);
    } else {
        setTimeout(typeText, isDeleting ? 30 : 100);
    }

    textIndex = isDeleting ? textIndex - 1 : textIndex + 1;
}

typeText();