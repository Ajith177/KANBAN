import React,{useState} from 'react';
import './Todo_popup.css';

function Todo_popup() {

  const [total,setTotal]=useState();

  return (
    <div className='complete-all'>

      <div className='complete-1'>
      <h3>Build UI for Onboarding flow</h3>
      <p>1 of 3 subtasks</p>
      </div>

      <div className='complete-2'>

      </div>
     
      
    </div>
  )
}

export default Todo_popup;
