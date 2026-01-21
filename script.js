// DOM Elements
const toast = document.getElementById('toast');
const paymentCards = document.querySelectorAll('.payment-card');

// Toast Notification
function showToast(message, type = 'success') {
    const icon = toast.querySelector('i');
    const messageSpan = toast.querySelector('span');
    
    messageSpan.textContent = message;
    icon.className = type === 'success' ? 'fas fa-check-circle' : 'fas fa-times-circle';
    
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Copy to Clipboard (Fallback for older browsers)
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showToast('Number copied successfully!');
    } catch (err) {
        // Fallback
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('Number copied successfully!');
    }
}

// Add click event to copy buttons (if any, though not in HTML now)
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('copy-btn')) {
        copyToClipboard(e.target.dataset.number || '6285173360622');
    }
});

// Simple fade-in animation on load
window.addEventListener('load', () => {
    paymentCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});

// Initial styles for animation
paymentCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});
