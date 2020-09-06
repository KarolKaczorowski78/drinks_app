import React from 'react'
import Home from './pages/home';
import Drinks from './pages/drinks';
import Contact from './pages/contact';
import DrinkDetails from './pages/drink_details';
import ErrorPage from './pages/404';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <>
                <Switch>
                    <Route path='/' exact component={ Home } />
                    <Route path='/drinks' exact component={ Drinks } />
                    <Route path='/drinks/:id/' component={ DrinkDetails } />
                    <Route path='/contact' component={ Contact } />
                    <Route component={ ErrorPage } />
                </Switch>
            </>
        </Router>
    )
}

export default App;
