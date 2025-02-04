
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormLogin from "../src/login/form_login";
import FormCadastroUsuario from "../src/login/form_cadastro_usuario";
import HomePage from "../src/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<FormLogin />} />
        <Route path="/cadastro" element={<FormCadastroUsuario />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
