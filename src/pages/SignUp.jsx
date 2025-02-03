import Nav from '../components/Nav'
import react ,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';


const SignUp = () => {
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');

   const navigate=useNavigate();
   const {enqueueSnackbar}=useSnackbar();

   const handleSignup=()=>{
    //console.log('Sing up clicked');
    axios
    .post('http://localhost:8888/user/signup',{email,password})
    .then((response)=>{
      if(response?.status===201){
        enqueueSnackbar('Sign Up Successful!!', { variant: 'success' });
      }
     navigate('/');
    })
    .catch((error)=>{ 
     //Handle specific error messages
    if(error.response?.status===400){
     enqueueSnackbar('Email already exists', { variant: 'error' });
     }

    });
   }

  return (
    <>
     <Nav />
     <div className=" container-fluid h-screen px-3 py-5 bg-slate-100 w-full">
          <div className="flex flex-col justify-center items-center h-4/5 w-full">
            <form className="w-1/4 px-3 py-6 bg-white rounded-md">
            <h3 className="mb-2 font-bold">Sign Up</h3>
             <label>Email Address:</label><br />
             <input type="text" className="py-1 mb-7 mt-2 w-11/12 border-2" 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)}/><br />
             <label>Password:</label><br />
             <input type="password" className="py-1 mb-7 mt-2 w-11/12 border-2" 
             value={password} 
             onChange={(e)=>setPassword(e.target.value)} /><br />
             <button className="btn btn-sm text-white border-2 px-2 py-2
              bg-blue-700 rounded-md hover:scale-95 hover:border-blue-700
               hover:bg-white hover:text-black" type="button"
               onClick={handleSignup} >Sign Up</button>
            </form>
          </div>
     </div>
    </>
    
  )
}

export default SignUp