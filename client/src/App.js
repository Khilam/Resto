import './App.css';
import Home from './Component/pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './Component/pages/Admin/dashboard';

function App() {
  return (
    <Router>
    <div className="App">

 
    <button><a a href="/admin">Dashboard</a></button>
 
    <Route path="/" exact component={Home}/>
    <Route  path="/admin" ><Dashboard/></Route>
    </div>
    </Router>
  );
}

export default App;