
const scriptURL = 'https://script.google.com/macros/s/AKfycby3an2E41Z7sJXT8NyN2-zVxnRQQacInmRk2_cs9azOs6qndHRunvyWUSfBstLvhys2/exec'; // Replace with your URL
const form = document.forms['contact-form']; // Add name attribute to form

form.addEventListener('submit', e => {
    e.preventDefault();

    const btn = document.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = 'Sending...';

    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(response => {
            alert('Thank you! Your message has been sent.');
            form.reset();
        })
        .catch(error => {
            alert('Error! Please try again.');
        })
        .finally(() => {
            btn.disabled = false;
            btn.innerHTML = 'SUBMIT';
        });
});
