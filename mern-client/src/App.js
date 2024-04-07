import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Createbook from './component/Createbook';
import Allbooks from './component/Allbooks';
import UpdateBooks from './component/UpdateBooks';
import Createemployee from './component/Createemployee';
import Calculatesalary from './component/Calculatesalary';
import Allemployee from './component/Allemployee';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route  exact path='/book' element={<Createbook/>}></Route>
      <Route  exact path='/allbooks' element={<Allbooks/>}></Route>
      <Route  exact path='/updatebooks/:bid' element={<UpdateBooks/>}></Route>
      <Route  exact path='/' element={<Createemployee/>}></Route>
      <Route  exact path='/calulatesalary/:eid' element={<Calculatesalary/>}></Route>
      <Route  exact path='/allemployee' element={<Allemployee/>}></Route>
      
      {/* <Route  exact path='/test' element={<Test/>}></Route> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
