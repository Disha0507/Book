import React,{useState} from 'react'
import styles from './LoginPage.module.css'
import Navbar from '../../Components/Layouts/Navbar/Navbar'
import Footer from '../../Components/Layouts/Footer/Footer'
import AuthImg from '../../assets/book4.png'
import { Link, useNavigate } from 'react-router-dom'
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import app from '../../Firebase/Firebase'

const LoginPage = () => {

  const buttonName="Login"
  const [email,setEmail]=useState('');
  const [username,setUserName]=useState('');
  const[password,setPassword]=useState('');

  const navigate=useNavigate();


  const handleSubmit=(event)=>{
     event.preventDefault();
   const auth=getAuth(app);
   console.log(auth)
   
   if(buttonName === 'Login')
   {
    signInWithEmailAndPassword(auth,email,password)
    .then(()=>{
      navigate('/');
    })
    .catch((err)=>{
      console.log(err)
    })
     
   }
   else{

    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredentials)=>{
      userCredentials.user.displayName=username;
      navigate('/')
    })
    .catch((err)=>{
      console.log(err)
    })

   }

 
  
  }


  return (
    <>
    <Navbar darkTheme={true}/>
    <section className={`${styles['login-container']}`}>
        <div  className={`${styles['login-img-container']}`}>
            <img src={AuthImg}></img>
        </div>

        <div className={`${styles['login-content-container']}`}>
           <div className={`${styles.container}`}>
           <div className={`${styles['login-wrapper']}`}>
                <h2>Login</h2><Link to="/signup"><h2>SignUp</h2></Link>
                <p> Login into an account with email and password.</p>

                <form  onSubmit={handleSubmit}>
                    <div className={`${styles['form-group']}`}>
                      <label htmlFor="e">Email</label>
                      <input id="e" type="email" 
                      onChange={(event)=>setEmail(event.target.value)}
                      placeholder='Enter your Email' className={`${styles['form-input']}`} required></input>
                    </div>

                    <div className={`${styles['form-group']}`}>
                      <label htmlFor="pass">Password</label>
                      <input id="pass" type="password" 
                      onChange={(event)=>setPassword(event.target.value)}
                      placeholder='Enter your Password' className={`${styles['form-input']}`} required></input>
                    </div>

                    <div className={`${styles['form-group']}`}>
                      <input 
                      className={`${styles['form-login']}`}
                      type="submit"
                      value={buttonName}
                      ></input>
                       </div>
                </form>
            </div>
           </div>
        </div>
       
    </section>
    <Footer/>
    </>
  )
}

export default LoginPage