/////////////////CATEGORIA /////////////////////////////
function ctregistro(){
//var date = $("#date").val().split("-");

    let var2 = {
        name:$("#ctname").val(),
        description:$("#ctdescription").val()
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://129.151.110.62:8080/api/Category/save",
       
        
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




function ctobtenerItems(){

     $.ajax({
        url:"http://129.151.110.62:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            ctpintarRespuesta(respuesta);
        }
    });

}

function ctpintarRespuesta(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
		myTable+="<td>"+respuesta[i].id+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
		myTable+="<td><button onclick='ctborrar("+respuesta[i].id+")'>Borrar</button></td>";
		myTable+="<td><button onclick='ctobtenerItemEspecifico("+respuesta[i].id+")'>Cargar</button></td>";
	
		myTable+="</tr>";
    }
    myTable+="</table>";
    $("#ctresultado").html(myTable);
	
	 

}



function ctborrar(idElemento){
var elemento={
  id:idElemento
};
var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
$.ajax({
      dataType:'json',
      data:dataToSend,
      url:"http://129.151.110.62:8080/api/Category/"+idElemento,
      type:'DELETE',
      contentType:'application/json',
      success:function(response) {
        console.log(response);

      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

  ctobtenerItems();
	
}

function ctobtenerItemEspecifico(idItem){
//var elemento={
//  id:idItem
//};
//var dataToSend=JSON.stringify(elemento);
  $.ajax({
      dataType: 'JSON',
      //data: {id:idItem},
	  //data:dataToSend,
      url:"http://129.151.110.62:8080/api/Category/"+idItem,
      type:'GET',
	  // contentType:'application/json',
      success:function(response) {
      console.log(response);
	  //ctpintarRespuesta(response);
	  
		//let date2 = new Date(item.fecha);
		
		//date2 = [date2.getFullYear(),date2.getMonth() + 1, date2.getDate()].join("-");
		console.log(response[0]);
		//var item=response[0];

		
		$("#ctid").val(response.id);
		$("#ctname").val(response.name);
		$("#ctdescription").val(response.description);
		
		
		
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}

function ctactualizar(){
//var date = $("#date").val().split("-");
var elemento = {

	id: $("#ctid").val(),
	name:$("#ctname").val(),
	description:$("#ctdescription").val(),

  }

var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:dataToSend,
      contentType:'application/json',
      url:"http://129.151.110.62:8080/api/Category/update",
      type:'PUT',
      
      success:function(response) {
        console.log(response);
        ctobtenerItems();
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });
	ctobtenerItems();

}


////////////////// CLIENTES ////////////////////////////

function clregistro(){
//var date = $("#date").val().split("-");

    let var3 = {
        email:$("#clemail").val(),
        password:$("#clpassword").val(),
		name:$("#clname").val(),
		age:$("#clage").val(),
        };
 
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),
        
        url:"http://129.151.110.62:8080/api/Client/save",
       
        
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




function clobtenerItems(){

     $.ajax({
        url:"http://129.151.110.62:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            clpintarRespuesta(respuesta);
        }
    });

}



function clpintarRespuesta(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
		myTable+="<td>"+respuesta[i].idClient+"</td>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
		myTable+="<td>"+respuesta[i].name+"</td>";
		myTable+="<td>"+respuesta[i].age+"</td>";
		myTable+="<td><button onclick='clborrar("+respuesta[i].idClient+")'>Borrar</button></td>";
		myTable+="<td><button onclick='clobtenerItemEspecifico("+respuesta[i].idClient+")'>Cargar</button></td>";
	
		myTable+="</tr>";
    }
    myTable+="</table>";
    $("#clresultado").html(myTable);
	
	 

}



function clborrar(idElemento){
var elemento={
  idClient:idElemento
};
var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
$.ajax({
      dataType:'json',
      data:dataToSend,
      url:"http://129.151.110.62:8080/api/Client/"+idElemento,
      type:'DELETE',
      contentType:'application/json',
      success:function(response) {
        console.log(response);

      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

  clobtenerItems();
	
}

function clobtenerItemEspecifico(idItem){
//var elemento={
//  id:idItem
//};
//var dataToSend=JSON.stringify(elemento);
  $.ajax({
      dataType: 'JSON',
      //data: {id:idItem},
	  //data:dataToSend,
      url:"http://129.151.110.62:8080/api/Client/"+idItem,
      type:'GET',
	  // contentType:'application/json',
      success:function(response) {
      console.log(response);
	  //ctpintarRespuesta(response);
	  
		//let date2 = new Date(item.fecha);
		
		//date2 = [date2.getFullYear(),date2.getMonth() + 1, date2.getDate()].join("-");
		//console.log(response[0]);
		//var item=response[0];

		
		$("#clidClient").val(response.idClient);
		$("#clemail").val(response.email);
		$("#clpassword").val(response.password);
		$("#clname").val(response.name);
		$("#clage").val(response.age);
		

		
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}

function clactualizar(){
//var date = $("#date").val().split("-");
var elemento = {

	idClient: $("#clidClient").val(),
	email:$("#clemail").val(),
	password:$("#clpassword").val(),
	name:$("#clname").val(),
	age:$("#clage").val(),
	

  }

var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:dataToSend,
      contentType:'application/json',
      url:"http://129.151.110.62:8080/api/Client/update",
      type:'PUT',
      
      success:function(response) {
        console.log(response);
        clobtenerItems();
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });
	clobtenerItems();

}



////////////////// MOTORBIKE ////////////////////////////

function mtregistro(){
//var date = $("#date").val().split("-");

    let var4 = {
		name:$("#mtname").val(),
		brand:$("#mtbrand").val(),
		year:$("#mtyear").val(),
		description:$("#mtdescription").val(),
		//category:{id:$("#mtcategory").val()},
		
		
        };
 
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://129.151.110.62:8080/api/Motorbike/save",
       
        
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



function mtobtenerItems(){

     $.ajax({
        url:"http://129.151.110.62:8080/api/Motorbike/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            mtpintarRespuesta(respuesta);
        }
    });

}



function mtpintarRespuesta(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
		myTable+="<td>"+respuesta[i].id+"</td>";
		myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
		myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
		myTable+="<td>"+respuesta[i].category+"</td>";
		
		myTable+="<td><button onclick='mtborrar("+respuesta[i].id+")'>Borrar</button></td>";
		myTable+="<td><button onclick='mtobtenerItemEspecifico("+respuesta[i].id+")'>Cargar</button></td>";
	
		myTable+="</tr>";
    }
    myTable+="</table>";
    $("#mtresultado").html(myTable);
	
	 

}

function mtborrar(idElemento){
var elemento={
  idClient:idElemento
};
var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
$.ajax({
      dataType:'json',
      data:dataToSend,
      url:"http://129.151.110.62:8080/api/Motorbike/"+idElemento,
      type:'DELETE',
      contentType:'application/json',
      success:function(response) {
        console.log(response);

      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

  mtobtenerItems();
	
}


function mtobtenerItemEspecifico(idItem){
//var elemento={
//  id:idItem
//};
//var dataToSend=JSON.stringify(elemento);
  $.ajax({
      dataType: 'JSON',
      //data: {id:idItem},
	  //data:dataToSend,
      url:"http://129.151.110.62:8080/api/Motorbike/"+idItem,
      type:'GET',
	  // contentType:'application/json',
      success:function(response) {
      console.log(response);
	  //ctpintarRespuesta(response);
	  
		//let date2 = new Date(item.fecha);
		
		//date2 = [date2.getFullYear(),date2.getMonth() + 1, date2.getDate()].join("-");
		//console.log(response[0]);
		//var item=response[0];

		
		
		$("#mtid").val(response.id);
		$("#mtname").val(response.name);
		$("#mtbrand").val(response.brand);
		$("#mtyear").val(response.year);
		$("#mtdescription").val(response.description);
		$("#mtcategory").val(response.category);
		
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}



function mtactualizar(){
//var date = $("#date").val().split("-");
var elemento = {

	id: $("#mtid").val(),
	name:$("#mtname").val(),
	brand:$("#mtbrand").val(),
	year:$("#mtyear").val(),
	description:$("#mtdescription").val(),
	//category:$("#mtcategory").val(),

	

  }

var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:dataToSend,
      contentType:'application/json',
      url:"http://129.151.110.62:8080/api/Motorbike/update",
      type:'PUT',
      
      success:function(response) {
        console.log(response);
        mtobtenerItems();
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });
	mtobtenerItems();

}










////////////////// MESSAGE ////////////////////////////

function msregistro(){
//var date = $("#date").val().split("-");

    let var4 = {
		idMessage:$("#msidMessage").val(),
		messageText:$("#msmessageText").val(),
		id:$("#msid").val(),
		clientId:$("#msclientId").val(),
				
		
        };
 
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://129.151.110.62:8080/api/Message/save",
       
        
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



function msobtenerItems(){

     $.ajax({
        url:"http://129.151.110.62:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            mspintarRespuesta(respuesta);
        }
    });

}



function mspintarRespuesta(respuesta){
	


    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
		myTable+="<td>"+respuesta[i].idMessage+"</td>";
		myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="<td>"+respuesta[i].id+"</td>";
		myTable+="<td>"+respuesta[i].clientId+"</td>";
		myTable+="<td><button onclick='msborrar("+respuesta[i].idMessage+")'>Borrar</button></td>";
		myTable+="<td><button onclick='msobtenerItemEspecifico("+respuesta[i].idMessage+")'>Cargar</button></td>";
	
		myTable+="</tr>";
    }
    myTable+="</table>";
    $("#msresultado").html(myTable);
	
	 

}

function msborrar(idElemento){
var elemento={
  idClient:idElemento
};
var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
$.ajax({
      dataType:'json',
      data:dataToSend,
      url:"http://129.151.110.62:8080/api/Message/"+idElemento,
      type:'DELETE',
      contentType:'application/json',
      success:function(response) {
        console.log(response);

      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

  msobtenerItems();
	
}


function msobtenerItemEspecifico(idItem){
//var elemento={
//  id:idItem
//};
//var dataToSend=JSON.stringify(elemento);
  $.ajax({
      dataType: 'JSON',
      //data: {id:idItem},
	  //data:dataToSend,
      url:"http://129.151.110.62:8080/api/Message/"+idItem,
      type:'GET',
	  // contentType:'application/json',
      success:function(response) {
      console.log(response);
	  //ctpintarRespuesta(response);
	  
		//let date2 = new Date(item.fecha);
		
		//date2 = [date2.getFullYear(),date2.getMonth() + 1, date2.getDate()].join("-");
		//console.log(response[0]);
		//var item=response[0];


		
		$("#msidMessage").val(response.idMessage);
		$("#msmessageText").val(response.messageText);
//		$("#msid").val(response.id);
//		$("#msclientId").val(response.clientId);
		
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}



function msactualizar(){
//var date = $("#date").val().split("-");
var elemento = {

	idMessage: $("#msidMessage").val(),
	messageText:$("#msmessageText").val(),
	id:$("#msid").val(),
	clientId:$("#msclientId").val(),
	
	

  }

var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:dataToSend,
      contentType:'application/json',
      url:"http://129.151.110.62:8080/api/Message/update",
      type:'PUT',
      
      success:function(response) {
        console.log(response);
        msobtenerItems();
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });
	msobtenerItems();

}





////////////////// RESERVACIONES ////////////////////////////

function rsregistro(){
//var date = $("#date").val().split("-");

var fechaInicio = document.getElementById("rsdevolutionDate").value;
var fechaCierre = document.getElementById("rsstartDate").value;
console.log(fechaInicio);
console.log(fechaCierre);

    let var4 = {
		
		idReservation:$("#rsidReservation").val(),
		startDate:$("#rsstartDate").val(),
		devolutionDate:$("#rsdevolutionDate").val(),
		status:$("#rsstatus").val(),
		motorbikeId:$("#rsmotorbikeId").val(),
		rsclientId:$("#rsclientId").val(),		
				
				
	
				
				
		
        };
 
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://129.151.110.62:8080/api/Reservation/save",
       
        
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



function rsobtenerItems(){

     $.ajax({
        url:"http://129.151.110.62:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            rspintarRespuesta(respuesta);
        }
    });

}



function rspintarRespuesta(respuesta){
	




    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
		myTable+="<td>"+respuesta[i].idReservation+"</td>";
		myTable+="<td>"+respuesta[i].startDate+"</td>";
		myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
		myTable+="<td>"+respuesta[i].status+"</td>";
		myTable+="<td>"+respuesta[i].motorbikeId+"</td>";
		myTable+="<td>"+respuesta[i].clientId+"</td>";
		myTable+="<td><button onclick='rsborrar("+respuesta[i].idReservation+")'>Borrar</button></td>";
		myTable+="<td><button onclick='rsobtenerItemEspecifico("+respuesta[i].idReservation+")'>Cargar</button></td>";
	
		myTable+="</tr>";
    }
    myTable+="</table>";
    $("#rsresultado").html(myTable);
	
	 

}

function rsborrar(idElemento){
var elemento={
  idClient:idElemento
};
var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
$.ajax({
      dataType:'json',
      data:dataToSend,
      url:"http://129.151.110.62:8080/api/Reservation/"+idElemento,
      type:'DELETE',
      contentType:'application/json',
      success:function(response) {
        console.log(response);

      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

  rsobtenerItems();
	
}


function rsobtenerItemEspecifico(idItem){
//var elemento={
//  id:idItem
//};
//var dataToSend=JSON.stringify(elemento);



  $.ajax({
      dataType: 'JSON',
      //data: {id:idItem},
	  //data:dataToSend,
      url:"http://129.151.110.62:8080/api/Reservation/"+idItem,
      type:'GET',
	  // contentType:'application/json',
      success:function(response) {
      console.log(response);
	  //ctpintarRespuesta(response);
	  
		//let date2 = new Date(item.fecha);
		
		//date2 = [date2.getFullYear(),date2.getMonth() + 1, date2.getDate()].join("-");
		//console.log(response[0]);
		//var item=response[0];

//var fechaInicio = document.getElementById(response.startDate).value;
//var fechaCierre = document.getElementById(response.devolutionDate).value;
//console.log(fechaInicio);
//console.log(fechaCierre);


	    $("#rsidReservation").val(response.idReservation);
		$("#rsstartDate").val(response.startDate);
		//$("#rsstartDate").val(fechaInicio);
		
		
		$("#rsdevolutionDate").val(response.devolutionDate);
		//$("#rsdevolutionDate").val(fechaCierre);
		
		$("#rsstatus").val(response.status);
//		$("#rsmotorbikeId").val(response.motorbikeId);
//		$("#rsclientId").val(response.clientId);		
		
		
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}



function rsactualizar(){
//var date = $("#date").val().split("-");
var elemento = {



	idReservation: $("#rsidReservation").val(),
	startDate: $("#startDate").val(),
	devolutionDate:$("#rsdevolutionDate").val(),
	status:$("#rsstatus").val(),
	motorbikeId:$("#rsmotorbikeId").val(),
	clientId:$("#rsclientId").val(),
	

  }

var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:dataToSend,
      contentType:'application/json',
      url:"http://129.151.110.62:8080/api/Reservation/update",
      type:'PUT',
      
      success:function(response) {
        console.log(response);
        msobtenerItems();
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });
	rsobtenerItems();

}

//////////////////////////////REPORTES//////////////////////////







function traerReporteStatus(){
    console.log("test");
    $.ajax({
        url:"http://129.151.110.62:8080/api/Reservation/report-status",
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
    myTable+="<tr>";
       myTable+="<th>completadas</th>";
        myTable+="<td>"+respuesta.completed+"</td>";
        myTable+="<th>canceladas</th>";
        myTable+="<td>"+respuesta.cancelled+"</td>";
        myTable+="</tr>";
    myTable+="</table>";
    $("#resultadoStatus").html(myTable);
}

function traerReporteDate(){

var fechaInicio = document.getElementById("RstarDate").value;
var fechaCierre = document.getElementById("RdevolutionDate").value;
console.log(fechaInicio);
console.log(fechaCierre);

    $.ajax({
        url:"http://129.151.110.62:8080/api/Reservation/report-dates/"+fechaInicio+"/"+fechaCierre,
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaDate(respuesta);
        }
    });
}
function pintarRespuestaDate(respuesta){

    let myTable="<table>";
    myTable+="<tr>";
      
    for(i=0;i<respuesta.length;i++){
    myTable+="<th>total</th>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].status+"</td>";
      
      
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoDate").html(myTable);
}

function traerReporteClientes(){
    $.ajax({
        url:"http://129.151.110.62:8080/api/Reservation/report-clients",
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
    myTable+="<tr>";
      
    for(i=0;i<respuesta.length;i++){
    myTable+="<th>total</th>";
        myTable+="<td>"+respuesta[i].total+"</td>";
        myTable+="<td>"+respuesta[i].client.name+"</td>";
        myTable+="<td>"+respuesta[i].client.email+"</td>";
        myTable+="<td>"+respuesta[i].client.age+"</td>";
      
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoClientes").html(myTable);
}

