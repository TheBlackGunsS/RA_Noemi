class Permiso{
    constructor(lista) {
        this.lista = lista;
    }

    getLista(){
        return this.lista;
    }

    setItem(alumno){
        this.lista.push(alumno);
    }
}

let permisos = new Permiso([]);