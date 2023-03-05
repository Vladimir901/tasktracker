import React, { useState } from 'react'
import './Task.css'

function Task(props) {
    
    function changeStatus(currStatus) {
        console.log('You clicked submit.');
      }
  return (
    <div>
        <div className={props.elem.status + "_c container nurito"} >
        <h3 className='nurito'>{props.elem.task}</h3>
        <p className='nurito worker'>{props.elem.worker}</p>
        <p className='nurito'>{props.elem.deadline}</p>
        <div className={props.elem.status + " status_bar nurito"} onClick={changeStatus}>{props.elem.status}</div>
        </div>
    </div>
  )
}

export default Task