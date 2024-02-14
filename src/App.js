import { useState } from 'react';
import './App.css';

function App() {

  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const [errorUsername,setErrorUsername] = useState("");
  const [errorEmail,setErrorEmail] = useState("");
  const [errorPassword,setErrorPassword] = useState("");
  const [errorConfirmPassword,setErrorConfirmPassword] = useState("");
 
  const [userColor,setUserColor] = useState("");
  const [emailColor,setEmailColor] = useState("");
  const [passwordColor,setPasswordColor] = useState("");
  const [confirmPasswordColor,setConfirmPasswordColor] = useState("");
 
  function validate(e){
    e.preventDefault();

    if(username.length > 8){
      setErrorUsername("");
      setUserColor("green");
    }else{
      setErrorUsername("Username must be 8 letters long");
      setUserColor("red");
    }

    if(email.includes("@gmail")){
      setErrorEmail("");
      setEmailColor("green");
    }else{
      setErrorEmail("Email should have @gmail");
      setEmailColor("red");
    }

    if(password.length > 8){
      setErrorPassword("");
      setPasswordColor("green");
    }else{
      setErrorPassword("Password should be 8 letters long");
      setPasswordColor("red");
    }

    if(password !== "" && password === confirmPassword){
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    }else{
      setErrorConfirmPassword("Passwords did not matched.");
      setConfirmPasswordColor("red");
    }
  }

  return (
    <>
    <div className="card">
      <div className='card-image'></div>
        <form>
          <input type='text' placeholder='Name'
          value={username}
          style={{borderColor: userColor}}
          onChange={(e) => setUsername(e.target.value)}/>

          <p className='error'>{errorUsername}</p>

          <input type='text' placeholder='Email'
          value={email}
          style={{borderColor:emailColor}}
          onChange={(e) => setEmail(e.target.value)}/>

          <p className='error'>{errorEmail}</p>

          <input type='password' placeholder='Password'
          value={password}
          style={{borderColor:passwordColor}}
          onChange={(e) => setPassword(e.target.value)}/>

          <p className='error'>{errorPassword}</p>

          <input type='password' placeholder='Confirm Password'
          value={confirmPassword}
          style={{borderColor:confirmPasswordColor}}
          onChange={(e) => setConfirmPassword(e.target.value)}/>

          <p className='error'>{errorConfirmPassword}</p>

          <button className='submit-btn'
          onClick={validate}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
