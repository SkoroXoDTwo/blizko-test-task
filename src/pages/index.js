import "./index.scss";

const headerBlock = document.querySelector('.header');
const pageBlock = document.querySelector('.page');
const moreBtns = document.querySelectorAll('.card__btn-more');
const burgerBtn = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');

pageBlock.style.paddingTop = `${headerBlock.offsetHeight}px`

moreBtns.forEach((btn) => {
  btn.addEventListener(('click'), (e) => {
    const content = e.target.nextElementSibling;

    if(content.style.maxHeight) {
      e.target.textContent = 'Подробнее';
      content.style.maxHeight = null;
    }
    else {
      e.target.textContent = 'Свернуть';
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  })
});

burgerBtn.addEventListener(('click'), (e) => {

  if(headerMenu.style.maxHeight) {
    burgerBtn.classList.remove('header__burger_close');
    headerMenu.style.maxHeight = null;
  }
  else {
    burgerBtn.classList.add('header__burger_close');
    headerMenu.style.maxHeight = headerMenu.scrollHeight + 'px';
  }
})
