
// SHIFA — DATA & INTELLIGENCE LAB

document.addEventListener("DOMContentLoaded", () => {
    console.log("Data & Intelligence Lab initialized.");

    // Add a subtle reveal effect as sections enter the viewport.
    const revealElements = document.querySelectorAll(
        ".project-card, .lab-note, .about-content"
    );

    // Keep content visible if the browser does not support this feature.
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries, currentObserver) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        currentObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.08
            }
        );

        revealElements.forEach((element) => {
            element.classList.add("reveal");
            observer.observe(element);
        });
    }
});

