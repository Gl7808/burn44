// 🔹 SCROLL PROGRESS INDICATOR
const scrollProgress = document.getElementById('scrollProgress');
const lenis = new Lenis({
    autoRaf: true,
});
function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
    if (scrollProgress) {
        scrollProgress.style.height = `${percent}%`;
    }
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });
updateScrollProgress();

// 🔹 КОЛОННЫЙ РЕВИЛ-ЭФФЕКТ (Intersection Observer)
const revealColumns = document.querySelectorAll('[data-reveal]');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

revealColumns.forEach(col => revealObserver.observe(col));

// 🔹 ЖЕЛЕЗО (только для Воинов-Интернационалистов)
const deviceDataVoinov = {
    standard: [
        { name: 'Монитор', desc: 'Xiaomi Redmi Display X27G 165 Грц', icon: 'monitor' },
        { name: 'Клавиатура', desc: 'Thunderobot K87R', icon: 'keyboard' },
        { name: 'Мышка', desc: 'Razer DeathAdder Essential Black', icon: 'mouse' },
        { name: 'Наушники', desc: 'A4Tech Fstyler FH200U', icon: 'headphones' },
        { name: 'Кресло', desc: 'Zombie', icon: 'char' },
        { name: 'Процессор', desc: 'Ryzen 5 5600', icon: 'cpu' },
        { name: 'Видеокарта', desc: 'RTX 3060 Ti', icon: 'gpu' },
        { name: 'Оперативка', desc: 'DDR4 16GB', icon: 'ram' },
    ],
    vip: [
        { name: 'Монитор', desc: 'Xiaomi Redmi Display X27G 165 Грц', icon: 'monitor' },
        { name: 'Клавиатура', desc: 'Thunderobot K87R', icon: 'keyboard' },
        { name: 'Мышка', desc: 'Razer DeathAdder Essential Black', icon: 'mouse' },
        { name: 'Наушники', desc: 'Fifine H6', icon: 'headphones' },
        { name: 'Кресло', desc: 'Zombie', icon: 'char' },
        { name: 'Процессор', desc: 'Ryzen 5 5600', icon: 'cpu' },
        { name: 'Видеокарта', desc: 'RTX 4060', icon: 'gpu' },
        { name: 'Оперативка', desc: 'DDR4 16GB', icon: 'ram' },
    ]
};



