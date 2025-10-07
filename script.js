// Get references to the HTML elements
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const modal = document.getElementById('modal');

// Add a click event listener to the "Open Modal" button
openModalBtn.addEventListener('click', () => {
    // Add the 'active' class to the modal overlay to show it
    modal.classList.add('active');
});

// Add a click event listener to the "Close" button
closeModalBtn.addEventListener('click', () => {
    // Remove the 'active' class to hide the modal
    modal.classList.remove('active');
});