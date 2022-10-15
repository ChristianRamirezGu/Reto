//FUNCIONES CLIENTES

function leerClientes(){

    $.ajax({
        url : 'http://129.148.55.102:8080/api/Client/all',
        type : 'GET',
        dataType : 'JSON',
        CrossDomain: true,

        success : function(clientes) {
            let cs=clientes;
            $("#listaClientes").empty();
            for (i=0;i<cs.length;i++){
                $("#listaClientes").append(cs[i].idClient+" <b>"+cs[i].email+"</b> "+cs[i].password+" "+cs[i].name+" "+cs[i].age);
                $("#listaClientes").append("<button onclick='borrarCliente("+cs[i].idClient+ ")'>Borrar</button><br>");
            }

        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');

        }

    });

}

function guardarCliente(){
    let idCliente=$("#idCliente").val();
    let mailCliente=$("#mailCliente").val();
    let contraseña=$("#contraseñaCliente")
    let nombre=$("#nombreCliente").val();
    let edad=$("#edadCliente").val();

    let data={
        idClient:idCliente,
        email:mailCliente,
        password:contraseñaCliente,
        name:nombre,
        age:edad
    };


    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);


    $.ajax({
        url : 'http://129.148.55.102:8080/api/Client/save',
        type : 'POST',
        dataType : 'JSON',
        CrossDomain: true,
        data: dataToSend,
        contentType: 'application/json',

        success : function(clientes) {
            $("#idCliente").val();
            $("#mailCliente").val();
            $("#contraseñaCliente")
            $("#nombreCliente").val();
            $("#edadCliente").val();
        },
        //error : function(xhr, status) {
        //alert('ha sucedido un problema');

        //},
        complete: function(){
            leerClientes();
        }
    });
}

function editarCliente(){
    let idCliente=$("#idCliente").val();
    let mailCliente=$("#mailCliente").val();
    let contraseña=$("#contraseñaCliente")
    let nombre=$("#nombreCliente").val();
    let edad=$("#edadCliente").val();


    let data={
        idClient:idCliente,
        email:mailCliente,
        password:contraseñaCliente,
        name:nombre,
        age:edad
    };


    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);


    $.ajax({
        url : 'http://129.148.55.102:8080/api/Client/update',
        type : 'PUT',
        dataType : 'JSON',
        CrossDomain: true,
        data: dataToSend,
        contentType: 'application/json',

        success : function(clientes) {
            $("#idCliente").val();
            $("#mailCliente").val();
            $("#contraseñaCliente")
            $("#nombreCliente").val();
            $("#edadCliente").val();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');

        },
        complete: function(){
            leerClientes();
        }
    });
}

function borrarCliente(idCliente){

    $.ajax({
        url : 'http://129.148.55.102:8080/api/Client'+idcliente,
        type : 'DELETE',
        dataType : 'JSON',
        CrossDomain: true,
        contentType: 'application/json',

        success : function(clientes) {
            $("#idCliente").val();
            $("#mailCliente").val();
            $("#contraseñaCliente")
            $("#nombreCliente").val();
            $("#edadCliente").val();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');

        },
        complete: function(){
            leerClientes();
        }
    });
}

function buscarClientesId(){
    let idC=$("#idCliente").val( );


    $.ajax({
        url : 'http://129.148.55.102:8080/api/Client'+idcliente,
        type : 'GET',
        dataType : 'JSON',
        contentType : "application/json",


        success : function(idcliente) {
            $("#idCliente").val();
            $("#mailCliente").val();
            $("#contraseñaCliente")
            $("#nombreCliente").val();
            $("#edadCliente").val();
            //console.log(idclientes.items[0]);


            $("#listaClientes").empty();



            $("#listaClientes").append(idcliente.items[0].idClient+" <b>"+idcliente.items[0].email+"</b> "+idcliente.items[0].password+" "+idcliente.items[0].name+" "+idcliente.items[0].age);
            $("#listaClientes").append("<button onclick='borrarCliente("+idcliente.items[0].idClient+ ")'>Borrar</button><br>");


        },


        error : function(xhr, status){
            alert('ha sucedido un problema');

        },


    });

}

//FUNCIONES MENSAJES

