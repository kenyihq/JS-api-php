var url = "https://api-crud-tutankadev.cleverapps.io/";
var modal = new bootstrap.Modal(document.getElementById("modelId"), {keyboard:false});

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
                                    <button class="btn btn-warning" onclick="app.update(${employee.id})">Actualizar</button>
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
        // console.log(nombre.value);
        // console.log(correo.value);

        var mail = this.correo.value;
        var name = this.nombre.value;

        var dataAdd = {nombre: name, correo: mail};

        fetch(url+"?insertar=1", {
            method: 'POST',
            body: JSON.stringify(dataAdd)}) 
        .then(r=>r.json())
        .then(respuesta=>{
            console.log(respuesta);
            this.read();
        })
        .catch(error=>{
            console.log(error);
        })
    };

    this.delete = function(id) {
        console.log(id);
        fetch(url+"?borrar="+id) 
        .then(r=>r.json())
        .then(respuesta=>{
            console.log(respuesta);
            this.read();
        })
        .catch(error=>{
            console.log(error);
        })
        
    }

    this.update = function(id) {
        console.log(id);

        modal.show();
    }

    this.updateEmployee = function() {
        console.log("update");
        modal.hide();
    }


}
app.read();