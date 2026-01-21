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
document.addEventListener('