function leerMensajes(){

    $.ajax({
        url : 'http://129.148.55.102:8080/api/Message/all',
        type : 'GET',
        CrossDomain: true,
        dataType : 'JSON',

        success : function(mensajes) {
            let ms=mensajes;
            $("#listaMensajes").empty();
            for (i=0;i<ms.length;i++){
                $("#listaMensajes").append(ms[i].idMessage+" <b>"+ms[i].messageText);
                $("#listaMensajes").append("<button onclick='borrarMensaje("+ms[i].idMessage+ ")'>Borrar</button><br>");
            }

        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');

        }

    });

}

function guardarMensajes(){
    let idMensaje=$("#idMensaje").val();
    let texto=$("#TextoMensaje").val();

    let data_m={
        idMessage:idMensaje,
        messageText:texto,
    };


    let dataToSend=JSON.stringify(data_m);
    console.log(dataToSend);


    $.ajax({
        url : 'http://129.148.55.102:8080/api/Message/save',
        type : 'POST',
        dataType : 'JSON',
        CrossDomain: true,
        data: dataToSend,
        contentType: 'application/json',

        success : function(mensajes) {
            $("#idMensaje").val(" ");
            $("#TextoMensaje").val(" ");
        },
        //error : function(xhr, status) {
        //alert('ha sucedido un problema');

        //},
        complete: function(){
            leerMensajes();
        }
    });
}


function editarMensajes(){
    let idMensaje=$("#idMensaje").val();
    let texto=$("#TextoMensaje").val();

    let data_m={
        idMessage:idMensaje,
        messageText:texto,
    };


    let dataToSend=JSON.stringify(data_m);
    console.log(dataToSend);


    $.ajax({
        url : 'http://129.148.55.102:8080/api/Message/update',
        type : 'PUT',
        dataType : 'JSON',
        CrossDomain: true,
        data: dataToSend,
        contentType: 'application/json',

        success : function(mensajes) {
            $("#idMensaje").val(" ");
            $("#TextoMensaje").val(" ");
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');

        },
        complete: function(){
            leerMensajes();
        }
    });
}


function borrarMensaje(idMensaje){

    let data_m={
        idMessage:idMensaje
    };


    let dataToSend=JSON.stringify(data_m);
    console.log(dataToSend);


    $.ajax({
        url : 'http://129.148.55.102:8080/api/Message/'+idMensaje,
        type : 'DELETE',
        dataType : 'JSON',
        CrossDomain: true,
        data: dataToSend,
        contentType: 'application/json',

        success : function(mensajes) {
            $("#idMensaje").val(" ");
            $("#TextoMensaje").val(" ");
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');

        },
        complete: function(){
            leerMensajes();
        }
    });
}

function buscarMensajesId(){
    let idM=$("#idMensaje").val( );


    $.ajax({
        url : 'http://129.148.55.102:8080/api/Message/'+idMensaje,
        type : 'GET',
        dataType : 'JSON',
        CrossDomain: true,
        contentType : "application/json",


        success : function(idmensaje) {
            $("#idMensaje").val(" ");
            $("#TextoMensaje").val(" ");

            //console.log(idclientes.items[0]);


            $("#listaMensajes").empty();



            $("#listaMensajes").append(idmensaje.items[0].idMessage+" <b>"+idmensaje.items[0].messageText+"</b>");
            $("#listaMensajes").append("<button onclick='borrarMensaje("+idmensaje.items[0].idMessage+ ")'>Borrar</button><br>");


        },


        error : function(xhr, status){
            alert('ha sucedido un problema');
        }
    });

}

//FUNCIONES CUATRIMOTOS

function leerCuatrimotos(){

    $.ajax({
        url : 'http://129.148.55.102:8080/api/Quadbike/all',
        type : 'GET',
        CrossDomain: true,
        dataType : 'JSON',

        success : function(cuatrimotos) {
            let cts=cuatrimotos;
            $("#listaCuatrimoto").empty();
            for (i=0;i<cts.length;i++){
                $("#listaCuatrimoto").append(cts[i].id+" <b>"+cts[i].name+"</b> "+cts[i].brand+" "+cts[i].year+" "+cts[i].description);
                $("#listaCuatrimoto").append("<button onclick='borrarCuatrimoto("+cts[i].id+ ")'>Borrar</button><br>");
            }

        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');

        }

    });

}

