export default function initTooltip() {
    const tooltips = document.querySelectorAll('[data-tooltip]');

tooltips.forEach(item => {
    item.addEventListener('mouseover', onMouseOver);
})

function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this);
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
}

const onMouseLeave = {
    handleEvent() {
        this.tooltipBox.remove();
        this.element.removeEventListener('mouseleave', onMouseLeave);
        this.element.removeEventListener('mousemove', onMouseMove);
    }
}

const onMouseMove = {
    handleEvent(event) {
        this.tooltipBox.style.top = event.pageY + 20 + 'px';
        this.tooltipBox.style.left = event.pageX + 20 + 'px';
    }
}
function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
}
}

//Explicação:
// const tooltips = document.querySelectorAll('[data-tooltip]');: Seleciona todos os elementos no documento que possuem o atributo data-tooltip e armazena-os em uma NodeList chamada tooltips.

// tooltips.forEach(item => { item.addEventListener('mouseover', onMouseOver); }): Adiciona um ouvinte de evento de mouseover a cada elemento na NodeList tooltips. Quando o mouse passa sobre um desses elementos, a função onMouseOver será chamada.

// function onMouseOver(event) { ... }: Esta função é chamada quando o mouse passa sobre um elemento com o atributo data-tooltip. Ela cria um elemento de tooltip, o adiciona ao corpo do documento e adiciona ouvintes de eventos para o mousemove (para seguir o movimento do mouse) e mouseleave (para remover o tooltip quando o mouse sai do elemento).

// const onMouseLeave = { ... }: Um objeto que contém um método chamado handleEvent, que é utilizado como ouvinte de eventos para o mouseleave. Quando o mouse sai do elemento, esse método é chamado para remover o tooltip.

// const onMouseMove = { ... }: Outro objeto que contém um método chamado handleEvent, utilizado como ouvinte de eventos para o mousemove. Ele atualiza a posição do tooltip com base na posição atual do mouse.

// function criarTooltipBox(element) { ... }: Esta função cria um elemento div (tooltip) e o adiciona ao corpo do documento. Ela também extrai o texto do atributo aria-label do elemento original e o coloca no tooltip. O tooltip é então retornado.