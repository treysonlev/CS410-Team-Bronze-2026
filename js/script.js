document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        icon.className = 'fas fa-moon'; // Show moon icon when in light mode (to switch to dark)
    } else {
        // Default is dark
        icon.className = 'fas fa-sun'; // Show sun icon when in dark mode (to switch to light)
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            icon.className = 'fas fa-moon';
        } else {
            localStorage.setItem('theme', 'dark');
            icon.className = 'fas fa-sun';
        }
    });
});
