document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('surprise-btn');
    const content = document.getElementById('surprise-content');

    button.addEventListener('click', () => {
        content.classList.toggle('hidden');
    });
});
