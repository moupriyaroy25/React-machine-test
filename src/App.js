
import Mynavbar from './components/mynavbar';
import dashboard from './components/dashboard';
import Createads from './components/createads';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Textmediaform from './components/Textmediaform';
import Videomediaform from './components/Videomediaform';

function App() {
  return (
    <Router>
      <Mynavbar/>
      <Routes>
        <Route path='/' Component={dashboard}/>
        <Route path='/createads' Component={Createads}/>
        <Route path='/textmediaform' Component={Textmediaform}/>
        <Route path='/videomediaform' Component={Videomediaform}/>
        
      </Routes>
      
    </Router>
  );
}

export default App;
