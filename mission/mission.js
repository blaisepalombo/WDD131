const themeSelector = document.querySelector(".options");
function changeTheme() {
    let currentTheme = themeSelector.value;
    if (currentTheme === 'dark') {
        document.body.classList.add('dark');
        img_thing.src = 'byui-logo_white.png';
    } else {
        document.body.classList.remove('dark');
        img_thing.src = 'byui-logo_blue.webp';
    }
} 
themeSelector.addEventListener('change', changeTheme);