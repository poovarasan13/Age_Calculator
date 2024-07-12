const btn = document.getElementById("btn");
const birthday = document.getElementById("birthday");
const result = document.getElementById("result");

function calculateAge() {
      const birthdayValue = birthday.value;
    const today=new Date();
    result.style.color="black";
    if (birthdayValue === "") {
      result.innerText="First You have to Enter your Birthday Date";
      result.style.color="red";
    } else {
     const age = getAge(birthdayValue);
     if(age==0){
      result.innerText = "You age is less than one year";
     result.style.color="red";
     }
     else if(age>0){
      result.innerText = "You are "+age+" years old";
       result.style.color="blue"
     }
     else{
      result.innerText="You entered the future date";
      result.style.color="red";
     }
    }
  }
  function getAge(birthdayValue)
  {
    let current=new Date();
    let birthdaydate=new Date(birthdayValue);
    let age=current.getFullYear()-birthdaydate.getFullYear();
    let month=current.getMonth()-birthdaydate.getMonth();
    if (
        month < 0 ||
        (month === 0 && current.getDate() < birthdaydate.getDate())
      ) {
        age--;
      }
      
    return age;
  } 

    btn.addEventListener("click", calculateAge);