import React, {useState} from 'react'
import './App.css';

function CustomObjectHooks(initialValue){
  const [value, setValue] = useState(initialValue)

  function onChange(e){
    setValue(e.target.value);
  }

  return {value, onChange}
}

function App() {

  const {username} = CustomObjectHooks("");
  const {email} = CustomObjectHooks("");
  const {password} = CustomObjectHooks("");


  function handleOnSubmit(e){
    e.preventDefault();
    
  }
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input 
        placeholder="username"
        type="text"
        {...username}/>
        <input 
        placeholder="email"
        type="text"
        {...email}/>
        <input 
        placeholder="password"
        type="password"
        {...password}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
