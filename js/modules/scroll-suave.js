//Scroll Suave para links internos
export default function initiScrollSuave() {
    const linksInternos = document.querySelectorAll('a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = this.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        // Forma alternativa usando scrollTo()
        // const topo = section.offsetTop;
        // window.scrollTo({
        //     top: topo,
        //     behavior: "smooth",
        // });
    }
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}
initiScrollSuave();