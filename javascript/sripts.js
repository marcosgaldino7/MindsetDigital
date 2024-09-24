let links = document.querySelectorAll('.js-link');
let sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop -112;
        let heightModulos = section.offsetHeight;
        let idSection = section.getAttribute('id');

        if (top >= offset && top < offset + heightModulos) {
            links.forEach(link => {
                link.classList.remove('actived');
                document.querySelector(`header nav a[href*='${idSection}']`).classList.add('actived');
            });
        }
    });
});

function scrollSection(event){
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');

    const section = document.querySelector(href)

    let topSection = section.offsetTop -112;

    window.scrollTo({
        top: topSection,
        behavior: `smooth`
    })
}

links.forEach(link =>{
    link.addEventListener('click', scrollSection)
})
