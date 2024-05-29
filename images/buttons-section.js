// buttons-section.js

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#218838';
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#28a745';
        });
    });
});