function guardarCuatrimoto(){
    let idCuatrimoto=$("#idCuatrimoto").val();
    let nombre=$("#nombreCuatrimoto").val();
    let marca=$("#marcaCuatrimoto").val();
    let modelo=$("#modeloCuatrimoto").val();
    let categoria=$("#descripcionCuatrimoto").val();


    let data_c={
        id:idCuatrimoto,
        name:nombre,
        brand:marca,
        year:modelo,
        description:categoria,


    };


    let dataToSend=JSON.stringify(data_c);
    console.log(dataToSend);


    $.ajax({
        url : 'http://129.148.55.102:8080/api/Quadbike/save',
        type : 'POST',
        dataType : 'JSON',
        CrossDomain: true,
        data: dataToSend,
        contentType: 'application/json',

        success : function(cuatrimotos) {
            $("#idCuatrimoto").val(" ");
            $("#nombreCuatrimoto").val(" ");
            $("#marcaCuatrimoto").val(" ");
            $("#modeloCuatrimoto").val(" ");
            $("#descripcionCuatrimoto").val(" ");
        },
        //error : function(xhr, status) {
        //alert('ha sucedido un problema');

        //},
        complete: function(){
            leerCuatrimotos();
        }
    });
}

function editarCuatrimoto(){
    let idCuatrimoto=$("#idCuatrimoto").val();
    let nombre=$("#nombreCuatrimoto").val();
    let marca=$("#marcaCuatrimoto").val();
    let modelo=$("#modeloCuatrimoto").val();
    let categoria=$("#descripcionCuatrimoto").val();

    let data_c={
        id:idCuatrimoto,
        name:nombre,
        brand:marca,
        year:modelo,
        description:categoria,
    };


    let dataToSend=JSON.stringify(data_c);
    console.log(dataToSend);


    $.ajax({
        url : 'http://129.148.55.102:8080/api/Quadbike/update',
        type : 'PUT',
        dataType : 'JSON',
        CrossDomain: true,
        data: dataToSend,
        contentType: 'application/json',

        success : function(cuatrimotos) {
            $("#idCuatrimoto").val(" ");
            $("#nombreCuatrimoto").val(" ");
            $("#marcaCuatrimoto").val(" ");
            $("#modeloCuatrimoto").val(" ");
            $("#descripcionCuatrimoto").val(" ");
        },

        complete: function(){
            leerCuatrimotos();
        }
    });
}

function borrarCuatrimoto(idCuatrimoto){

    let data_c={
        id:idCuatrimoto
    };


    let dataToSend=JSON.stringify(data_c);
    console.log(dataToSend);


    $.ajax({
        url : 'http://129.148.55.102:8080/api/Quadbike/'+idCuatrimoto,
        type : 'DELETE',
        dataType : 'JSON',
        CrossDomain: true,
        data: dataToSend,
        contentType: 'application/json',

        success : function(cuatrimotos) {
            $("#idCuatrimoto").val(" ");
            $("#nombreCuatrimoto").val(" ");
            $("#marcaCuatrimoto").val(" ");
            $("#modeloCuatrimoto").val(" ");
            $("#descripcionCuatrimoto").val(" ");
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');

        },
        complete: function(){
            leerCuatrimotos();
        }
    });
}

function buscarCuatrimotoId(){
    let idCM=$("#idCuatrimoto").val( );


    $.ajax({
        url : 'http://129.148.55.102:8080/api/Quadbike/'+idCuatrimoto,
        type : 'GET',
        dataType : 'JSON',
        CrossDomain: true,
        contentType : "application/json",


        success : function(idcuatrimoto) {
            $("#idCuatrimoto").val(" ");
            $("#nombreCuatrimoto").val(" ");
            $("#marcaCuatrimoto").val(" ");
            $("#modeloCuatrimoto").val(" ");
            $("#descripcionCuatrimoto").val(" ");
            //console.log(idclientes.items[0]);


            $("#listaCuatrimoto").empty();



            $("#listaCuatrimoto").append(idcuatrimoto.items[0].id+" <b>"+idcuatrimoto.items[0].name+"</b> "+idcuatrimoto.items[0].brand+" "+idcuatrimoto.items[0].year+" "+idcuatrimoto.items[0].description);
            $("#listaCuatrimoto").append("<button onclick='borrarCuatrimoto("+idcuatrimoto.items[0].id+ ")'>Borrar</button><br>");


        }
    });

}

