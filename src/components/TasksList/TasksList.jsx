import React, { useState } from 'react'
import './TasksList.css'
import logo from './images/logo.jpg'
import logo_footer from './images/logo_footer.jpg'
import Mail from './images/Mail.png'
import TG from './images/TG.png'
import VK from './images/VK.png'
import CalendarComponent from './CalendarComponent/CalendarComponent'
import Task from './TaskComponent/Task'
import Statuses from './TaskComponent/Statuses'



export function TasksList(props) {

  const [search_text, setSearch_Text] = useState("")
  const [tasks, setTasks]= useState([
    { 
      id:1,
      task: "Create component1",
      worker: "Anna",
      deadline: "28 марта 2023",
      status: "Done"
    },
    {
      id:2,
      task: "Create component2",
      worker: "Anna",
      deadline: "29 марта 2023",
      status: "Review"
    },
    { 
      id:3,
      task: "Create component3",
      worker: "Anna",
      deadline: "30 марта 2023",
      status: "Reject"
    },
    {
      id:4,
      task: "Create component4",
      worker: "Anna",
      deadline: "31 марта 2023",
      status: "Progress"
    },
  ])
  const [currTasks, setCurrTasks]= useState([...tasks])
  const [currStatus, setCurrStatus]= useState("")
  //const [modalActive, setModalActive] = useState(true)

 const handleSearchInput = (e)=>{
    const value = e.target.value;
    setSearch_Text(value);
  }

const chooseTask = (status) => {
  if(currStatus!==status) {
    setCurrTasks(tasks.filter(elem => elem.status === status))
    setCurrStatus(status)
  }
  else {
    setCurrTasks(tasks)
    setCurrStatus("")
  }
}

  return (
    <div>
      <header>
        <div className="logo_header"><img src={logo}></img></div>
        <h2 className='companyName_header'>Daily Shelf</h2>
        <div className='addAndSearch_container'>
          <button className='addTask_btn'>+</button>
          <div className="search_input_container">
          <input type={'search'} className='search_input' placeholder=' Поиск по задачам' value={search_text} onChange={handleSearchInput}></input>
          </div>      
        </div>
        <button className='profile_btn'>{props.user}</button>
      </header>

      <main>
        <div className="tasksAndFilters_container">
        <Statuses chooseTask={chooseTask}/>
        <div className="tasks_container">
        {currTasks.filter(task => task.task.includes(search_text) || task.worker.includes(search_text)).map(filteredTasks => (
              <Task key={filteredTasks.id} elem={filteredTasks} />
        ))}
        </div>
        </div>
        <div className="calendar">
          <CalendarComponent tasks={tasks}/>
        </div>
      </main>

    <footer>
    <div className="logo_footer"><img src={logo_footer} className='logo_footer'></img></div>

    <div className="companyText_footer">
      <h2 className='companyName_footer'>Daily Shelf</h2>
      <h4 className='companyLinks_footer'>© 2023 Daily Shelf <u>Security</u> | <u>Your Privacy</u> | <u>Terms</u></h4>
    </div>
    <div className="socialmediaLinks">
    
    </div>
    </footer>
    </div>
  )
}

export default TasksList