import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Pedido from "./Pedido";
import Stage from "./Stage";
import Viagem from "./Viagem";
import Condutores from "./ListaCondutores";
import Condutor from "./Condutor";
import Review from "./Review";
import Homepage from "./Homepage";
import Entrar from "./Entrar";
import Registar from "./Registar";
import Perfil from "./Perfil";
import Pagamento from "./Pagamento";
import Atividade from "./Atividade";


const loader = document.querySelector('.loader');

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader = () => loader.classList.add('loader--hide');


class App extends React.Component {

    componentDidMount() {
        this.props.hideLoader();
    }

    render(){
        return(
            <Router>
                <div className="h-100 p-0">
                    <Switch>
                        <Route exact path='/' component={ Homepage}  />
                        <Route exact path='/entrar/' component={ Entrar }  />
                        <Route exact path='/registar/' component={ Registar }  />
                        <Route exact path='/perfil/' component={ Perfil }  />
                        <Route exact path='/home/' component={ Stage }  />
                        <Route exact path='/pedido/' component={ Pedido }  />
                        <Route exact path='/viagem/' component={ Viagem }  />
                        <Route exact path='/condutores/' component={ Condutores }  />
                        <Route exact path='/condutor/' component={ Condutor }  />
                        <Route exact path='/pagamento/' component={ Pagamento }  />
                        <Route exact path='/atividade/' component={ Atividade }  />
                        <Route exact path='/review/' component={ Review }  />
                    </Switch>
                </div>
            </Router>
        );
    };
}

export default App;
