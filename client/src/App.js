import "./App.css";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbaar from "./components/Navbaar";
import Home from "./page/Home";
import Productdesc from "./page/Productdesc";
import Cart from "./page/Cart";
import Register from "./page/Register";
import Login from "./page/Login";
import Admin from "./page/Admin"
import Orders from "./page/Orders"
import OrderInfo from "./page/OrderInfo"
import Profile from "./page/Profile";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbaar />
      <Switch>
      <Route path='/' component={Home} exact  />
      <Route path='/product/:id' component={Productdesc}  />
      <Route path='/cart' component={Cart} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/orders'  component={Orders} />
      <Route path='/orderinfo/:orderid' component={OrderInfo} />
      <Route path='/profile'  component={Profile} />
      <Route path= '/admin' component={Admin} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
