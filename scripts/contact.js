document.querySelector('#contactForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    fetch('https://formspree.io/movadybv', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => {
        if (response.ok) {
            alert('Correo enviado exitosamente!');
        } else {
            alert('Error al enviar el correo.');
        }
    })
    .catch(error => console.error('Error:', error));
});
