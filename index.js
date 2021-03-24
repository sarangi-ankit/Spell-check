let dummy
function textBox(){
    let file=searchFile.files[0]
    let reader=new FileReader()
    reader.readAsText(file)
    reader.onload=()=>{
        text.innerHTML=reader.result
        let input=reader.result
        let input1=input.replace(" ","+")
        let invalids;
        const apiKey="YYzAtVCWDnDhRBpg"
        let api=`https://api.textgears.com/grammar?key=${apiKey}&text=${input1}&language=en-GB`
        $.ajax({
            url:api,
            method:"GET",
            success:function(result,status){
                console.log(result)
                if (status){
                    invalids=result.response.errors;
                    for (let invalid of invalids){
                        input=input.replace(
                            invalid.bad,
                            `<span  class="mistake">${invalid.bad}</span>`
                        );
                    }
                    text.innerHTML=input

                }
                let mistakeSpan=document.querySelectorAll(".mistake");
                for (let i=0;i<mistakeSpan.length;i++){
                    $(mistakeSpan[i]).contextmenu((event)=>{
                        // console.log(mistakeSpan[i])
                        
                        event.preventDefault();
                        $("#custom > ul").empty()
                        for (let j=0;j<invalids[i].better.length;j++){
                            $("#custom > ul").append(`<li wordtoreplace="${invalids[i].bad}" class="reference">${invalids[i].better[j]}</li>`)
                            
                        }
                        $(".reference").mouseover(
                            (event)=>{
                                event.target.style.backgroundColor="green";
                            }
                        )
                        $(".reference").mouseout(
                            (event)=>{
                                event.target.style.backgroundColor="";
                            }
                        )
                        $(".reference").click(
                            (event)=>{
                                let wrongWord=document.getElementsByClassName("mistake");
                                
                                // console.log(correctWords)
                                

                               for (let z=0;z<wrongWord.length;z++){
                                //    wrongWord[z].innerHTML=correctWords.innerHTML
                                    // console.log("ankit")
                                    if (wrongWord[z].innerHTML==$(event.target).attr("wordtoreplace")){
                                        wrongWord[z].innerHTML=event.target.innerHTML;
                                        wrongWord[z].classList.remove("mistake");
                                        $("#custom").css("display","none");
                                        break;
                                    
                                    }
                               }

                            }
                        )
                        $("#custom").css("display","block")

                       
                      

                    })
                }
            }

        })
    }
}