const icons = {
    monitor: `<svg viewBox="0 -18.04 122.88 122.88" xmlns="http://www.w3.org/2000/svg"><path d="M2.08,0H120.8h2.08v2.08v69.2v2.08h-2.08H77.57v8.29h7.28v5.15H37.88v-5.15h7.28v-8.29H2.08H0v-2.08V2.08V0H2.08L2.08,0 L2.08,0L2.08,0z M118.73,4.15H4.15V69.2h114.57L118.73,4.15L118.73,4.15L118.73,4.15L118.73,4.15z"/></svg>`,
    keyboard: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-8 2h2v2h-2V7zm0 4h2v2h-2v-2zM9 7h2v2H9V7zm0 4h2v2H9v-2zM5 7h2v2H5V7zm0 4h2v2H5v-2zm12 6H7v-2h10v2zm2-4h-2v-2h2v2zm0-4h-2V7h2v2z"/></svg>`,
    mouse: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM11 6h2v6h-2V6z"/></svg>`,
    headphones: `<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M84,43.1052V42a36,36,0,0,0-72,0v1.1052A17.971,17.971,0,0,0,0,60V72A18.02,18.02,0,0,0,18,90a5.9966,5.9966,0,0,0,6-6V42a24,24,0,0,1,48,0V84a5.9966,5.9966,0,0,0,6,6A18.02,18.02,0,0,0,96,72V60A17.971,17.971,0,0,0,84,43.1052Z"/></svg>`,
    cpu: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M6 18h12V6H6v12zm8 2h-4v2H8v-2H5a1 1 0 0 1-1-1v-3H2v-2h2v-4H2V8h2V5a1 1 0 0 1 1-1h3V2h2v2h4V2h2v2h3a1 1 0 0 1 1 1v3h2v2h-2v4h2v2h-2v3a1 1 0 0 1-1 1h-3v2h-2v-2zM8 8h8v8H8V8z"/></g></svg>`,
    gpu: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.69 7.499c-.919-.965-1.577-2.105-1.6-3.116.655-.187 2.017.001 3.35.558 1.354.566 2.668 1.514 3.158 2.831.014.039.029.078.041.116a2.337 2.337 0 0 1-.529 1.14c-.26.279-.586.487-.948.605-1.143-.23-2.464-1.074-3.472-2.134zm5.581 2.244c-.957.334-1.839 1.311-2.473 2.482v.001c-.697 1.284-1.093 2.799-.96 3.957.225.307.523.553.869.713.394.163.826.215 1.247.151.038-.027.07-.053.1-.075 1.103-.872 1.6-2.413 1.72-3.875.119-1.437-.122-2.79-.503-3.354zm-7.939-3.389a2.23 2.23 0 0 0-.283-1.088 2.332 2.332 0 0 0-.92-.853l-.123.002C8.6 4.473 7.292 5.428 6.334 6.541 5.393 7.633 4.791 8.87 4.768 9.55c.969.288 2.257.017 3.459-.559v.002c1.32-.631 2.532-1.625 3.105-2.639zM7.96 14.641c-.193-1.449-.765-2.907-1.553-3.767a2.252 2.252 0 0 0-1.123-.067c-.415.099-.794.31-1.097.61l-.036.118c-.38 1.355.125 2.893.886 4.146.749 1.233 1.741 2.185 2.382 2.418.577-.832.718-2.139.54-3.459l.001.001zm5.297 2c-1.439-.264-3.004-.172-4.065.311a2.227 2.227 0 0 0-.411 1.046c-.034.426.05.852.243 1.233.033.025.067.047.1.068 1.172.779 2.793.774 4.223.438 1.405-.332 2.619-.978 3.039-1.515-.614-.807-1.817-1.344-3.128-1.584l-.001.003zM24 12c0 6.622-5.364 11.992-11.985 12C5.387 24.008.008 18.642 0 12.015-.008 5.387 5.358.008 11.985 0h.001C18.617-.004 23.996 5.369 24 12zm-1.547 0c-.003-5.778-4.69-10.459-10.468-10.456-5.774.007-10.45 4.693-10.443 10.468.007 5.775 4.693 10.45 10.468 10.443C17.78 22.448 22.453 17.77 22.453 12z"/></svg>`,
    char: `<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M8.96875 2C7.3237802 2 5.96875 3.3550302 5.96875 5L5.96875 9.0078125C5.4730985 9.0083647 4.9823144 9.1246164 4.5449219 9.359375C3.1351894 10.115742 2.6697963 11.831945 3.2324219 13.236328L3.2050781 13.160156L3.9160156 15.449219L3.9316406 15.486328C4.5383722 17.001823 6.0123322 18 7.6445312 18L11 18L11 20L8 20L8 22L16 22L16 20L13 20L13 18L16.347656 18C17.980524 18 19.454887 17.000522 20.060547 15.484375L20.074219 15.449219L20.794922 13.140625L20.769531 13.212891C21.308731 11.863434 20.894066 10.225476 19.580078 9.4355469C19.111461 9.1533131 18.57253 9 18.027344 9C18.027344 9 18.025391 9 18.025391 9L18.025391 5C18.025391 3.3550302 16.67036 2 15.025391 2L8.96875 2 z M 8.96875 4L15.025391 4C15.590421 4 16.025391 4.4349698 16.025391 5L16.025391 9.7695312C15.687209 10.072043 15.413273 10.450618 15.238281 10.888672L15.21875 10.9375L14.916016 12L9.0839844 12L8.8300781 11.072266L8.8085938 11.021484C8.6249622 10.562406 8.3351053 10.143222 7.96875 9.8027344L7.96875 5C7.96875 4.4349698 8.4037198 4 8.96875 4 z M 18.027344 11C18.211522 11 18.377829 11.045299 18.548828 11.148438C18.94484 11.386508 19.11291 11.96816 18.912109 12.470703L18.898438 12.507812L18.199219 14.746094C17.893599 15.504914 17.166865 16 16.347656 16L7.6445312 16C6.8266501 16 6.0995126 15.50556 5.7929688 14.746094L5.1035156 12.529297L5.0878906 12.492188C4.8765162 11.964571 5.0659666 11.348727 5.4902344 11.121094C5.6770403 11.020831 5.8551244 10.98402 6.0644531 11.003906L6.0664062 11.003906C6.409885 11.036406 6.7706914 11.336428 6.9433594 11.757812L7.5605469 14L16.425781 14L17.101562 11.626953C17.256547 11.247268 17.617114 11 18.027344 11 z"/></svg>`,
    ram: `<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M223.977 63.69a5.967 5.967 0 0 0-2.295-.446l.001-.001-188.877.77a6.013 6.013 0 0 0-5.984 6.024l.226 98.86c.008 3.314 2.699 6.015 6.01 6.034l15.326.087v10.633c0 3.315 2.683 6.007 5.993 6.007h25.471s6.319-15.38 23.62-15.38c17.301 0 23.783 15.38 23.783 15.38h74.032a6.003 6.003 0 0 0 5.999-6.008v-8.16h14.388a6.004 6.004 0 0 0 6.01-6.003V69.222a5.976 5.976 0 0 0-1.755-4.237 5.978 5.978 0 0 0-1.948-1.294zM42.588 80.586A2.002 2.002 0 0 1 44.002 80v.001h44A1.995 1.995 0 0 1 90 82.002l-.13 69.985s-4.127.137-7.667 2.48S77.76 160 77.76 160H42V81.997c.001-.53.213-1.038.588-1.412zm62.001-.001a2.001 2.001 0 0 1 1.413-.584h44a1.999 1.999 0 0 1 1.847 1.232c.1.243.151.503.151.765l-.141 76.006a2.01 2.01 0 0 1-2.013 1.997h-20.189s-4.827-4.457-10.622-6.472c-5.795-2.014-15.035-2.447-15.035-2.447V81.994c.002-.53.214-1.037.589-1.41zm61.999 0a2.002 2.002 0 0 1 1.414-.584h44a1.999 1.999 0 0 1 1.847 1.232c.1.243.151.503.151.765l-.141 76.006A2.004 2.004 0 0 1 211.86 160H166V81.997c.001-.53.213-1.038.588-1.412z"/></svg>`,
};

