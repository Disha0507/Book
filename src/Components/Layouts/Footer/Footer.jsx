import React,{useRef} from 'react'
import style from './Footer.module.css'
import emailjs from '@emailjs/browser'

const Footer = () => {
  const form=useRef();
  const serviceId="service_0qyg4bf";
  const templetId ="template_ju6dmp8";
  const publicKey="JnhTax-XtUmIZcRj1"

  const handleSubmit=(e)=>{
    e.preventDefault();
   emailjs.sendForm(serviceId,templetId,form.current,publicKey)
   .then((response)=>{
    console.log(response.text)
   })
   .catch((error)=>{
     console.log(error.text)
   })
   e.target.reset();
  }
  return (
    <>
    <section className={`${style['footer-container']}`}>
         <div className={`${style.container}`}>
          <h2 >If you have any quaries feel free to us here.</h2>

          <form onSubmit={handleSubmit} ref={form} className={`${style['footer-form']}`} >
              <div className={`${style['form-group']}`}>
                <label htmlFor="name" className={`${style['form-label']}`}> Name: </label>
                <input type="text" name="user_name" id="name" placeholder='Enter your name' className={`${style['form-input']}`}/>
              </div>

              <div className={`${style['form-group']}`}>
              <label htmlFor="email" className={`${style['form-label']}`}> E-mail: </label>
                <input type="email" name="user_email" id="email" placeholder='Enter your Email' className={`${style['form-input']}`}/>
              </div>

              <div className={`${style['form-group']}`}>
              <label htmlFor="query" className={`${style['form-label']}`}> Query: </label>
                <textarea id="query" name="message" placeholder='Enter your Query' className={`${style['form-input']}`}></textarea>
              </div>

              <div className={`${style['form-group']}`}>
                <input type='submit' value="submit" className={`${style['form-submit']}`}/>
              </div>
          </form>
          <p>&copy;2024 BooWorm.All rights Reserv</p>
         </div>
    </section>
    </>
  )
}

export default Footer