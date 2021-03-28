let elBody = document.querySelector('body');
let toggler = document.querySelector('.burger__btn');
let siteNavOpen = document.querySelector('.site-header__bottom');
let preevBtn = document.querySelector('.slider__btn--preev');
let nextBtn = document.querySelector('.slider__btn--next');
let sliderItem = document.querySelectorAll('.slider__item');
elBody.classList.remove('nojs');


toggler.addEventListener('click', function() {
  siteNavOpen.classList.toggle('sitenav-open');
});

toggler.addEventListener ('click', function(){
  toggler.classList.toggle('burger__btn--close');
});


let index = 0;

document.documentElement.style.setProperty("--index", index)

nextBtn.addEventListener('click', function() {
  if(index <= 3) {
    index = index + 1
  }
  sliderItem.forEach(item=> {
    item.style.transform=`translateX(calc(${index * -230}px))`;
  })
})

preevBtn.addEventListener('click', function() {
  if(index >= -3)
  index = index - 1
  sliderItem.forEach(item=> {
    item.style.transform = `translateX(calc(${index * -230}px ))`;
  })
})