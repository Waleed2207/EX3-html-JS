

function initialize(){

    const main=document.getElementById("DropToMain");
    let div="";
    for(i=0;i<14;i++){
      div+="<section > <div></div><div><button id=reset>reset</button></div><div></div><div></div> </section>"
    }
    main.innerHTML=div;

    let index = 0;
    const colors = ["cyan",'Orange', 'green', 'purple','yellow','pink','red','blue'];
    let count=0 
    const btnclick =document.getElementById('btn');
    function logger(){
      count++;
      if(count==10){
        document.getElementsByTagName("div")[0].style.backgroundColor="";
        document.getElementById('btn').style.background="red";
        document.getElementById('btn').style.color="black";
        document.getElementById('reset').style.display = 'block';
        end(); 
      }
      else{
        document.getElementsByTagName("div")[0].style.backgroundColor = colors[index];
        index = index >= colors.length - 1 ? 0 : index + 1;
      }
    }
    btnclick.addEventListener('click', logger);
    function end(){
        btn.removeEventListener('click', logger);
    }

    const res =document.getElementById('reset');
    res.addEventListener('click', reset);
    function reset(){
      location.reload()
    }

    document.getElementById('DropToMain').querySelectorAll('div').forEach(index => {
    index.addEventListener("click", item =>{

        const div = item.target;

        if(div.style.backgroundColor == "blue"){
          div.style.backgroundColor = "";
        } 
        else{
          div.style.backgroundColor = "blue";
        
        }

    })
  })

}


