document.getElementById('contact-form').addEventListener('submit', function (event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var telefone = document.getElementById('tel').value;

    if (!name || !email || !message || !telefone) {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault();
    }
});
