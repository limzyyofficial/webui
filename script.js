// Initialize the music player functionality
const musicPlayer = document.querySelector('audio');
musicPlayer.volume = 0.5; // Set default volume level

// Play music automatically after loading
window.addEventListener('load', () => {
    musicPlayer.play();
});

// Toast Notification System
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const icon = toast.querySelector('i');
    const messageSpan = toast.querySelector('span');

    messageSpan.textContent = message;
    toast.className = `toast ${type}`;
    icon.className = type === 'success' ? 'fas fa-check-circle' : 'fas fa-times-circle';

    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Payment Method Hover Effects
const paymentMethods = document.querySelectorAll('.payment-method');
paymentMethods.forEach(method => {
    method.addEventListener('mouseenter', () => {
        method.style.transform = 'translateY(-10px)';
        method.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
    });

    method.addEventListener('mouseleave', () => {
        method.style.transform = 'translateY(0)';
        method.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.15)';
    });
});