//Funciones Categoria o gama

function leerCategorias(){

    $.ajax({
        url : 'http://129.148.55.102:8080/api/Category/all',
        type : 'GET',
        dataType : 'JSON',
        CrossDomain: true,

        success : function(categorias) {
            let cg=categorias;
            $("#listaCategoria").empty();
            for (i=0;i<cg.length;i++){
                $("#listaCategoria").append(cg[i].id+" <b>"+cg[i].name+"</b> "+cg[i].descripcion);
                $("#listaCategoria").append("<button onclick='borrarCategoria("+cg[i].id+ ")'>Borrar</button><br>");
            }

        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');

        }

    });

}

function guardarCategoria(){
    let idCategoria=$("#idCategoria").val();
    let nombre=$("#nombreCategoria").val();
    let descripcion=$("#descripcionCategoria").val();

    let data_cg={
        id:idCategoria,
        name:nombre,
        description:descripcion,
    };


    let dataToSend=JSON.stringify(data_cg);
    console.log(dataToSend);


    $.ajax({
        url : 'http://129.148.55.102:8080/api/Category/save',
        type : 'POST',
        dataType : 'JSON',
        CrossDomain: true,
        data: dataToSend,
        contentType: 'application/json',

        success : function(categorias) {
            $("#idCategoria").val(" ");
            $("#nombreCategoria").val(" ");
            $("#descripcionCategoria").val(" ");
        },
        //error : function(xhr, status) {
        //alert('ha sucedido un problema');

        //},
        complete: function(){
            leerCategorias();
        }
    });
}

function editarCategoria(){
    let idCategoria=$("#idCategoria").val();
    let nombre=$("#nombreCategoria").val();
    let descripcion=$("#descripcionCategoria").val();

    let data_cg={
        id:idCategoria,
        name:nombre,
        description:descripcion,
    };


    let dataToSend=JSON.stringify(data_cg);
    console.log(dataToSend);


    $.ajax({
        url : 'http://129.148.55.102:8080/api/Category/update',
        type : 'PUT',
        dataType : 'JSON',
        CrossDomain: true,
        data: dataToSend,
        contentType: 'application/json',

        success : function(categorias) {
            $("#idCategoria").val(" ");
            $("#nombreCategoria").val(" ");
            $("#descripcionCategoria").val(" ");
        },

        complete: function(){
            leerCategorias();
        }
    });
}

function borrarCategoria(idCategoria){

    let data_cg={
        id:idCategoria
    };


    let dataToSend=JSON.stringify(data_cg);
    console.log(dataToSend);


    $.ajax({
        url : 'http://129.148.55.102:8080/api/Category/'+idCategoria,
        type : 'DELETE',
        dataType : 'JSON',
        CrossDomain: true,
        data: dataToSend,
        contentType: 'application/json',

        success : function(categorias) {
            let idCategoria=$("#idCategoria").val();
            let nombre=$("#nombreCategoria").val();
            let descripcion=$("#descripcionCategoria").val();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');

        },
        complete: function(){
            leerCategorias();
        }
    });
}

function buscarCategoriaId(){
    let idCG=$("#idCategoria").val( );


    $.ajax({
        url : 'http://129.148.55.102:8080/api/Category/'+idCategoria,
        type : 'GET',
        dataType : 'JSON',
        CrossDomain: true,
        contentType : "application/json",


        success : function(idcategoria) {
            $("#idCategoria").val(" ");
            $("#nombreCategoria").val(" ");
            $("#descripcionCategoria").val(" ");
            //console.log(idclientes.items[0]);


            $("#listaCategoria").empty();



            $("#listaCategoria").append(idcategoria.items[0].id+" <b>"+idcategoria.items[0].name+"</b> "+idcategoria.items[0].description);
            $("#listaCategoria").append("<button onclick='borrarCategoria("+idcategoria.items[0].id+ ")'>Borrar</button><br>");


        }
    });

}

//Funciones de reservaciones

