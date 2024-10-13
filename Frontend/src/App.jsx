import { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Header from './Components/Navbar/Header.jsx'
import Sidebar from './Components/Navbar/Sidebar.jsx'
import { ThemeProvider } from '@material-tailwind/react'
import { themeContext } from './context/theme.context.js'
import { Router,Route,BrowserRouter, Routes } from 'react-router-dom'
import Cart from './Components/Cart/cart.jsx'
import Home from './Components/Home/home.jsx'
import PlaceOrder from './Components/PlaceOrder/placeOrder.jsx'
import Login from './Components/loginsignup/login.jsx'
import Verify from './Components/verify/verify.jsx'
import Orders from './Components/Orders/orders.jsx'
import Header1 from './Components/Navbar/Header1.jsx'
import LastHeader from './Components/Navbar/LastHeader.jsx'
import StoreContextProvider from './context/store.context.jsx'
import Footer from './Components/Footer/Footer.jsx'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [navbarVisible, setNavbarVisible] = useState(true)
  const [showLogin,setShowLogin] = useState(false)
  const [theme,setTheme] = useState('light')
  useEffect(()=>{                                        //to use that effect this function us necessary
    setTheme(localStorage.getItem('theme')?localStorage.getItem('theme'):'light')              //to get items from browser localstorage it is similar to dictionary in python
    document.documentElement.className = theme;
  },[theme])

  return (
    <>
    <themeContext.Provider value={{theme,setTheme}}>
      <ToastContainer/>
      <div className={theme==='dark'?'bg-black' : null}>
      <BrowserRouter>
      <StoreContextProvider>
        {showLogin?<Login setShowLogin={setShowLogin}/>:null}
        <div className={`flex items-center bg-amber-400 w-full justify-between`}>
          <Header setShowLogin={setShowLogin}/>
        </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
      </StoreContextProvider>

      </BrowserRouter>
      </div>
      <Footer/>
    </themeContext.Provider>
    </>
  )
}

export default App
