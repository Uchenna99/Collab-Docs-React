import "../stylesheets/Signup.css"
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";
import { authURL } from "../config/UseWebSocket";
import blank from "../assets/docs-blank-googlecolors.png"

interface LoginDTO {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
}



const Login = () => {
  const navigate = useNavigate();
  const [pageLoading, setPageLoading] = useState(true);
  const [loggingIn, setLoggingIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(()=>{
    const checkUser = async()=>{
      const user = await localStorage.getItem('collabDocsUser');
      if(user){
        navigate('/select');
      }else{
        setPageLoading(false);
        console.log('Cannot find user');
      }
    }
    checkUser();
  },[])
  

  const loginData = {
    email: email,
    password: password
  }

  const handleLogin = async (data: LoginDTO)=>{
    if(email===''||password===''){
      toast.error('Please fill in all the fields', {position:'top-right'});
    }else if (password.length < 8){
      toast.error('Password must be at least 8 characters long', {position:'top-right'});
    }else{
      setLoggingIn(true);
      try {
        await axios.post(`${authURL}/login`, data)
        .then((response)=>{
          const saveResponse = response.data as LoginResponse
          localStorage.setItem('collabDocsUser', saveResponse.accessToken);
          navigate('/select');
          toast.success('Logged in successfully', {position:'top-right'});
        })
        
      } catch (error) {
        setLoggingIn(false);
        if(axios.isAxiosError(error)) {
          toast.error(error.response?.data.error || "Network error", {position:'top-right'});
        }else{
          toast.error('An unexpected error occurred', {position:'top-right'});
        }
      }
    }
  }

  return (
    <>
    {
      pageLoading?
      <div className="pageLoader">
        <ClipLoader 
          color="#1E3A8A"
          size={70}
        /> 
      </div>
      :
      <div className="signup-wrapper">
        <div className="signup-image">
          <img id="signup-lady" src={blank} alt="Happy Lady" />
        </div>

        <div className="signup-form">
          <div className="form-welcome">
            <p style={{fontSize:19, fontWeight:500}}>
              Welcome back! Login to your account.
            </p>
          </div>


          <input className="form-input" type="text" placeholder="Email" value={email}
          onChange={(e)=>setEmail(e.target.value)}/>

          <div className="input-wrapper">
            <input className="form-input" type={showPassword? 'text':'password'} placeholder="Password" value={password}
            onChange={(e)=>setPassword(e.target.value)} />
            {
              showPassword?
              <LuEyeClosed id="pass-eye" onClick={()=>setShowPassword(false)} /> :
              <LuEye id="pass-eye" onClick={()=>setShowPassword(true)} />
            }
          </div>

            {
              loggingIn ?
              <div className="button-loader-div">
                <ClipLoader 
                color="#FFFF"  
                size={15}
                />
              </div>
              :
              <button className="signup-butn" onClick={()=>handleLogin(loginData)}>
                Login
              </button>
            }

          <div className="redirect-div">
            <p>Don't have an account?</p>
            <Link id="redirect-link" to={'/signup'}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default Login;