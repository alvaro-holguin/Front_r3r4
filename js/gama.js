function traerInformacionGama(){
    $.ajax({
        url:"http://129.151.113.146:8080/api/Gama/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaGama(respuesta);
        }
    });
}


function pintarRespuestaGama(respuesta){

    let myTable = "<table class='alineacion'>" + 
    "<thead><tr><th>NAME</th><th>DESCRIPTION</th><th colspan='3'>OPCIONES</th></tr></thead>"
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick=' actualizarInfoGama("+respuesta[i].idGama+")'>Actualizar</button>";
        myTable+="<td> <button class='botonborrar' onclick='borrarInfoGama("+respuesta[i].idGama+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarInformacionGama(){
    if($("#Cname").val().length == 0 || $("#Cdescription").val().length == 0){
        alert("Todos los campos son obligatorios")
     }else{
    let var2 = {
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://129.151.113.146:8080/api/Gama/save",
       
        
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


function actualizarInfoGama(ActuElemento){
    if($("#Cname").val().length == 0 || $("#Cdescription").val().length == 0){
        alert("Todos los campos son obligatorios")
     }else{
    let myData={
        idGama:ActuElemento,
        name:$("#Cname").val(),
        description:$("#Cdescription").val()

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.113.146:8080/api/Gama/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idGama").val("");
            $("#Cname").val("");
            $("#Cdescription").val("");
            traerInformacionGama();
            alert("se ha Actualizado correctamente")
        }
    });
    }
}

function borrarInfoGama(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.113.146:8080/api/Gama/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionGama();
            alert("Se ha Eliminado.")
        }
    });
}
