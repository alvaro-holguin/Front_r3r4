function autoTraeCliente1(){
    
    $.ajax({
        url:"http://localhost:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
          
            let $select = $("#select-client1");
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.idClient+'>'+name.name+'</option>');
            
            }); 
        }
    
    })
}

function autoTraeCar1(){

    $.ajax({
        url:"http://localhost:8080/api/Car/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
        
            let $select = $("#select-car1");
            $.each(respuesta, function (idCar, name) {
                $select.append('<option value='+name.idCar+'>'+name.name+'</option>');
         
            }); 
        }
    
    })
}


function traerInforReservacion(){
    $.ajax({
        url:"http://localhost:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarResReser(respuesta);
        }
    
    })
}

function pintarResReser(respuesta){
    
    let myTable = "<table class='alineacion'>" +
    "<thead><tr><th>FECHA INICIO</th><th>FECHA DEVOLUCION</th><th>STATUS</th><th>CAR</th><th>CLIENT</th><th colspan='3'>OPCIONES</th></tr></thead>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td>"+respuesta[i].status+"</td>";
        myTable+="<td>"+respuesta[i].car.name+"</td>";
        myTable+="<td>"+respuesta[i].client.name+"</td>";
        myTable+="<td> <button onclick=' actualizarInfoReser("+respuesta[i].idReservation+")'>Actualizar</button>";
        myTable+="<td> <button class='botonborrar' onclick='borrarResevaciones("+respuesta[i].idReservation+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado5").html(myTable);
}


function guardarInfoReservacion(){
    if ($("#Rstatus").val().length==0){

        alert("Todos los campos son obligatorios");
    }else{
    let var4 = {
        startDate:$("#RstartDate").val(),
        devolutionDate:$("#RdevolutionDate").val(),
        status:$("#Rstatus").val(),
        car:{idCar: +$("#select-car1").val()},
        client:{idClient: +$("#select-client1").val()},
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://localhost:8080/api/Reservation/save",
       
        
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

    function actualizarInfoReser(idElemento){
        if ($("#RstartDate").val().length==0 || $("#RdevolutionDate").val().length==0 || $("#Rstatus").val().length==0){

            alert("Todos los campos son obligatorios");
        }else{
        let myData={
            idReservation:idElemento,
            startDate:$("#RstartDate").val(),
            devolutionDate:$("#RdevolutionDate").val(),
            status:$("#Rstatus").val(),
            car:{idCar: +$("#select-car1").val()},
            client:{idClient: +$("#select-client1").val()},
    
        };
        console.log(myData);
        let dataToSend=JSON.stringify(myData);
        $.ajax({
            url:"http://localhost:8080/api/Reservation/update",
            type:"PUT",
            data:dataToSend,
            contentType:"application/JSON",
            datatype:"JSON",
            success:function(respuesta){
                $("#resultado").empty();
                $("#idReservation").val("");
                $("#RstartDate").val("");
                $("#RdevolutionDate").val("");
                $("#Rstatus").val("");
    
                traerInforReservacion();
                alert("Actualizado correctamente")
            }
        });
        }
    }
    
    
    function borrarResevaciones(idElemento){
        let myData={
            idReservation:idElemento
        };
        let dataToSend=JSON.stringify(myData);
        $.ajax({
            url:"http://localhost:8080/api/Reservation/"+idElemento,
            type:"DELETE",
            data:dataToSend,
            contentType:"application/JSON",
            datatype:"JSON",
            success:function(respuesta){
                $("#resultado").empty();
                traerInforReservacion();
                alert("Se ha Eliminado.")
            }
        });
    
    }
