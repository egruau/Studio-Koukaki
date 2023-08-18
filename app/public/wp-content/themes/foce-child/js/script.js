// Fonction qui permet d'ajouter des animations au scroll de la page // 
function scrollAnimation(targetClass, targetContainer, animation) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const section = entry.target.querySelector(`${targetClass}`);
            if (entry.isIntersecting) {
                section.classList.add(`${animation}`);
                return;
            }
            section.classList.remove(`${animation}`);
        });
    });

    const elements = document.querySelectorAll(`${targetContainer}`);
    elements.forEach(element => observer.observe(element));
}


scrollAnimation('.story__title', '.story h2', 'fadeIn');
scrollAnimation('.studio__title__first', '#studio', 'fadeIn');
scrollAnimation('.studio__title__second', '#studio', 'fadeIn');



// Parralaxe bannière // 
const parallaxTitle = document.querySelector('.parallax-title');
console.log(parallaxTitle);
const parallaxBg = document.querySelector('.parallax');

window.addEventListener('scroll', function() {
  let scrolled = window.scrollY;
  let bannerImg = this.document.querySelector('.banner img');
  parallaxTitle.style.transform = 'translateY(' + (scrolled * 0.5 * -1) + 'px)';
  parallaxBg.style.transform = 'translateY(' + (scrolled * 0.2) + 'px)';
  
  if (scrolled === 0) {
    bannerImg.classList.add('banner__img__animation');
  } else {
    bannerImg.classList.remove('banner__img__animation');
    bannerImg.classList.remove('fadeIn_banner__img__animation');
  }
});



// Parralaxe nuages //

const bigCloud = document.querySelector('.clouds');
let isScrolling = false;

const vitesse1 = 1; // Ajustez la vitesse

function adjustCloudPosition(cloud, startRight, vitesse) {
  const container = document.querySelector('#place');
  const containerHeight = container.clientHeight;
  const scrollPosition = window.scrollY;

  const maxScroll = -containerHeight;

  const scrollPercentage = scrollPosition / maxScroll;
  const maxRightPosition = 300;

  const cloudStartRight = startRight;
  const cloudEndRight = cloudStartRight + maxRightPosition;

  const cloudCurrentRight = cloudStartRight + (scrollPercentage * (cloudEndRight - cloudStartRight)) * vitesse;
  cloud.style.transform = `translateX(${cloudCurrentRight}px)`;
}

function handleScroll() {
  if (!isScrolling) {
    requestAnimationFrame(function() {
      adjustCloudPosition(bigCloud, 500, vitesse1);
      isScrolling = false;
    });
  }
}

// Attacher l'événement de défilement à la fonction d'ajustement
window.addEventListener('scroll', handleScroll);



// Menu burger //
function openMenu() {
  document.querySelector('.header__nav').classList.add('open');
  document.querySelector('.header__nav').classList.add('fadeIn');
  document.querySelector('.header__nav__menu__link-story span').classList.add('fadeInHeader');
  document.querySelector('.header__nav__menu__link-characters span').classList.add('fadeInHeader');
  document.querySelector('.header__nav__menu__link-place span').classList.add('fadeInHeader');
  document.querySelector('.header__nav__menu__link-studio span').classList.add('fadeInHeader');
  document.querySelector('.header__nav__menu__link-studio .span__second').classList.add('fadeInHeader');
  document.querySelector('.header__banner__burger__closed').classList.add('open');
  document.querySelector('.header__banner__burger__open').classList.add('close');
}

function closeMenu() {
  document.querySelector('.header__nav').classList.remove('open');
  document.querySelector('.header__nav').classList.remove('fadeIn');
  document.querySelector('.header__nav__menu__link-story span').classList.remove('fadeInHeader');
  document.querySelector('.header__nav__menu__link-characters span').classList.remove('fadeInHeader');
  document.querySelector('.header__nav__menu__link-place span').classList.remove('fadeInHeader');
  document.querySelector('.header__nav__menu__link-studio span').classList.remove('fadeInHeader');
  document.querySelector('.header__nav__menu__link-studio .span__second').classList.remove('fadeInHeader');
  document.querySelector('.header__banner__burger__closed').classList.remove('open');
  document.querySelector('.header__banner__burger__open').classList.remove('close');
  
}


let links = document.querySelectorAll('.header__nav__menu__link a');
console.log(links);

links.forEach(link => {
  link.addEventListener("click", closeMenu);
});