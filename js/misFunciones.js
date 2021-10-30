function traerInformacionGama(){
    $.ajax({
        url:"http://localhost:8080/api/Gama/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}

function pintarRespuesta(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idGama+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick='borrarInfoGama("+respuesta[i].idGama+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarInformacionGama(){
    let var2 = {
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://localhost:8080/api/Gama/save",

        success:function(response){
           if (("#Cname")== "" || ("#Cdescription")== "")
           alert("No se pueden ingresar campos vacios")
        else {
            console.log(response);
            console.log("Se Guardo Correctamente");
            alert("Se Guardo correctamente");
            window.location.reload() 
        }
        
        },    
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });
}



function actualizarInfoGama(){
    let var2 = {
        idGama:$("#idGama").val(),
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
        };
      
        $.ajax({
        type:'PUT',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://localhost:8080/api/Gama/update",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se actualizo Correctamente");
            alert("Se actualizo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              
            alert("No se actualizo correctamente");
    
    
        }
        });

}

function borrarInfoGama(idGama){
    let var2 = {
        id:idGama
        };
      
        $.ajax({
        type:'DELETE',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://localhost:8080/api/Gama/{id}",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se borro Correctamente");
            alert("Se borro correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se borro correctamente");
    
    
        }
        });

}



/*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*/
///////////////////////////CAR//////////////////////////////////
/*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*/


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

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idCar+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
}

function guardarInformacionCar(){
    let var3 = {
        name:$("#Bname").val(),
        brand:$("#Bbrand").val(),
        year:$("#Byear").val(),
        description:$("#Bdescription").val(),
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

function actualizarInfoCar(){
    let var3 = {
        idCar:$("#idCar").val(),
        name:$("#Bname").val(),
        brand:$("#Bbrand").val(),
        year:$("#Byear").val(),
        description:$("#Bdescription").val(),
        };
      
        $.ajax({
        type:'PUT',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),
        
        url:"http://localhost:8080/api/Car/update",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se actualizo Correctamente");
            alert("Se actualizo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se actualizo correctamente");
    
    
        }
        });

}

/*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*/
///////////////////////////Clientes//////////////////////////////////
/*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*/


function traerInformacionClientes(){
    $.ajax({
        url:"http://localhost:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}

function pintarRespuestaClientes(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idClient+"</td>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
}

function guardarInformacionClientes(){
    let var4 = {
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(),
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://localhost:8080/api/Client/save",
       
        
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

function actualizarInfoClientes(){
    let var4 = {
        idClient:$("#idClient").val(),
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(),
        };
      
        $.ajax({
        type:'PUT',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://localhost:8080/api/Client/update",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se actualizo Correctamente");
            alert("Se actualizo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se actualizo correctamente");
    
    
        }
        });

}