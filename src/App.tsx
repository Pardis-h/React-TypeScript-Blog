// import Navbar from "./components/Navbar";
import Layout from "./pages/Layout";
import Routers from "./pages/Routers";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routers />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
