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
// // Get the element to be parallaxed
// const parallaxElement = document.querySelector('.parallax')

// // The parallax function
// const parallax = element => {
//     if ('undefined' !== element) {
//         let y = window.innerHeight - element.getBoundingClientRect().top
//         if (y > 0) {
//             element.style.transform = 'translate3d(0, -' + (0.15 * y) + 'px ,0)'
//         }
//     }
// }

// // If the element is in the viewport, set its position
// // parallax(parallaxElement)

// // Call the function on scroll
// window.onscroll = () => {
//     parallax(parallaxElement)
// }

// Parralaxe nuages //

const bigCloud = document.querySelector('.clouds');
let isScrolling = false;

const vitesse1 = 1; // Ajustez la vitesse pour Big Cloud
const vitesse2 = 1; // Ajustez la vitesse pour Little Cloud

function adjustCloudPosition(cloud, startRight, vitesse) {
  const container = document.querySelector('#place');
  const containerHeight = container.clientHeight;
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;

  const maxScroll = containerHeight - windowHeight;
  const scrollPercentage = scrollPosition / maxScroll;
  const maxRightPosition = 300;

  const cloudStartRight = startRight;
  console.log(startRight);
  const cloudEndRight = cloudStartRight + maxRightPosition;

  const cloudCurrentRight = cloudStartRight + (scrollPercentage * (cloudEndRight - cloudStartRight)) * vitesse;
  cloud.style.transform = `translateX(${cloudCurrentRight}px)`;
}

function handleScroll() {
  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(function() {
      adjustCloudPosition(bigCloud, 0, vitesse1);
      isScrolling = false;
    });
  }
}

// Appeler initialement la fonction d'ajustement pour la position de départ
adjustCloudPosition(bigCloud, 0, vitesse1);

// Attacher l'événement de défilement à la fonction d'ajustement
window.addEventListener('scroll', handleScroll);