const GAMES = {
    pc: [
        { title: 'Counter-Strike 2', genre: 'Тактический шутер', img: 'images/games/cs2.jpg', text: 'Легендарная классика в новом качестве. Рейтинговые матчи и клатчи на 240 Гц — каждый фраг решает.' },
        { title: 'VALORANT', genre: 'Шутер 5v5', img: 'images/games/valorant.jpg', text: 'Точная стрельба, способности агентов и командная тактика. Залетай в рейтинг и докажи, что ты лучший дуэлянт.' },
        { title: 'Dota 2', genre: 'MOBA', img: 'images/games/dota2.jpg', text: 'Стратегия, макроконтроль и миллионы комбинаций героев. Собирай команду и забирай свой дивизион.' },
        { title: 'Apex Legends', genre: 'Королевская битва', img: 'images/games/apex.jpg', text: 'Динамичные перестрелки, легенды со способностями и командный драйв. Выживи и забери арену.' },
        { title: 'PUBG', genre: 'Королевская битва', img: 'images/games/pubg.jpg', text: '100 игроков, один сужающийся круг и ни одной второй попытки. Классика батл-ройлей на мощных сборках.' },
        { title: 'Rust', genre: 'Выживание', img: 'images/games/rust.jpg', text: 'Рейды, кланы и борьба за ресурсы. Построй базу, защити лут и покажи, кто здесь главный.' },
        { title: 'Cyberpunk 2077', genre: 'RPG', img: 'images/games/cyberpunk.jpg', text: 'Найт-Сити на ультра-настройках с RTX. Погрузись в историю V без тормозов и просадок.' },
        { title: 'GTA V', genre: 'Экшен', img: 'images/games/gta5.jpg', text: 'Лос-Сантос ждёт: гонки, перестрелки и GTA Online с друзьями на стабильных 144+ FPS.' },
        { title: 'Fortnite', genre: 'Батл-ройль', img: 'images/games/fortnint.jpg', text: 'Стройся, стреляй и побеждай. Zero Build или классика — выбирай режим и забирай Victory Royale.' },
        { title: 'CS 1.6', genre: 'Классика шутеров', img: 'images/games/cs16.jpg', text: 'Та самая легенда из компьютерных клубов. Даст2, распрыжка и ностальгия на максимум.' },
    ],
    ps5: [
        { title: 'GTA V', genre: 'Экшен', img: 'images/games/gta5.jpg', text: 'Лос-Сантос в 4K на большом экране. История и онлайн — играй с комфортом в PS5-зоне.' },
        { title: 'Hogwarts Legacy', genre: 'Приключение', img: 'images/games/hp.jpg', text: 'Открой Хогвартс и его окрестности в детализированном мире. Магия, квесты и дуэли.' },
        { title: 'Minecraft', genre: 'Песочница', img: 'images/games/minecraft.jpg', text: 'Строй, выживай и исследуй без границ. Идеально для игры с друзьями на одном диване.' },
        { title: 'Fortnite', genre: 'Батл-ройль', img: 'images/games/fortnint.jpg', text: 'Королевская битва на большом экране с геймпадом. Быстрые матчи и чистый фан.' },
        { title: 'Roblox', genre: 'Платформа игр', img: 'images/games/roblox.jpg', text: 'Тысячи мини-игр на любой вкус. Заходи и находи своё новое любимое приключение.' },
        { title: 'World of Tanks', genre: 'Экшен', img: 'images/games/tanks.jpg', text: 'Танковые сражения на большом экране. Прокачивай технику и забирай победные серии.' },
        { title: 'Warface', genre: 'Шутер', img: 'images/games/warface.jpg', text: 'Онлайн-шутер с кооперативными миссиями и PvP. Динамика и командная игра на большом экране.' },
    ],
};

const slideTemplate = (game, device) => `
  <div class="swiper-slide">
    <article class="game-card">
      <div class="game-card__bg" aria-hidden="true">
        <img src="${game.img}" alt="" loading="lazy" />
      </div>
      <span class="game-card__platform">${device === 'pc' ? 'PC' : 'PS5'}</span>
      <div class="game-card__cover">
        <img src="${game.img}" alt="${game.title}" loading="lazy" />
      </div>
      <div class="game-card__content">
        <span class="game-card__genre">${game.genre}</span>
        <h3 class="game-card__title">${game.title}</h3>
        <p class="game-card__text">${game.text}</p>
      </div>
    </article>
  </div>
`;

export const initGamesSlider = () => {
    const container = document.querySelector('[data-games-swiper]');
    if (!container) return;

    const wrapper = container.querySelector('[data-games-wrapper]');
    let swiper = null;

    const renderSlides = (device) => {
        wrapper.innerHTML = GAMES[device].map((game) => slideTemplate(game, device)).join('');
    };

    const createSwiper = () => {
        if (swiper) {
            swiper.destroy(true, true);
            swiper = null;
        }

        swiper = new Swiper(container, {
            effect: 'cards',
            grabCursor: true,
            loop: true,
            speed: 800,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 24,
                shadowScale: 0.94,
            },
            autoplay: {
                delay: 6000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
            },
            keyboard: { enabled: true, onlyInViewport: true },
            pagination: { el: '[data-games-pagination]', clickable: true },
            navigation: { nextEl: '[data-games-next]', prevEl: '[data-games-prev]' },
            on: {
                init(s) {
                    // Подстраховка: форсируем пересчёт размеров после старта
                    requestAnimationFrame(() => s.update());
                },
            },
        });
    };

    const start = () => {
        renderSlides('pc');
        createSwiper();

        document.addEventListener('device:change', (e) => {
            const device = e.detail?.device;
            if (!device || !GAMES[device]) return;
            renderSlides(device);
            createSwiper();
        });
    };

    // Если Swiper ещё не загрузился (например, медленный CDN) — ждём window.load
    if (typeof Swiper !== 'undefined') {
        start();
    } else {
        window.addEventListener('load', () => {
            if (typeof Swiper !== 'undefined') {
                start();
            } else {
                console.error('[games slider] Библиотека Swiper не загрузилась. Проверь ссылку на swiper-bundle.min.js');
            }
        }, { once: true });
    }
};