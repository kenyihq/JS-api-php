var url = "http://localhost:8000/";

var app = new function() {
    this.nombre = document.getElementById('nombre');
    this.correo = document.getElementById('correo');

    this.employee = document.getElementById('employee');

    this.read = function(){
        var data = "";

        fetch(url)
        .then(r=>r.json())
        .then(respuesta=>{
            console.log(respuesta);
        })
        .catch(error=>{
            console.log(error);
        })

        data = "<tr><th>1</th><td>Oscar</td><td>oscar@gmail.com</td><td>Editar | Borrar</td></tr>";
        return this.employee.innerHTML = data;
    };

    this.add = function() {
        console.log(nombre.value);
        console.log(correo.value);
    };


}

app.read();