const elementsToAnimate = document.querySelectorAll('#about-us');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    treshold: 0.15
};
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
};
const observer = new IntersectionObserver(observerCallback, observerOptions);
elementsToAnimate.forEach(element => {
    observer.observe(element);
});



console.log("meow hi im here");
console.log("cooperation, please... :c");
// I love JavaScript! :3
console.log("Here is a 'Random' Number :3 " + Math.floor(Math.random() *  Math.floor(Math.random() + 1 * 999.97 )));