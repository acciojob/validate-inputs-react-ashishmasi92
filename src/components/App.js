
import React,{useState} from "react";
import './../styles/App.css';
// import { add, includes } from "cypress/types/lodash";

const App = () => {

let [obj,setObj]= useState({
  name:"",
  address:"",
  email:"",
  number:""
})

let {name,address,email,number}=obj

function handleSubmit(){

  if( !name || !address || !email || !number){
    alert("all input field required")
  return
  }

  if(address=="!"||address=="@"||address=="#"||address=="$"||address=="%"||address=="^"||address=="&"||address=="*"||address=="("||address==")"){
    alert("address should not include special character")
  return
  }
  if(name>=0&& name<=9){
    alert("numbers are not includes in name box")
    return 
  }
  if(number.length==9){
    alert("length must be equal to 10")
  return
  }

alert("form submitted Successfully")

}

  function changeText(e){
    let v =e.target.value
let key = e.target.name
setObj({...obj,[key]:v})
  }
  console.log(obj)
  
  return (
    <div>
        {/* Do not remove the main div */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name
          <input type="text" name="name" onChange={changeText}/>
          </label><br/>
          <label htmlFor="address">address
          <input type="text" name="address" onChange={changeText}/>
          </label><br/>
          <label htmlFor="email">Email
          <input type="email" name="email" onChange={changeText}/>
          </label><br/>
          <label htmlFor="number">Number
          <input type="number" name="number" onChange={changeText}/>
          </label><br/>
          <button>Submit</button>

        </form>
    </div>
  )
}

export default App
