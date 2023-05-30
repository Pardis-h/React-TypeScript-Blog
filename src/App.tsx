import Navbar from "./components/Navbar";
import Routers from './pages/Routers'
import { BrowserRouter } from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
      <Navbar/>
      <Routers/>
    </BrowserRouter>
  )
}

export default App
