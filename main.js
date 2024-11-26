const btn = document.getElementById('button');
const mensajeExito = document.getElementById('mensajeExito');

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_zeku62l';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Enviar';
            mensajeExito.style.display = 'block';
            setTimeout(() => { mensajeExito.style.display = 'none'; }, 3000); 
        }, (err) => {
            btn.value = 'Enviar';
            alert('Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.');
            console.error('Error:', err);
        });
});