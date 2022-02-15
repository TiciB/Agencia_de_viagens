import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Bonito from './Bonito.jpg'
import Gramado from './Gramado.jpeg'
class Promo extends React.Component{
    render(){
        return(
        <div>
        <Header />
        <div class="card" style={{width: "18rem"}}>
                <img src= {Bonito} class="card-img-top" alt="Cidade de Bonito" />
                <div class="card-body">
                <h5 class="card-title">Bonito</h5>
                <p class="card-text" style={{textAlign: "justify", padding: "10px", margin: "5px"}}>Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Leite de capivaris, leite de mula manquis sem cabeça.A ordem dos tratores não altera o pão duris..</p>
                <button class="btn btn-primary">Ver mais</button>
               </div>
                </div>
                <div class="card" style={{width: "18rem"}}>
                <img src= {Gramado} class="card-img-top" alt="Cidade de Gramado" />
                <div class="card-body">
                <h5 class="card-title">Gramado</h5>
                <p class="card-text" style={{textAlign: "justify", padding: "10px", margin: "5px"}}>Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Leite de capivaris, leite de mula manquis sem cabeça.A ordem dos tratores não altera o pão duris..</p>
                <button class="btn btn-primary">Ver mais</button>
               </div>
                </div>
        <Footer />
        </div>
        )
    }
}
export default Promo;