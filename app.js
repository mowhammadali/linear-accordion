const circles = document.querySelectorAll('.circle');
const sections = document.querySelectorAll('.section');
const contents = document.querySelectorAll('.section__content');

circles.forEach((circle , index) => {
    circle.addEventListener('click' , () => {

        circle.classList.toggle('active');
        sections[index].classList.toggle('active');

        if (contents[index].style.maxHeight) {
            contents[index].style.maxHeight = null;
        } else {
            contents[index].style.maxHeight = contents[index].scrollHeight + "px";
        }

    })
})

contents.forEach((content , index) => {
    if(content.classList.contains('active')){
        content.style.maxHeight = 'fit-content';
    }
})