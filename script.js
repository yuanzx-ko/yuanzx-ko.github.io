// 触发页面动画效果
gsap.from("#home", {duration: 1, opacity: 0, y: 50});
gsap.from("#recruitment", {duration: 1, opacity: 0, y: 50, delay: 0.5});
gsap.from("#services", {duration: 1, opacity: 0, y: 50, delay: 1});
gsap.from("#contact", {duration: 1, opacity: 0, y: 50, delay: 1.5});
gsap.from("#recruitment-info", {duration: 1, opacity: 0, y: 50, delay: 2});
gsap.from("#about", {duration: 1, opacity: 0, y: 50, delay: 2.5});

// 触发滚动动画效果
const sections = document.querySelectorAll("section");
const windowHeight = window.innerHeight;

const animateSection = function() {
    for (let i = 0; i < sections.length; i++) {
        let section = sections[i];
        let sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
            gsap.to(section, {duration: 1, opacity: 1, y: 0});
        }
    }
}

window.addEventListener("scroll", function() {
    animateSection();
})