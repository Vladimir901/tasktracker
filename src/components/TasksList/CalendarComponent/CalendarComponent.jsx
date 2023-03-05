import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import './CalendarComponent.css'


function CalendarComponent(props) {
  const [date, setDate] = useState(new Date());


  return (    
      <div className='calendar'>
        <Calendar onChange={setDate} value={date} onClickDay={''}/>
      </div>    
  )
}

export default CalendarComponent