import React from 'react';
import './Popup.css';

function Popup(props) {
  return (props.trigger)?(
    <div className='popup-page-complete'>
        <h3 className='black-popup'>Add New Task</h3>
        <label className='grey-popup'>Task Name</label>
        <input type="text" className='input-popup' placeholder="e.g.Take coffee break"/><br/>
        <label className='grey-popup'>Description</label>
        <textarea type="text" className='textarea-popup' placeholder='e.g.Its always good to take a break. This 15 minutes break will recharge the batteries a little'/> <br/>
        <label className='grey-popup'>Subtasks</label>
        <div className='popup-xmark'>
        <input type="text"/>
        <i className="fa-solid fa-x" />
        </div>
        <button className='button-popup' onClick={()=>props.setTrigger(false)}>+Add New Subtask</button>
        <p className='grey-popup'>Current Status</p>
        <select>
          <option className='option-popup'>Todo</option>
          <option className='option-popup'>Doing</option>
          <option className='option-poup'>Done</option>
        </select>
        {props.children}
    </div>
  ):"";
}

export default Popup
