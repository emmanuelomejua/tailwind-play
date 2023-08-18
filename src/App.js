import { Routes, Route } from 'react-router-dom'
import Topbar from './comps/topbar/Topbar';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Update from './pages/update/Update';

function App() {
  return (
    <main>
      <Topbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit' element={<Update/>}/>
      </Routes>
    
    </main>
  );
}

export default App;
