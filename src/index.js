import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CurrentTask from './components/CurrentTask/CurrentTask';
import TasksList from './components/TasksList/TasksList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TasksList user='Anna'/>
    {/* <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>  */}
  </React.StrictMode>
);

