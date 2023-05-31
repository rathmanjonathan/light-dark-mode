const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector('.navbar');
const toggleIcon = document.querySelector('.toggle-icon');
const img1 = document.querySelector('.img-1');
const img2 = document.querySelector('.img-2');
const img3 = document.querySelector('.img-3');
const textBox = document.querySelector('.text-box');
const dark = 'dark';
const light = 'light';

const toggleModes = isDark => {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? switchModes('dark') : switchModes('light');
}

// Switch between Dark or Light imgs
const switchModes = color => {
    img1.src = `img/undraw_feeling_proud_${color}.svg`;
    img2.src = `img/undraw_conceptual_idea_${color}.svg`;
    img3.src = `img/undraw_proud_coder_${color}.svg`;
}

// Switch Theme
const switchTheme = e => {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark')
        toggleModes('dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light')
        toggleModes('light');
    }
}

// Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleModes(true);
    }
}

toggleSwitch.addEventListener('change', switchTheme);
