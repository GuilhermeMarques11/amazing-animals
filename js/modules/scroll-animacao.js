// Animação no Scroll
export default function initAnimacaoScroll() {
    const allSections = document.querySelectorAll('[data-anime="scroll"]');
if (allSections.length) {
    const windowMetade = window.innerHeight * 0.6;
    function animaScroll() {
        allSections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowMetade) < 0;
            if(isSectionVisible) 
                section.classList.add('ativo');
            else if (section.classList.contains('ativo')){
                section.classList.remove('ativo');
            }  
        })
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
}
}