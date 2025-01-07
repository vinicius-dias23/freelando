import React, { Fragment } from "react";
import PropTypes from "prop-types"

const FormCadastroUsuario = ({ setFormCadastroAberto }) => {
    return (
        <Fragment>
            <form action="">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="password" />
                <label htmlFor="confirmPassword">Confirmar Senha</label>
                <input type="confirmPassword" name="confirmPassword" id="confirmPassword" />
            </form>
            <label
                style={{ cursor: 'pointer',  color: "blue", textDecoration: "underline" }}
                onClick={() => setFormCadastroAberto(false)}>
                    voltar
            </label>
        </Fragment>
    );
}

FormCadastroUsuario.propTypes = {
    setFormCadastroAberto: PropTypes.bool.isRequired
}

export default FormCadastroUsuario;
