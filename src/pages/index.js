import "./index.scss";

const headerBlock = document.querySelector('.header');
const pageBlock = document.querySelector('.page');
const moreBtns = document.querySelectorAll('.card__btn-more');

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
