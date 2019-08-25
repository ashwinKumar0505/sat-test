let format=window.prompt("enter the format");

formatDate(new Date(),format);



function formatDate(date,format){
  const months = ["Jan","Feb","Mar","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
  const regex = /^[A-Za-z0-9 ]+$/ 
  const day=date.getDate();
  const month=date.getMonth();
  const year=date.getFullYear();
  format=format.toLowerCase();
  console.log(format);
  let str="";
  let splChar;
  let splChar2;
  if(format[0]=='d'){
      splChar=format[2];
    if(format.length==10){
      splChar2=format[5];
      str=day+""+splChar+""+month+""+splChar2+""+year;
    }
    else if(format.length==11){
        splChar2=format[6];
        str=day+""+splChar+""+months[month]+""+splChar2+""+year;       
    }
    else{
      str="wrong format"
    }
    if(regex.test(splChar) && regex.test(splChar2)){
      str="wrong format"
    }
  }

  else if(format[0]=='m'){
    if(format.length==10){
       splChar=format[2];
        splChar2=format[5];
        str=month+""+splChar+""+day+""+splChar2+""+year
    }
    else if(format.length==11){
         splChar=format[3];
          splChar2=format[6];
         str=months[month]+""+splChar+""+day+""+splChar2+""+year
    
    }
    else if(format.length==8){
        splChar=format[3];
        str=months[month]+""+splChar+""+year    
    }

    if(regex.test(splChar) && regex.test(splChar2)){
      str="wrong format"
    }
  }

  else if(format[0]=='y'){
      splChar=format[4];
      if(format.length==10){
         splChar2=format[7];
         str=year+""+splChar+""+month+""+splChar2+""+day;
      }
      else{
         splChar2=format[8];
         str=year+""+splChar+""+months[month]+""+splChar2+""+day;     
      }

    if(regex.test(splChar) && regex.test(splChar2)){
      str="wrong format"
    }
  }
  else{
    console.log("wrong format")
  }

  console.log(str);
}