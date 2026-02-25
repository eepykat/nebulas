const elementsToAnimate = document.querySelectorAll('#about-us');


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


document.addEventListener('DOMContentLoaded', () => {
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      console.log('JavaScript Works');
    }
  });
}, { threshold: 0.1, rootMargin: '0px' });
document.querySelectorAll('#offer1 .offer2-desc-box').forEach(box => observer2.observe(box));
});

document.addEventListener('DOMContentLoaded', () => {
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      console.log('JavaScript Works');
    }
  });
}, { threshold: 0.1, rootMargin: '0px' });
document.querySelectorAll('#offer1 .offer1-desc-box').forEach(box => observer2.observe(box));
});


console.log("meow hi im here");
console.log("cooperation, please... :c");
// I love JavaScript! :3
console.log("Here is a 'Random' Number :3 " + Math.floor(Math.random() *  Math.floor(Math.random() + 1 * 999.97 )));