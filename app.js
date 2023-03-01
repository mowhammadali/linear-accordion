const circles = document.querySelectorAll('.circle');
const sections = document.querySelectorAll('.section');
const contents = document.querySelectorAll('.section__content');

circles.forEach((circle , index) => {
    circle.addEventListener('click' , () => {
        circle.classList.toggle('active');
        sections[index].classList.toggle('active');
        contents[index].classList.toggle('active');
    })
})