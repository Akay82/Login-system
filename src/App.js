import './App.css';
import Login from './Components/Login';
import { BrowserRouter as Router,
  Routes,
  Route,
  Link} from "react-router-dom"
  import SignUp from './Components/SignUp'
function App() {
  return (
   <Router>
    
    <Link to='/'></Link>
    
    
    <Link to='/signup'></Link>
    
    <Routes>
      <Route exact path='/' element={<Login />}></Route>
      <Route exact path='/signup' element={<SignUp />}></Route>
    </Routes>
   </Router>
    
  );
}

export default App;
