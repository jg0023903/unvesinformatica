document.getElementById('login-form').addEventListener('submit', function(event) {
    
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {

        alert('Por favor, complete todos los campos.');
    } else {
        alert('Formulario enviado con éxito.');
        console.log("Datos capturados:", { email, password });
    }
});