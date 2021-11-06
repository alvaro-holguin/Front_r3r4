function autoTraeGama(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://localhost:8080/api/Gama/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            let $select = $("#select-gama");
            $.each(respuesta, function (idGama, name) {
                $select.append('<option value='+name.idGama+'>'+name.name+'</option>');
                console.log("select "+name.idGama);
            }); 
        }
    
    })
}

function traerInformacionCar(){
    $.ajax({
        url:"http://localhost:8080/api/Car/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCar(respuesta);
        }
    });
}

function pintarRespuestaCar(respuesta){

    let myTable = "<table class='alineacion'>" +
    "<thead><tr><th>CAR</th><th>BRAND</th><th>YEAR</th><th>DESCRIPCION</th><th>GAMA.NAME</th><th colspan='3'>OPCIONES</th></tr></thead>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td>"+respuesta[i].gama.name+"</td>";
        myTable+="<td> <button onclick=' actualizarInfoCar("+respuesta[i].idCar+")'>Actualizar</button>";
        myTable+="<td> <button class='botonborrar' onclick='borrarCar("+respuesta[i].idCar+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#miListaCar").html(myTable);
}

function guardarInformacionCar(){
    if($("#Bname").val().length == 0 || $("#Bbrand").val().length == 0 || $("#Byear").val().length == 0 || $("#Bdescription").val().length == 0){
        alert("Todos los campos son obligatorios")
     }else{
    let var3 = {
        name:$("#Bname").val(),
        brand:$("#Bbrand").val(),
        year:$("#Byear").val(),
        description:$("#Bdescription").val(),
        gama: {idGama:+$("#select-gama").val()},
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),
        
        url:"http://localhost:8080/api/Car/save",
       
        
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

function actualizarInfoCar(ActuElemento){
    if($("#Bname").val().length == 0 || $("#Bbrand").val().length == 0 || $("#Byear").val().length == 0 || $("#Bdescription").val().length == 0){
        alert("Todos los campos son obligatorios")
     }else{
    let myData={
        idCar:ActuElemento,
        name:$("#Bname").val(),
        brand:$("#Bbrand").val(),
        year:$("#Byear").val(),
        description:$("#Bdescription").val(),
        gama: {idGama:+$("#select-gama").val()},

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://localhost:8080/api/Car/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idCar").val("");
            $("#Bname").val("");
            $("#Bbrand").val("");
            $("#Byear").val("");
            $("#Bdescription").val("");
            traerInformacionCar();
            alert("se ha Actualizado correctamente")
        }
    });
}
}

function borrarCar(idElemento){
    let myData={
        idCar:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://localhost:8080/api/Car/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionCar();
            alert("Se ha Eliminado.")
        }
    });

}
