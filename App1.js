import React, {useState} from 'react'
import './App.css';

function CustomArrayHooks(initialState){
  const [value, setValue] = useState(initialState);

  function onChange(e){
    setValue(e.target.value)
  }

  function showInfo(){
    console.log(value)
  }

  function clearInfo(){
    setValue("");
  }

  return [value, onChange, showInfo, clearInfo]
}

function App() {

  const [username, usernameOnChange, usernameShowInfo, clearUsername] = CustomArrayHooks("");
  const [email, emailOnChange, emailShowInfo, clearEmail] = CustomArrayHooks("");
  const [password, passwordOnChange, passwordShowInfo, clearPassword] = CustomArrayHooks("");

  function handleOnSubmit(e){
    e.preventDefault();
    usernameShowInfo();
    emailShowInfo();
    passwordShowInfo();
    clearUsername();
    clearEmail();
    clearPassword();
  }
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input 
        value={username}
        placeholder="username"
        type="text"
        onChange={usernameOnChange}/>
        <input 
        value={email}
        placeholder="email"
        type="text"
        onChange={emailOnChange}/>
        <input 
        value= {password}
        placeholder="password"
        type="password"
        onChange={passwordOnChange}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