function renderHardware(key) {
    const list = document.getElementById('hardwareList');
    if (!list || !deviceDataVoinov[key]) return;

    list.innerHTML = deviceDataVoinov[key].map(item => `
    <li class="hardware-item">
      <span class="hardware-item__icon">${icons[item.icon]}</span>
      <div class="hardware-item__text">
        <span class="hardware-item__name">${item.name}</span>
        <span class="hardware-item__desc">${item.desc}</span>
      </div>
    </li>
  `).join('');
}


// Инициализация табов железа
document.querySelectorAll('.hardware-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.hardware-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderHardware(tab.dataset.target);
    });
});

// Первичная отрисовка
document.addEventListener('DOMContentLoaded', () => {
    renderHardware('standard');
    renderHardware2('standard');

    // Инициализация AOS если подключён
    if (typeof AOS !== 'undefined') {
        AOS.init({ offset: 100, duration: 1600, once: false });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    if (typeof Swiper !== 'undefined') {
        new Swiper('.swiper', {
            loop: true,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            speed: 800,
            navigation: {
                nextEl: '.swiper .swiper-button-next',
                prevEl: '.swiper .swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
            },
            observer: true,
            observeParents: true,
        });
    }
});


// 🔹 Модальное окно схемы клуба
function openClubMap() {
    const modal = document.getElementById('clubmapModal');
    if (!modal) return;

    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (typeof lenis !== 'undefined') lenis.stop();
}

function closeClubMap() {
    const modal = document.getElementById('clubmapModal');
    if (!modal) return;

    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (typeof lenis !== 'undefined') lenis.start();
}

// Привязка событий
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('clubmapModal');
    if (!modal) return;

    // Кнопки открытия (класс .open-clubmap)
    document.querySelectorAll('.open-clubmap').forEach(btn => {
        btn.addEventListener('click', openClubMap);
    });

    // Кнопка закрытия
    modal.querySelector('.clubmap-modal__close')?.addEventListener('click', closeClubMap);

    // Клик по оверлею
    modal.querySelector('.clubmap-modal__overlay')?.addEventListener('click', closeClubMap);

    // ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
            closeClubMap();
        }
    });
});