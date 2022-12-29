import "./index.scss";

const headerBlock = document.querySelector('.header');
const pageBlock = document.querySelector('.page');

pageBlock.style.paddingTop = `${headerBlock.offsetHeight}px`
