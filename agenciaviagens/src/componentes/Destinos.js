import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Salvador from './Salvador.jpg'
import Manaus from './Manaus.jpg'
import Rio from './Rio.jpg'

class Destinos extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <div class="card" style={{width: "18rem"}}>
                <img src= {Salvador} class="card-img-top" alt="Cidade do Salvador" />
                <div class="card-body">
                <h5 class="card-title">Salvador</h5>
                <p class="card-text" style={{textAlign: "justify", padding: "10px", margin: "5px"}}>Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Leite de capivaris, leite de mula manquis sem cabeça.A ordem dos tratores não altera o pão duris..</p>
                <button class="btn btn-primary">Ver mais</button>
               </div>
                </div>
                <div class="card" style={{width: "18rem"}}>
                <img src= {Manaus} class="card-img-top" alt="Cidade de Manaus" />
                <div class="card-body">
                <h5 class="card-title">Manaus</h5>
                <p class="card-text" style={{textAlign: "justify", padding: "10px", margin: "5px"}}>Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Leite de capivaris, leite de mula manquis sem cabeça.A ordem dos tratores não altera o pão duris..</p>
                <button class="btn btn-primary">Ver mais</button>
               </div>
                </div>
                <div class="card" style={{width: "18rem"}}>
                <img src= {Rio} class="card-img-top" alt="Cidade do Rio de Janeiro" />
                <div class="card-body">
                <h5 class="card-title">Rio de Janeiro</h5>
                <p class="card-text" style={{textAlign: "justify", padding: "10px", margin: "5px"}}>Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Leite de capivaris, leite de mula manquis sem cabeça.A ordem dos tratores não altera o pão duris..</p>
                <button class="btn btn-primary">Ver mais</button>
               </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Destinos;