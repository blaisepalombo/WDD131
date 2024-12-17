const progressInput = document.getElementById('progress-input');
const progressPercentage = document.getElementById('progress-percentage');
const progressBar = document.getElementById('progress');
const updateProgressBtn = document.getElementById('update-progress-btn');

updateProgressBtn.addEventListener('click', () => {
    const progressValue = parseInt(progressInput.value);

    if (progressValue >= 0 && progressValue <= 100) {
        progressPercentage.textContent = `${progressValue}%`;
        progressBar.style.width = `${progressValue}%`;
    } else {
        alert('Please enter a value between 0 and 100.');
        progressInput.value = '0';
        progressPercentage.textContent = '0%';
        progressBar.style.width = '0%';
    }
});
