import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './componentes/Home';
import Cadastro from './componentes/Cadastro';
import Destinos from './componentes/Destinos';
import Promo from './componentes/Promo';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Switch>
     <Route exact path="/" component={ Home }/>
     <Route path="/cadastro" component={ Cadastro }/>
     <Route path="/destinos" component={ Destinos } />
     <Route path="/promocoes" component={ Promo } />
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
