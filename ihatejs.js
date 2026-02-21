const elementsToAnimate = document.querySelectorAll('container1');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    treshold: 0.1
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