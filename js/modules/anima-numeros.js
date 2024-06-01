export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget); // Corrigido o operador de atribuição
    this.observerClass = observerClass;
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Recebe um elemento do DOM com número em seu texto (string)
  // Incrementa a partir de 0 até o número final
  static incrementoNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // Ativa incrementoNumero para cada
  // número selecionado do DOM
  animaNumeros() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementoNumero(numero);
    });
  }

  // Método que lida com as mutações observadas
  handleMutation(mutations) {
    if (mutations[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // Adiciona o observador de mutação
  addMutationObserver() {
    if (this.observerTarget) { // Verifica se o alvo do observador é válido
      this.observer = new MutationObserver(this.handleMutation);
      this.observer.observe(this.observerTarget, { attributes: true });
    } else {
      console.error('Observer target not found');
    }
  }

  // Método de inicialização da animação
  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    } else {
      console.error('Numeros or observer target not found');
    }
    return this;
  }
}
