$(document).ready(function(){
    $('#registrarAlumno').submit(e => {
        e.preventDefault();
        let nombre = $('#nombreAlumno').val();
        let status = $('#statusAlumno').val();
        let alumno = new Alumno(nombre, status);
        permisos.setItem(alumno);
        $('#permisosList').html('')
        permisos.getLista().forEach(alumno => {
            $('#permisosList').append(`
                <div class="card">
                    <h1>${alumno.nombre}</h1>
                    <h2>${alumno.status}</h2>
                </div>
            `);
        });

        $('#nombreAlumno').val('');
        $('#statusAlumno').val('');
    })
})