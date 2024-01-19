import React,{useState,useEffect,createContext} from "react";
import { Routes,Route, BrowserRouter} from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import BookPage from "./Pages/BookPage/BookPage";
import BookDetails from "./Pages/BookDetailsPage/BookDetails";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import app from "./Firebase/Firebase";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import CartPage from "./Pages/CartPage/CartPage";
import ScrolToTop from "./Components/util/ScrolToTop";
import SearchPage from "./Pages/SearchPage/SearchPage";

export const userContext=createContext({});
export const CartContent=createContext([]);



const App=()=>{

  const [authentication,setAuthentication]=useState(null);
  const [CartItem,setCartItem]=useState([]);
  const [totalAmount,setTotalAmount]=useState(0);
  const auth=getAuth(app)


  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user)
      {
        setAuthentication(user)
      }
      else{
        setAuthentication(null)
      }
      

    })

  })

    useEffect(()=>{
      let total=0;
      CartItem.forEach((item)=>{
        console.log(item.price)
        total=total+parseInt(item.price);
        console.log(total)

      })
      setTotalAmount(total);
    },[])

  return(
    <>
   
    <userContext.Provider value={authentication}>
      <CartContent.Provider value={{CartItem,totalAmount,setCartItem}}>
       
      <BrowserRouter>
      <ScrolToTop>
      <Routes>
        {/*Static Routing*/}
      
        <Route path="/" element={<Home/>} />
        <Route path="/books" element={<BookPage/>} />
        <Route path="/CartPage" element={<CartPage/>} />
        <Route path="/search" element={<SearchPage/>} />

        {/*Dynamic Routing*/}
        <Route path="/book-details/:id" element={<BookDetails/>} />

        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />

      </Routes>

      </ScrolToTop>
      </BrowserRouter>
      </CartContent.Provider>
    </userContext.Provider>
   
    </>
  )
}

export default App