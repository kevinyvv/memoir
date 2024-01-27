import Main from './Pages/main';
import Dashboard from './Pages/dashboard';
import nav from './Components/nav';
import styles from "./index.css"
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element = {<Main/>}/>
        <Route path='/home' element = {<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
