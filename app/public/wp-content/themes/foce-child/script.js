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