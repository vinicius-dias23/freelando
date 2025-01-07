import React, { Fragment, useState } from "react";
import FormLogin from "./form_login";
import FormCadastroUsuario from "./form_cadastro_usuario";

const Login = () => {
    const [formCadastroAberto, setFormCadastroAberto] = useState(false);
    return (
        <Fragment>
            {!formCadastroAberto ?
                <FormLogin setFormCadastroAberto={setFormCadastroAberto} /> :
                <FormCadastroUsuario setFormCadastroAberto={setFormCadastroAberto} />}
        </Fragment>
    )
}

export default Login;