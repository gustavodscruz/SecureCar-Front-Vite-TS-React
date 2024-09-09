import { useState } from "react"
import FormLogin from "./componentes/FormLogin/FormLogin"
import FormRegistro from "./componentes/FormRegistro/FormRegisto"


const PaginaRegistroLogin = () => {

    const [conteudo, setConteudo] = useState('Cadastro')

    const lista_user: Usuario[] = []

    type Usuario = {
        Nome: string;
        Email: string;
        Senha: string;
        CPF: string;
        Endereco: string;
        CEP: string;
        Telefone: string;
    };


    function cadastrar(inputNome: string, inputEmail: string, inputSenha: string, inputSenhaAux: string, inputCPF: string, inputEndereco: string, inputCEP: string, inputTelefone: string):void {
            const usuario: Usuario = {
                Nome : inputNome,
                Email: inputEmail,
                Senha: inputSenha,
                CPF: inputCPF,
                Endereco : inputEndereco,
                CEP: inputCEP,
                Telefone: inputTelefone
            };
            lista_user.push(usuario)
            console.log(usuario)
    }

    let conteudoChanger = () => {
        switch (conteudo) {
            case 'Cadastro':
                return <FormRegistro onSubmit={cadastrar} />
            case 'Login':
                return <FormLogin />
        }
    }


    return (
        <div className="h-auto flex flex-col items-center mt-6 w-full pb-20">
            <div className="border-2 rounded-xl shadow-xl p-4 h-auto tela:w-[35rem] tablet:w-[26rem]">
                <div className="flex justify-around">
                    <button className={`text-lg font-semibold w-2/5 rounded-xl p-3 border-2 border-primary shadow-xl hover:bg-primary hover:text-white ${conteudo == "Cadastro" ? "bg-primary text-white" : ""}`} onClick={() => setConteudo('Cadastro')}>Cadastrar-se</button>
                    <button className={`text-lg font-semibold w-2/5 rounded-xl p-3 border-2 border-primary shadow-xl hover:bg-primary hover:text-white ${conteudo == "Login" ? "bg-primary text-white" : ""}`} onClick={() => setConteudo('Login')}>Acessar Conta</button>
                </div>
                {conteudoChanger()}
            </div>
        </div>
    )
}

export default PaginaRegistroLogin