import React from "react";
import Header from './Header';
import Footer from "./Footer";
class Cadastro extends React.Component{
    render(){
        return(
            <div>
            <Header />
            <h2>FAÇA SEU CADASTRO</h2>
            <div>   
            <form class="cadastro_cliente">
            <label htmlFor="nome">NOME COMPLETO</label>
            <input type="text" id="nome" placeholder="Escreva aqui seu nome" />
            <div>
            <label  htmlFor="nasc">DATA DE NASCIMENTO</label>
            <input type="date" id="nasc" />
            </div>
            <div>
            <label htmlFor="email">EMAIL</label>
            <input type="text" id="nome" placeholder="Escreva aqui seu email" />
            </div>
            <div>
            <label htmlFor="senha">SENHA</label>
            <input type="password" id="senha" placeholder="Digite sua senha" />
            </div>
            <div>
            <label htmlFor="cpf">CPF</label>
            <input type="number" id="cpf" placeholder="Digite o seu cpf" />
            </div>
            <button type="button" class="btn btn-primary">ENVIAR</button>
        </form>
        </div>
        <Footer />
        </div>
        );
    }
}
export default Cadastro;