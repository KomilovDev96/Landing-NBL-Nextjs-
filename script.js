// Таймер обратного отсчёта
function updateTimer() {
    const now = new Date();
    const nextDraw = new Date();

    // Установка времени следующего розыгрыша (например, 00:00)
    nextDraw.setHours(24, 0, 0, 0);

    const diff = nextDraw - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

setInterval(updateTimer, 1000);

// Мобильное меню
document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.nav').classList.toggle('active');
});

// Анимация при скролле
window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.badge, table, .video');
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
});

// Анимация цифр
function animateValue(id, start, end, duration) {
    let current = start;
    const increment = end > start ? 1 : -1;
    const obj = document.getElementById(id);
    const step = Math.abs(Math.floor(duration / (end - start)));
    const timer = setInterval(() => {
        current += increment;
        obj.innerHTML = current.toLocaleString();
        if (current == end) clearInterval(timer);
    }, step);
}

// Запуск анимаций при скролле
window.addEventListener('scroll', function () {
    const pos = document.querySelector('.stats-grid').getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
        animateValue("winners-percent", 0, 15, 1000);
        animateValue("payout-speed", 0, 1, 500);
        animateValue("total-payouts", 0, 10000, 2000);
    }
});

// Калькулятор
const playersInput = document.getElementById('playersInput');
const playersValue = document.getElementById('playersValue');
const winnersCount = document.getElementById('winnersCount');
const prizePool = document.getElementById('prizePool');
const yourPrize = document.getElementById('yourPrize');

playersInput.addEventListener('input', function () {
    const players = parseInt(this.value);
    const winners = Math.floor(players * 0.15);
    const pool = players * 10;

    playersValue.textContent = players.toLocaleString();
    winnersCount.textContent = winners.toLocaleString();
    prizePool.textContent = pool.toLocaleString() + ' USDT';
    yourPrize.textContent = '~' + Math.floor(pool / winners) + ' USDT';
});
// Слайдер отзывов
let currentSlide = 0;
const slides = document.querySelectorAll('.review-card');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});
// Открытие/закрытие модального окна
const modal = document.getElementById("reviewModal");
const openBtn = document.getElementById("openReviewModal");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Отправка формы
document.getElementById("reviewForm").addEventListener("submit", (e) => {
    e.preventDefault();

    // Здесь код для отправки данных (например, на Telegram бота или email)
    alert("Спасибо! Ваш отзыв отправлен на модерацию.");
    modal.style.display = "none";

    // Очистка формы
    e.target.reset();
});