function leerReservaciones(){

    $.ajax({
        url : 'http://129.148.55.102:8080/api/Reservation/all',
        type : 'GET',
        dataType : 'JSON',
        CrossDomain: true,

        success : function(reservaciones) {
            let r=reservaciones;
            $("#listaReservaciones").empty();
            for (i=0;i<r.length;i++){
                $("#listaReservaciones").append(r[i].idReservation+" <b>"+r[i].startDate+"</b> "+r[i].devolutionDate+" "+r[i].status);
                $("#listaReservaciones").append("<button onclick='borrarReservacion("+r[i].idReservation+ ")'>Borrar</button><br>");
            }

        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');

        }

    });

}

function guardarReservacion(){
    let idReservacion=$("#idReservacion").val();
    let inicio=$("#fechaInicio").val();
    let devolucion=$("#fechaDevolucion").val();
    let Calificacion=$("#calificaciones").val();

    let data_r={
        idReservation:idReservacion,
        startDate:inicio,
        devolutionDate:devolucion,
        status:Calificacion,
    };


    let dataToSend=JSON.stringify(data_r);
    console.log(dataToSend);


    $.ajax({
        url : 'http://129.148.55.102:8080/api/Reservation/save',
        type : 'POST',
        dataType : 'JSON',
        CrossDomain: true,
        data: dataToSend,
        contentType: 'application/json',

        success : function(reservaciones) {
            $("#idReservacion").val(" ");
            $("#fechaInicio").val(" ");
            $("#fechaDevolucion").val(" ");
            $("#calificaciones").val(" ");
        },
        //error : function(xhr, status) {
        //alert('ha sucedido un problema');

        //},
        complete: function(){
            leerReservaciones();
        }
    });
}

function editarReservacion(){
    let idReservacion=$("#idReservacion").val();
    let inicio=$("#fechaInicio").val();
    let devolucion=$("#fechaDevolucion").val();
    let Calificacion=$("#calificaciones").val();

    let data_r={
        idReservation:idReservacion,
        startDate:inicio,
        devolutionDate:devolucion,
        status:Calificacion,
    };


    let dataToSend=JSON.stringify(data_r);
    console.log(dataToSend);


    $.ajax({
        url : 'http://129.148.55.102:8080/api/Reservation/update',
        type : 'PUT',
        dataType : 'JSON',
        CrossDomain: true,
        data: dataToSend,
        contentType: 'application/json',

        success : function(reservaciones) {
            $("#idReservacion").val(" ");
            $("#fechaInicio").val(" ");
            $("#fechaDevolucion").val(" ");
            $("#calificaciones").val(" ");
        },

        complete: function(){
            leerReservaciones();
        }
    });
}

function borrarReservacion(idReservacion){

    let data_r={
        id:idReservacion
    };


    let dataToSend=JSON.stringify(data_r);
    console.log(dataToSend);


    $.ajax({
        url : 'http://129.148.55.102:8080/api/Reservation/'+idReservacion,
        type : 'DELETE',
        dataType : 'JSON',
        CrossDomain: true,
        data: dataToSend,
        contentType: 'application/json',

        success : function(reservaciones) {
            let idReservacion=$("#idReservacion").val();
            let inicio=$("#fechaInicio").val();
            let devolucion=$("#fechaDevolucion").val();
            let Calificacion=$("#calificaciones").val();

        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');

        },
        complete: function(){
            leerReservaciones();
        }
    });
}

function buscarReservacionId(){
    let idR=$("#idReservacion").val( );


    $.ajax({
        url : 'http://129.148.55.102:8080/api/Reservation/'+idReservacion,
        type : 'GET',
        dataType : 'JSON',
        CrossDomain: true,
        contentType : "application/json",


        success : function(idReservacion) {
            $("#idReservacion").val(" ");
            $("#fechaInicio").val(" ");
            $("#fechaDevolucion").val(" ");
            $("#calificaciones").val(" ");
            //console.log(idclientes.items[0]);


            $("#listaReservaciones").empty();



            $("#listaReservaciones").append(idReservacion.items[0].idReservation+" <b>"+idReservacion.items[0].startDate+"</b> "+idReservacion.items[0].devolutionDate+" "+idReservacion.items[0].status);
            $("#listaReservaciones").append("<button onclick='borrarReservacion("+idReservacion.items[0].idReservation+ ")'>Borrar</button><br>");


        }
    });



}