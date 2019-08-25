let format=window.prompt("enter the format");

formatDate(new Date(),format);


function formatDate(date,format){
  const months = ["Jan","Feb","Mar","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
  const regex = /^[A-Za-z0-9 ]+$/ 
  const day=date.getDate();
  const month=date.getMonth();
  const year=date.getFullYear();
  format=format.toLowerCase();

  let format1=format.replace('dd',day);
  let format2=format1.replace('mmm',months[month]);
  let format3=format2.replace('mm',month);
  let format4=format3.replace('yyyy',year);
  console.log(format4); 

}