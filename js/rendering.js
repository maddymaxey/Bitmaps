



function download2(){
  var zip=new JSZip();
  zip.add("hello1.txt","Hello First World\n");
  zip.add("hello2.txt","Hello Second World\n");
  var content=zip.generate();
  //location.href="data:application/zip;base64,"+content;
}
