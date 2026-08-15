export const initFaq = () => {
    const list = document.querySelector('.faq__list');
    if (!list) return;

    const items = [...list.querySelectorAll('.faq__item')];

    // Первичная инициализация: раскрыть первый активный
    items.forEach((item) => {
        const answer = item.querySelector('.faq__answer');
        if (!answer) return;

        if (item.classList.contains('is-active')) {
            answer.style.maxHeight = `${answer.scrollHeight}px`;
        } else {
            answer.style.maxHeight = '0px';
        }
    });

    list.addEventListener('click', (e) => {
        const button = e.target.closest('.faq__question');
        if (!button) return;

        const item = button.closest('.faq__item');
        const answer = item?.querySelector('.faq__answer');
        if (!item || !answer) return;

        const isActive = item.classList.contains('is-active');

        // Закрываем все остальные
        items.forEach((otherItem) => {
            if (otherItem === item) return;
            const otherAnswer = otherItem.querySelector('.faq__answer');
            const otherBtn = otherItem.querySelector('.faq__question');
            if (otherItem.classList.contains('is-active')) {
                otherItem.classList.remove('is-active');
                otherBtn.setAttribute('aria-expanded', 'false');
                otherAnswer.setAttribute('aria-hidden', 'true');
                otherAnswer.style.maxHeight = '0px';
            }
        });

        // Переключаем текущий
        item.classList.toggle('is-active', !isActive);
        button.setAttribute('aria-expanded', String(!isActive));
        answer.setAttribute('aria-hidden', String(isActive));
        answer.style.maxHeight = isActive ? '0px' : `${answer.scrollHeight}px`;
    });

    // Пересчёт высоты при ресайзе (чтобы не обрезалось)
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            items.forEach((item) => {
                if (item.classList.contains('is-active')) {
                    const answer = item.querySelector('.faq__answer');
                    answer.style.maxHeight = `${answer.scrollHeight}px`;
                }
            });
        }, 150);
    });
};