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

            respuesta.map(
                function (employee, index, array) {
                    data += `<tr>
                                <td>${employee.id}</td>
                                <td>${employee.nombre}</td>
                                <td>${employee.correo}</td>
                                <td>
                                    <button class="btn btn-danger" onclick="app.delete(${employee.id})">Eliminar</button>
                                </td>
                            </tr>`;
                }
            );

            return this.employee.innerHTML = data;
        })
        .catch(error=>{
            console.log(error);
        })

        //data = "<tr><th>1</th><td>Oscar</td><td>oscar@gmail.com</td><td>Editar | Borrar</td></tr>";
    };

    this.add = function() {
        console.log(nombre.value);
        console.log(correo.value);
    };


}

app.read();