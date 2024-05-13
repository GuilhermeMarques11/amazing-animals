import ScrollSuave from "./modules/scroll-suave.js";
import initiAnimacaoScroll from "./modules/scroll-animacao.js";
import initiAccordion from "./modules/accordion.js";
import initiTabNav from "./modules/tabnav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropdown-menu.js";
import initiMenuMobile from "./modules/menu-mobile.js";
import initiFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bictoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initiAnimacaoScroll();
initiAccordion();
initiTabNav();
initModal();
initTooltip();
initDropDownMenu();
initiMenuMobile();
initiFuncionamento();
initFetchAnimais();
initFetchBitcoin();