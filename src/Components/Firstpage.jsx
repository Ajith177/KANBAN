import React, { useState,useEffect } from 'react';
import "./Firstpage.css";
import Popup from '../PopupComponents/Popup';


function Firstpage() {

    const [buttontrigger,setButtonTrigger]=useState(false);

    useEffect(() => {
        let handler=()=>{
            setButtonTrigger(false);
        }
        document.addEventListener("mouseup",handler)
    },[])

  return (
    <div className='complete'>
         <section className="top-section">

<div className="division-1">

    <img className="top-three-lines" alt="" src="Kanban-lines-white.png"/>
    <p className="paragraph-1">kanban</p>
</div>

<div className="division-2">
    <div className="division-2-1">
        <p className="paragraph-2">Platform Launch</p>
    </div>

    <div className="division-2-2">
       
        <button className='Adding-new-task' onClick={()=>setButtonTrigger(true)} >+Add New Task</button>
        
        <div className="dot">
            <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
    </div>

</div>

</section>
<Popup trigger={buttontrigger} setTrigger={setButtonTrigger}>
</Popup>

</div>
  )
}

export default Firstpage


