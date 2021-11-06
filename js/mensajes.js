function autoTraeCliente(){
    
    $.ajax({
        url:"http://localhost:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
          
            let $select = $("#select-client");
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.idClient+'>'+name.name+'</option>');
            
            }); 
        }
    
    })
}

function autoTraeCar(){

    $.ajax({
        url:"http://localhost:8080/api/Car/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
        
            let $select = $("#select-car");
            $.each(respuesta, function (idCar, name) {
                $select.append('<option value='+name.idCar+'>'+name.name+'</option>');
         
            }); 
        }
    
    })
}

function traerInformacionMensajes(){
    $.ajax({
        url:"http://localhost:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMensajes(respuesta);
        }
    
    })
}

function pintarRespuestaMensajes(respuesta){

    let myTable = "<table class='alineacion'>" +
    "<thead><tr><th>MENSAJES</th><th>CAR.NAME</th><th>CLIENT.NAME</th><th colspan='3'>OPCIONES</th></tr></thead>";
    for(i=0;i<respuesta.length;i++){
        let messageText = respuesta[i].messageText? respuesta[i].messageText : null;
        let carName = respuesta[i].car? respuesta[i].car.name : null;
        let clienteName = respuesta[i].client? respuesta[i].client.name : null;
        myTable+="<tr>";
        myTable+="<td>"+messageText+"</td>";
        myTable+="<td>"+carName+"</td>";
        myTable+="<td>"+clienteName+"</td>";
        myTable+="<td> <button onclick=' actualizarInfoMensajes("+respuesta[i].idMessage+")'>Actualizar</button>";
        myTable+="<td> <button class='botonborrar' onclick='borrarMensajes("+respuesta[i].idMessage+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado4").html(myTable);
}

function guardarInformacionMensjaes(){
    if ($("#MSmessageText").val().length==0 ){

        alert("Todos los campos son obligatorios");
    }else{
    let var4 = {
        messageText:$("#MSmessageText").val(),
        car:{idCar: +$("#select-car").val()},
        client:{idClient: +$("#select-client").val()},
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://localhost:8080/api/Message/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

    }
}


function actualizarInfoMensajes(idElemento){
    if ($("#MSmessageText").val().length==0 ){

        alert("Todos los campos son obligatorios");
    }else{
    let myData={
        idMessage:idElemento,
        messageText:$("#MSmessageText").val(),
        car:{idCar: +$("#select-car").val()},
        client:{idClient: +$("#select-client").val()},
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://localhost:8080/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idMessage").val("");
            $("#MSmessageText").val("");

            traerInformacionMensajes();
            alert("se ha Actualizado correctamente")
        }
    });
    }
}


function borrarMensajes(idElemento){
    let myData={
        idMessage:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://localhost:8080/api/Message/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionMensajes();
            alert("Se ha Eliminado.")
        }
    });

}
