// --- Mobile Menu Toggle ---
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    })
}

// --- Countdown Timer Logic ---
const targetDate = new Date("May 21, 2026 00:00:00").getTime();
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    if(!countdownElement) return; // Exit if element not found

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "<span class='text-xl text-primary font-bold'>THE EVENT IS LIVE!</span>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const formatUnit = (value, label) => `
        <div class="relative bg-gradient-to-br from-orange-500 via-red-500 to-yellow-600 p-1 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div class="bg-black bg-opacity-80 backdrop-blur-sm p-6 md:p-8 rounded-2xl w-28 sm:w-36 md:w-44">
                <div class="text-4xl sm:text-5xl md:text-6xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400">${String(value).padStart(2, '0')}</div>
                <div class="text-xs sm:text-sm md:text-base uppercase font-bold tracking-wider text-white opacity-90">${label}</div>
            </div>
        </div>
    `;

    countdownElement.innerHTML =
        formatUnit(days, "Days") +
        formatUnit(hours, "Hrs") +
        formatUnit(minutes, "Min") +
        formatUnit(seconds, "Sec")
}

// Run immediately and then every second
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);