// Add custom functionality if necessary
// Currently, it just handles button navigation
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        alert("Redirecting to: " + this.innerHTML);
    });
});
