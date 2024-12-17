// Select the elements
const progressInput = document.getElementById('progress-input');
const progressPercentage = document.getElementById('progress-percentage');
const progressBar = document.getElementById('progress');
const updateProgressBtn = document.getElementById('update-progress-btn');

// Event listener for the button click
updateProgressBtn.addEventListener('click', () => {
    // Get the value from the input field
    const progressValue = parseInt(progressInput.value);

    // Check if the value is a valid number between 0 and 100
    if (progressValue >= 0 && progressValue <= 100) {
        // Update the progress text and progress bar width
        progressPercentage.textContent = `${progressValue}%`;
        progressBar.style.width = `${progressValue}%`;
    } else {
        // If invalid input, reset everything
        alert('Please enter a value between 0 and 100.');
        progressInput.value = '0';
        progressPercentage.textContent = '0%';
        progressBar.style.width = '0%';
    }
});
