import {} from 'react'
import Header from './components/LastProject/Header'
import { Routes, Route } from 'react-router-dom'
import Products from './components/LastProject/Products'
import ProductDetails from './components/LastProject/ProductDetails'
import TodoApp from './components/TodoApp'
import Counter from './components/Counter'

const App = () => {
  return (
    <>

    <Header/>

    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/products/:id' element={<ProductDetails/>}/>
      <Route path='/TodoApp' element={<TodoApp/>}/>
      <Route path='Counter' element={<Counter/>}/>
    </Routes>

    </>
  )
}

export default App













// import { Routes, Route } from "react-router-dom"
// import Home from "./components/Home"
// import About from "./components/About"
// import SignUp from "./components/SignUp"
// import NavBar from "./components/NavBar"
// import Dashboard from "./components/Dashboard"
// import DashProfile from "./components/DashProfile"
// import DashSetting from "./components/DashSetting"

// const App = () => {
//   return (
//     <>
//       <NavBar/>
      
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/signup" element={<SignUp/>}/>
//         <Route path="/dashboard" element={<Dashboard/>}>
//           <Route path="profile" element={<DashProfile/>}/>
//           <Route path="settings" element={<DashSetting/>}/>
//         </Route>
//       </Routes>
//     </>
//   )
// }

// export default App