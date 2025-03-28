import "../stylesheets/Signup.css"
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";
import { userURL } from "../config/UseWebSocket";
import blank from "../assets/docs-blank-googlecolors.png"


const Signup = () => {
  const navigate = useNavigate();
  const [pageLoading, setPageLoading] = useState(true);
  const [signingUp, setSigningUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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

  const signupData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password

  }

  const handleSignup = async ()=>{
    try {
      if(firstName===''||lastName===''||email===''||password==='') {
        toast.error('Please fill in all fields', {position:'top-right'});
      }else if(password.length < 8) {
        toast.error('Password must be at least 8 characters long', {position:'top-right'});
      }else{
        setSigningUp(true);
        await axios.post(`${userURL}/signup`, signupData)
        .then((response)=>{
          navigate('/login');
          toast.success(response.data.message, {position:'top-right'});
        })
      } 
      
    } catch (error) {
      setSigningUp(false);
      if(axios.isAxiosError(error)) {
        toast.error(error.response?.data.error || 'Network error', {position:'top-right'});
      }else{
        toast.error('An unexpected error occurred', {position:'top-right'});
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
              Create your Collab Docs account.
            </p>
          </div>

          <input className="form-input" type="text" placeholder="Name"
          onChange={(e)=>{setFirstName(e.target.value)}} />

          <input className="form-input" type="text" placeholder="Surname"
          onChange={(e)=>{setLastName(e.target.value)}} />

          <input className="form-input" type="text" placeholder="Email"
          onChange={(e)=>{setEmail(e.target.value)}} />

          <div className="input-wrapper">
            <input className="form-input" type={showPassword? 'text':'password'} placeholder="Password"
            onChange={(e)=>{setPassword(e.target.value)}} />
            {
              showPassword?
              <LuEyeClosed id="pass-eye" onClick={()=>setShowPassword(false)} /> :
              <LuEye id="pass-eye" onClick={()=>setShowPassword(true)} />
            }
          </div>

          <button className="signup-butn" onClick={handleSignup}>
            Create Account
            {
              signingUp &&
              <div className="button-loader-div">
                <ClipLoader 
                color="#FFFF"  
                size={15}
                />
              </div>
            }
          </button>

          <div className="redirect-div">
            <p>Already have an account?</p>
            <Link id="redirect-link" to={'/login'}>
              Login
            </Link>
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default Signup;