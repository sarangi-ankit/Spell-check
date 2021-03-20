
function random(){
    var input2=document.getElementById("input2").value;
    document.getElementById("input1").value=input2;

 }
 
 var searchBox=document.getElementById("textBox");

 input2.addEventListener("change",()=>{
     var files=input2.files;
     if (files.length==0) return;
     var file=files[0];

     var reader=new FileReader();
     reader.onload=(e)=>{
         var file=e.target.result;
         var lines=file.split(/\r\n|\n/);
         searchBox.value=lines.join('\n');
     };
     reader.readAsText(file);
 });
