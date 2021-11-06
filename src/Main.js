import { BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFound from './views/NotFound';
import Navbar from './components/Navbar';
import Home from './views/Home';
import PeopleDetails from './components/PeopleDetails';
import VehicleDetails from './components/VehicleDetails';
import PlanetDetails from './components/PlanetDetails';
import injectContext from './store/appContext';


const Main =() =>{
    return (
        <BrowserRouter>
        <Navbar/>
        <Switch> 
        <Route exact path="/" component={Home}/>
        <Route exact path="/PeopleDetails/:id" component={PeopleDetails}/>
        <Route exact path="/VehicleDetails/:id" component={VehicleDetails}/>
        <Route exact path="/PlanetDetails/:id" component={PlanetDetails}/>
        <Route component={NotFound}/>
       
        </Switch>
        </BrowserRouter>

    )
}

export default injectContext(Main);