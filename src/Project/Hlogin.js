import React, {useState} from 'react'
import "./hstyle.css"


function Login() {
  const [Username,setUsername]=useState('');/*State creation*/
  const [Password,setPassword]=useState('');
  const [Email,setEmail]=useState('');
  const [error,setError]=useState(false);
  const formhandler=(event)=>
  {
    event.preventDefault();//For auto submit//
    if(Username.length===0 && Password.length===0 && Email.length===0)
    {
      setError(true);
    }
    if(Username && Password)
    {
    const loginObj={
      name:Username,
      pwd:Password,
      email:Email
    }
    console.log(loginObj);
    alert(JSON.stringify(loginObj));
    //axios.post(url/obj)//
    }
  }
  return (
    <div>
    <div class="img">
    <div class="log">
    <div class="login">Login</div>
    </div>
    <div class="form">
    <form onSubmit={formhandler}>
    <div class="kc1">
     Username:<input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
    <br/>
    {error && Username.length===0?
    <label style={{color:'red'}}>
    Username is required</label>:""}
    </div>
    <div class="kc2">
    E-mail-Id: <input type="text" placeholder="Email" on onChange={(e)=>setEmail(e.target.value)}/>
    <br/>
    {error && Email.length===0?
    <label style={{color:'red'}}>
    Email is required</label>:""}
    </div>
    <div class="kc3">
        Password:<input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
    <br/>
    {error && Password.length>0 && Password.length<8?
    <label style={{color:'red'}}>
    Password must be min 8 characters required</label>:""}
    </div>
    <div class="for">
    <a href="#">Forgot Password?</a>
    </div>
    <br/>
    <div class="kb">
    <button type="submit"><h3>Submit</h3></button>
    </div>
    <br/><br/>
   
    </form>
    </div>
    <div class="sig">
    <h4>
    <br/>
    New User?
    <a href="#">Signup</a>
    </h4>
    </div>
    </div>
  </div>
  )
}

export default Login