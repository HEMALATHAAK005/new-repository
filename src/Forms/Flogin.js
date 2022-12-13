import React, { useState ,} from 'react'
import { useNavigate } from 'react-router-dom'; 
function Flogin() { 
    const [Username, setUsername] = useState(''); /*state creation*/
    const [Password, setPassword] = useState('');
    const [error,setError]= useState(false);  
    const formhandler=(event)=>
    {   
        event.preventDefault();
        if(Username.length ===0 && Password.length ===0){
           setError(true);
        }
        if(Username && Password) {
         const loginobj={
            name:Username,      
            pwd:Password
        }
        
        console.log(loginobj);
        alert(JSON.stringify(loginobj)) ;
        //axios.post(url/obj) 
        Navigate("/Welcome");
      }
    }
  return ( 
    <div>
    <h4>Login page</h4>
    <form onSubmit={formhandler}>
    Username:<input type="text" value={Username} placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>  
    <br/> <br/>
    <div>
    { error && Username.length ===0?
      <label style={{color:'red'}}>
      Username is required</label>:""
    }
    </div>
    Password:<input type="password" value={Password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
    <br/> <br/>
    <div>
    { error && Password.length ===0? 
      <label style={{color:'red'}}>
      Password is required</label>:""
    }
    </div>
    <button type="submit">Login</button>
    </form> 
    </div>
  ) 
} 
export default Flogin 
/*JSON-Javascript object notation*/