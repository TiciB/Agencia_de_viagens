import React from "react";
import pagamento from './pagamento.png';

class Footer extends React.Component{
    render() {
        return(
        <div>
            <center>
            <h4>FORMAS DE PAGAMENTO</h4>
            <img src={ pagamento }alt="Formas de pagamento" width="450px" />
        </center>
        <center style={{fontFamily: "monospace", color: "purple"}}>&copy;Tici Bezerra</center>
        </div>    
        
        );
    }
}
export default Footer;