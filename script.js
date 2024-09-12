// Dark Mode Toggle with localStorage
const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;

// Check if dark mode preference is stored in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

// Toggle dark mode and save preference to localStorage
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // If dark mode is enabled, store the setting
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});
