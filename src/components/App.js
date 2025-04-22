
import React,{useState} from "react";
import './../styles/App.css';
// import { add, includes } from "cypress/types/lodash";""

const App = () => {

   
let [errorMessage,setErrorMessage]=useState({
  nameError:"",
  addressError:"",
  emailError:"",
  numberError:""
})



let [obj,setObj]= useState({
  name:"",
  address:"",
  email:"",
  number:""
})


let {name,address,email,number}=obj




function validateFomr(){

let error = {};
let isvalid = true
let special = "!@#$%^&*()"

for(let t of name){

  if(!(t>="A" && t<="Z" || t>="a" && t<="z" || t==" ")){

    error.nameError="Name should contain only letters"
    isvalid = false
    break
  }
}

for(let t of special){

  if(address.includes(t)){
    error.addressError="Address should not contain special characters"
    isvalid=false
    break
  }
}

if(!email.includes("@") || !email.includes(".com")){
  error.emailError="Email should contain @ and .com"
isvalid=false
}

if(number.length !=10 || isNaN(Number(number))){
  error.numberError="Mobile number should not be more than 10 characters"
  isvalid=false
}

setErrorMessage(error)
return isvalid

  
}







function handleSubmit(e){
  e.preventDefault()

  if(validateFomr()){
    
      alert("Form Submitted successfully")

    }
  }
  
 
console.log(errorMessage);



function changeText(e){

    let v =e.target.value
let key = e.target.name
setObj({...obj,[key]:v})
setErrorMessage({...errorMessage,[`${key}Error`]:""})
  }

console.log(errorMessage);










  
  return   <div>
        {/* Do not remove the main div */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name
          <input type="text" name="name" onChange={changeText}/>
          <span className="nameError">{errorMessage.nameError}</span>
          </label><br/>
          <label htmlFor="address">address
          <input type="text" name="address" onChange={changeText}/>
          <span className="addressError">{errorMessage.addressError}</span>
          </label><br/>
          <label htmlFor="email">Email
          <input type="email" name="email" onChange={changeText}/>
          <span className="emailError">{errorMessage.emailError}</span>
          </label><br/>
          <label htmlFor="number">Number
          <input type="number" name="number" onChange={changeText}/>
          <span className="numberError">{errorMessage.numberError}</span>
          </label><br/>
          <button>Submit</button>
        </form>

    </div>
  
}


export default App
