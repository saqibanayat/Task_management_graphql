
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar';
import User from './assets/Pages/User';
import Addser from './assets/Pages/Addser';
import Viewuser from './assets/Pages/Viewuser';
import Updateuser from './assets/Pages/Updateuser';
import TaskList from './assets/Pages/TaskList';

function App() {

  return (
    <>
    <Navbar/>
<Routes>
  <Route path='/' element={<User/>}/>
  <Route path='/adduser' element={<Addser/>}/>
  <Route path='/viewuser/:id*' element={<Viewuser/>}/>
  <Route path='/edituser/:id*' element={<Updateuser/>}/>
  <Route path='/tasks' element={<TaskList/>}/>

 
</Routes>
      
    </>
  )
}

export default App
