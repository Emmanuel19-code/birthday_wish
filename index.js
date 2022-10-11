import data from "./data.js";
import profile from "./Profiles.js";

const CheckforBirthday=(day)=>{
   //compares the day's date to the users birthday date
   const new_date=Date.parse(formatDate(new Date()))
    let response=Messages()
   if(day==new_date){
      console.log(response.message);
      console.log(response.verse);
   }
  
}


const Messages=()=>{
   let index=Math.floor((Math.random()*22)+1)
   return data[index]
}



profile.map((items)=>{
      let birth_date=Date.parse(items.date)
      CheckforBirthday(birth_date)
   })


function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join('-');
}



Messages()
CheckforBirthday()