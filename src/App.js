import './App.css';
import { Routes, Route } from "react-router-dom";

import NavigationBar from './components/navigationBar/NavigationBar';
import Home from "./components/home/Home";
import Find from "./components/find/Find";
import Lost from "./components/lost/Lost";
import FormPost from './components/formPost/FormPost';
import Login from './components/login/Login';
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/perdidos" element={<Lost/>}/>
        <Route path="/encontrados" element={<Find/>}/>
        <Route path="/publicar" element={<FormPost/>}/>
        <Route path="/ingresar" element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
