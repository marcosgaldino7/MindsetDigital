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


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.querySelector('body');
    
    // Mostrar o menu
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        // Adicionar ou remover a classe menu-open no body
        if (mobileMenu.classList.contains('active')) {
            // Descomente a linha abaixo se desejar adicionar algum estilo ao body quando o menu está aberto
            // body.style.overflow = 'hidden';
            body.addEventListener('click', outsideClickListener);
        } else {
            // body.style.overflow = ''; // Reset the overflow property when the menu is closed
            body.removeEventListener('click', outsideClickListener);
        }
    });

    // Fechar o menu se o clique for fora do menu
    function outsideClickListener(event) {
        if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            mobileMenu.classList.remove('active');
            // Reset the overflow property when the menu is closed
            body.style.overflow = ''; 
            body.removeEventListener('click', outsideClickListener);
        }
    }
});