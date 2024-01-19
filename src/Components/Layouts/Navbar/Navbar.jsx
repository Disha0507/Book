import React,{useContext} from 'react'
import styles from './Navbar.module.css'
import '../../../index.css'
import { Link,useNavigate} from "react-router-dom";
import { userContext } from '../../../App';

import { getAuth,signOut } from 'firebase/auth';
import app from '../../../Firebase/Firebase'
import CartIcon from '../../CartIcon/CartIcon';


const Navbar = ({darkTheme,darkText}) => {
 
  const user=useContext(userContext);
  const auth=getAuth(app);
  const navigate=useNavigate();

  const handleLogOut=()=>{
    signOut(auth).then(()=>{
      navigate('/');

    })
    .catch((err)=>{
      console.log(err);
    })
  }

  const showLogInAndSignUp=(

    <nav className={`${styles['nav-links-container']}`}>
                <Link to="/" className={`${darkText ? `${styles['nav-dark-links']}` :`${styles['nav-links']}`}`}>Home</Link>
                <Link to="/books" className={`${darkText ? `${styles['nav-dark-links']}` :`${styles['nav-links']}`}`}>Books</Link>
               <Link to="/login" className={`${darkText ? `${styles['nav-dark-links']}` :`${styles['nav-links']}`}`}>Login</Link>
                <Link to="/signup" className={`${darkText ? `${styles['nav-dark-links']}` :`${styles['nav-links']}`}`}>SignUp</Link>
              
    </nav>

  )

  const  showLogOutAndCart=(
    
    <nav className={`${styles['nav-links-container']}`}>
    <Link to="/" className={`${darkText ? `${styles['nav-dark-links']}` :`${styles['nav-links']}`}`}>Home</Link>
    <Link to="/books" className={`${darkText ? `${styles['nav-dark-links']}` :`${styles['nav-links']}`}`}>Books</Link>
    <a href="/" onClick={handleLogOut} className={`${darkText ? `${styles['nav-dark-links']}` :`${styles['nav-links']}`}`}>Logout</a>
    <Link to="/CartPage" className={`${styles.cart}`}><CartIcon/></Link>
    
    
  
</nav>

  )
  
  return (
    <>
    <section className={`${styles['navbar-container']} ${darkTheme ? `${styles['background-dark'] } ${styles.relative}` :`${styles['background-transparent']}`}` }>
        
        <div className="container flex justify-between justify-center align-center">
            <a href="#" className={`${styles.logo}`}> <span className="text-primary">Book</span>
           worm
            </a>


           { user ? showLogOutAndCart : showLogInAndSignUp}
        </div>
        
        </section>
    </>
  )
}

export default Navbar