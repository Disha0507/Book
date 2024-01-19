import React,{useState} from 'react'
import styles from './SignUpPage.module.css'
import Navbar from '../../Components/Layouts/Navbar/Navbar'
import Footer from '../../Components/Layouts/Footer/Footer'
import AuthImg from '../../assets/book2.jpg'
import app from '../../Firebase/Firebase'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {
    const buttonName="SignUp"
    const [email,setEmail]=useState('');
    const [username,setUserName]=useState('');
    const[password,setPassword]=useState('');

    const navigate=useNavigate();

    // const handleChange=(event)=>{
    //   console.log(event)
    //     if(event.target.type === 'email')
    //     {
    //         setEmail(event.target.value)
    //     }
    //     else if(event.target.type === 'password')
    //     {
    //        setPassword(event.target.value)
    //     }
         
    // }

    const handleSubmit=(event)=>{
       event.preventDefault();
     const auth=getAuth(app);
     console.log(auth)
     createUserWithEmailAndPassword(auth,email,password)
        .then((userCredentials)=>{
          userCredentials.user.displayName=username;
          navigate('/')
        })
        .catch((err)=>{
          console.log(err)
        })
    
    }


  return (
    <>
    <Navbar darkTheme={true}/>
    <section className={`${styles['signup-container']}`}>
        <div  className={`${styles['signup-img-container']}`}>
            <img src={AuthImg}></img>
        </div>

        <div className={`${styles['signup-content-container']}`}>
           <div className={`${styles.container}`}>
           <div className={`${styles['content-wrapper']}`}>
                <h2>SignUp</h2>
                <p>Create an account with email and password.</p>

                <form   onSubmit={handleSubmit}>


                <div className={`${styles['form-group']}`}>



                <label htmlFor="un">UserName</label>
                  <input
                    className={`${styles['form-input']}`}
                   
                    id="un"
                    type="text" 
                    placeholder='Enter your name' 
                    value={username}
                    onChange={(event)=>setUserName(event.target.value)}
                    required
                    >
                  </input>
                  </div>


                    <div className={`${styles['form-group']}`}>



                      <label htmlFor="e">Email</label>
                      <input
                       className={`${styles['form-input']}`}
                      
                       id="e"
                       type="email" 
                       placeholder='Enter your Email' 
                       value={email}
                       onChange={(event)=>setEmail(event.target.value)}
                       required
                      >
                        </input>
                        
                       
                    </div>

                    <div className={`${styles['form-group']}`}>
                      <label htmlFor='pass' >Password</label>
                      <input 
                      className={`${styles['form-input']}`}
                       id='pass'
                      type="password" 
                      placeholder='Enter your Password'
                      value={password}
                      onChange={(event)=>setPassword(event.target.value)}
                      required
                      ></input>
                    </div>

                    <div className={`${styles['form-group']}`}>
                      <input 
                      className={`${styles['form-signup']}`}
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

export default SignUpPage