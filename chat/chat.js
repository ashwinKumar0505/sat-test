const container=document.getElementById("container");
  
function closeThis(){
  container.style.display="none";
     mark.style.display="block";  
}

function show(){
  const container=document.getElementById("container");
  const mark=document.getElementById("mark");
  container.style.display="flex";
  mark.style.display="none";
}

function checkForEnter(event){
  if(event.keyCode==13){
    send();
  }
}

function send(){
    
  let textField=document.getElementById("text-field");
  let text=textField.value;
  let newText="";
  
  const chatPage=document.getElementById("chat-page")
  const messageDiv=document.createElement("div");
  const textDiv=document.createElement("div");;
  const textNode=document.createTextNode(text);

  const date=new Date();
  const hours=date.getHours();
  const minutes=date.getMinutes();
    
  if(text==""){
    return;
  }
  textField.value=newText;
  
  textDiv.appendChild(textNode);
 time=hours+"."+minutes
 
  const timeNode=document.createTextNode(time);
  
  timeDiv=document.createElement("div");

  timeDiv.appendChild(timeNode);

  messageDiv.appendChild(timeDiv);


  messageDiv.appendChild(textDiv);


  chatPage.appendChild(messageDiv);


  textDiv.classList.add("chat1-right-message");


  timeDiv.classList.add("time");

  messageDiv.classList.add("chat1-right");

  messageDiv.scrollIntoView(false)
}
