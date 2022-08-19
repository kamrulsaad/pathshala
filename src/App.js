import Navbar from "./Components/Shared/Navbar";
import {Routes, Route} from 'react-router-dom'
import Home from "./Components/Home/Home";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route index element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
