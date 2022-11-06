const errorMessageLocation = document.querySelector('.cta-wrapper');
const inputText = document.querySelector('.email');
const submitButton = document.querySelector('.btn');


class UI {
    static errorMessage(message) {
        const p = document.createElement('p');

        p.className = 'error-message';

        p.textContent = message;

        errorMessageLocation.insertAdjacentElement('beforeend', p)

        inputText.classList.add('active');

        setTimeout(() => {
            p.remove();
            inputText.classList.remove('active');
        }, 3000)
    }

    static clearField() {
        inputText.value = ""
    }
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const validation = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    
    if (!validation.test(inputText.value)) {
        UI.errorMessage('Please provide a valid email address')
    } else {
        UI.clearField();
    }
})
