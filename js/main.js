var printType;
var layers;

$( "#layerForm" ).submit(function( event ) {

 layers = $( "select option:selected" ).val();
 event.preventDefault();
});

 $("#page1Next").hide();
 $("#megatronNext").hide();
 $("#description1").hide();
 $("#description2").hide();
  $("#50Microns").hide();

function tallPrint(){
  printType = 1;
  $("#megatronNext").show();
  hideDescription();
}


function squarePrint(){
	 printType = 0;
	 $("#megatronNext").show();
	  hideDescription();

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

function page1Next(){
  $("#page1Next").show();
}

