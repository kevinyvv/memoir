import Main from './Pages/main';
import Dashboard from './Pages/dashboard';
import Profile from './Pages/profile';
import styles from "./index.css"
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element = {<Main/>}/>
        <Route path='/home' element = {<Dashboard/>}/>
        <Route path='/profile' element = {<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
