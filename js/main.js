var printType;

//$( "#form1" ).submit(function( event ) {

//  printType = $( "button:submit" ).val();
//  alert(printType);
//  event.preventDefault();
//});
 $("#megatronNext").hide();
 $("#description1").hide();
 $("#description2").hide();

function tallPrint(){
  printType = 1;
  $("#megatronNext").show();
}


function squarePrint(){
	 printType = 0;
	 $("#megatronNext").show();
	}


function description1(){

	 $("#description1").show();
}


function description2(){

	 $("#description2").show();
}

function hideDescription(){
 $("#description1").hide();
 $("#description2").hide();
}

