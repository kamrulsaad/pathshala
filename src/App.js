import Navbar from "./Components/Shared/Navbar";
import {Routes, Route} from 'react-router-dom'
import Home from "./Components/Home/Home";
import { Footer } from "./Components/Shared/Footer";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
