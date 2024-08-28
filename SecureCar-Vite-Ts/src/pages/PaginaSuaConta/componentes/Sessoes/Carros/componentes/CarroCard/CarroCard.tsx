import { useState } from "react"

import CarroModal from "../CarroModal/CarroModal"
import { Carro } from "../../../../../../../assets/TiposPadroes/Carro";

type CarroCardProps = {
    nome : string;
    carro : Carro;
}


const CarroCard = ({nome, carro} : CarroCardProps) =>{
    const[show,setShow] = useState(false)


    return(
        <div className="b-primary b-2">
            <button className="hover:bg-primary hover:text-white font-semibold text-xl border-primary border-2 w-20 h-20" onClick={()=>setShow(true)}>{nome}</button>
            <CarroModal carro ={carro} isOpen= {show}><button className="btnClose" onClick={()=>setShow(false)}>X</button></CarroModal>
        </div>
    )
}

export default CarroCard