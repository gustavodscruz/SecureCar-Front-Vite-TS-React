import Botao from "@/componentes/Botao/Botao";

export default function Erro() {
    return (
        <div className="flex flex-col items-center border  ">
            <h1 className="text-3xl font-bold">OPS! Parece que algo deu errado!</h1>
            <h3 className="text-xl font-bold">Você pode tentar resolver isso clicando <br /> em algum dos links acima ou no <br /> botão abaixo!</h3>
            <Botao />
            <h1>Caso isso não funcione verifique a sua conexão com a iternet!</h1>
        </div>
    );
}