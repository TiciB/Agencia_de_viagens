import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component{
render(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor: "#e3f2fd"}}>
            <div class="container-fluid">
              <h1 class="navbar-brand">ORUN VIAGENS</h1>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                  
                    <Link to="/" class="nav-link active">HOME</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/destinos" class="nav-link active">DESTINOS</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/promocoes"class="nav-link active">PROMOÇÕES</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/cadastro" class="nav-link active">CADASTRO</Link>
                  </li>
                </ul>
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Pesquisar" aria-label="PESQUISAR" />
                  <button class="btn btn-outline-success" type="submit">PESQUISAR</button>
                </form>
              </div>
            </div>
          </nav>
    )

}
}
export default Header