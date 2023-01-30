const usuarios = [
    {
        type: "admin",
        username: "admin123",
        password: "123456"
    },
    {
        type: "normal",
        username: "juan l",
        password: "juan123"
    },
    {
        type: "normal",
        username: "sofia",
        password: "sofia123"
    }
]

 $(document).ready(function() {
    $('.login-form').submit(e => {
        e.preventDefault()
        let username = $('#username').val();
        let pass = $('#password').val();

        const user = usuarios.filter(usuario => usuario.username === username);

        if(user.length > 0){
            if(user[0].password == pass){
                window.location = "file:///C:/Users/Admin/Documents/proyectos/ui-app/modulo1.html";
                return;
            }
            alert('Contraseña incorrecta!!');
            return;
        }
        alert('El usuario no existe');
    })
 })
//window.location = "https://www.geeksforgeeks.org/"