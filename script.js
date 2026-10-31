document.addEventListener("DOMContentLoaded", () => {

    // Появление элементов при прокрутке
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.15
    });

    document.querySelectorAll(".reveal").forEach(element => {
        observer.observe(element);
    });

    // Текущий год
    document.getElementById("year").textContent =
        new Date().getFullYear();

});