
document.getElementById('btn').addEventListener('click',
function(){
              let input = document.getElementById('input').value;
              let elem=document.createElement('li');
              let btn1=document.createElement('button');
              let btn2=document.createElement('button');
              btn1.innerText="Done";
              btn2.innerText="Delete";
              elem.innerText=input;
             let ul=document.querySelector('ul') ;
             ul.appendChild(elem);
             elem.appendChild(btn1)
             elem.appendChild(btn2)
             elem.style.textDecorationColor="balck";
             btn1.style.marginLeft="3%";
             btn1.style.borderWidth="0px";
             btn1.style.backgroundColor="green";
             btn1.style.color="white"
             btn1.style.borderRadius="5px";
             btn1.style.height="30px";
             btn1.style.width="70px";
             btn1.style.position="right";
             btn1.height="13px";
             btn1.style.padding="0px";
             
             btn2.style.marginLeft="3%";
             btn2.style.borderWidth="0px";
             btn2.height="10px"
             btn2.style.backgroundColor="red";
             btn2.style.color="white";
             btn2.style.borderRadius="5px";
             btn2.style.height="30px";
             btn2.style.width="70px";
             btn2.style.margin="5px";
             
             btn1.addEventListener('click',
             function(){
                elem.style.textDecoration="line-through blue"
             }
             );       
             btn2.addEventListener('click',
             function(){
                elem.remove()
             }
             );                   
             document.getElementById('input').value="";



          }
);

