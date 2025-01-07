import React, { Fragment } from "react";
import PropTypes from 'prop-types';

const FormLogin = ({ setFormCadastroAberto }) => {
    return (
        <Fragment>
            <form action="">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="password" />
            </form>
            <label
                style={{ cursor: 'pointer',  color: "blue", textDecoration: "underline" }}
                onClick={() => setFormCadastroAberto(true)}>
                    Não tem login ainda? Cadastre-se
            </label>
        </Fragment>
    )
}

FormLogin.propTypes = {
    setFormCadastroAberto: PropTypes.bool.isRequired
}

export default FormLogin;
