import { Routes, Route } from "react-router-dom";

import NavigationBar from './components/navigationBar/NavigationBar';
import Home from "./components/home/Home";
import Find from "./components/find/Find";
import Lost from "./components/lost/Lost";
import FormPost from './components/formPost/FormPost';
import Login from './components/login/Login';
import Register from "./components/login/Register.jsx";
import Footer from "./components/footer/Footer";
//json-server --watch db.json --port 3001
function App() {
  return (
    <div>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/perdidos" element={<Lost/>}/>
        <Route path="/encontrados" element={<Find/>}/>
        <Route path="/publicar" element={<FormPost/>}/>
        <Route path="/ingresar" element={<Login/>}/>
        <Route path="/registro" element={<Register/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
