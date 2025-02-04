
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../src/home";
import FormLogin from "../src/login/form_login";
import FormCadastroUsuario from "../src/login/form_cadastro_usuario";
import Freelancer from "../src/freelancer"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/cadastro" element={<FormCadastroUsuario />} />
        <Route path="/freelancer" element={<Freelancer />} />
      </Routes>
    </Router>
  );
}

export default App;
