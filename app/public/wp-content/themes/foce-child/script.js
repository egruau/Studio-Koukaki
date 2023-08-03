function scrollAnimation(targetClass, targetContainer, animation) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const section = entry.target.querySelector(`${targetClass}`);
            if (entry.isIntersecting) {
                section.classList.add(`${animation}`);
                return;
                console.log('interieur fonction');
            }
            section.classList.remove(`${animation}`);
        });
    });

    const elements = document.querySelectorAll(`${targetContainer}`);
    elements.forEach(element => observer.observe(element));
}

scrollAnimation('.studio__title__first', '#studio', 'gradient-box');
scrollAnimation('.studio__title__second', '#studio', 'gradient-box');
scrollAnimation('.story h2', '.story', 'gradient-box');

console.log('coucou')