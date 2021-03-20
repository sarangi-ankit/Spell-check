// https://api.textgears.com/spelling?key=YYzAtVCWDnDhRBpg&text=my%20name%20is%20amna%20sigh%20solanki&language=en-GB
function random(){
    var input2=document.getElementById("input2").value;
    document.getElementById("input1").value=input2;

 }
 let bl = ''
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
         bl = lines.join('\n');
     };
     reader.readAsText(file);
     fetchApi()
 });

function fetchApi(){
  

     fetch("https://api.textgears.com/spelling?key=YYzAtVCWDnDhRBpg&text="+searchBox)
     .then((response)=>{
         return response.json();
     }).then((data)=>{
         console.log(data)
     })
     
     }
     fetchApi()
 

