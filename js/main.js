var elBody = document.querySelector('body');
var toggler = document.querySelector('.burger__btn');
var siteNavOpen = document.querySelector('.site-header__bottom');

elBody.classList.remove('nojs');

toggler.addEventListener('click', function() {
  siteNavOpen.classList.toggle('sitenav-open');
});


toggler.addEventListener ('click', function(){
  toggler.classList.toggle('burger__btn--close');
});