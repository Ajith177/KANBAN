import React, { useState,createContext } from 'react';
import './Second.css';
export const Theme=createContext(null);

function Second() {

    const[themes,setThemes]=useState("light")

    const toggleTheme=()=>{
        setThemes((curr)=>(curr==="light"?"dark":"light"))
    };

  return (
    <Theme.Provider value={{themes,toggleTheme}}>
    <div className='fullavae' id={themes}>
      <section className="First-section" id={themes}>

<section className="side-bar-section" id={themes}>
    <div className="division-3" id={themes}>

        <p className="paragraph-3">
            ALL BOARDS  (3)
        </p>

        <div className="paragraph-4">
            <img src="folder-holder.png" alt="" className="folder" id="folder-holder"/>
            <h4 className="launch-event">Platform Launch</h4>
        </div>

        <div className="paragraph-5">
            <img src="folder-holder.png" alt="" className="folder" id="folder-holder-1"/>
            <h4 className="launch-event-1">Marketing Plan</h4>
        </div>

        <div className="paragraph-6">
            <img src="folder-holder.png" alt="" className="folder" id="folder-holder-2"/>
            <h4 className="launch-event-2">Road Map</h4>
        </div>

        <div className="paragraph-7">
            <img src="folder-holder.png" alt="" className="folder" id="folder-holder-3"/>
            <h4 className="launch-event-3">+ Create New Board</h4>
        </div>

        <div className="division-3-1">
            <img src="darkModeImgA.png" alt="" className="bright-sun-button"/>

            <label className="switch">
                <input type="checkbox"/>
                <span className="slider"></span>
            </label>

            <img src="darekModeImgB2.png" className="bright-moon-button"/>
        </div>

        <div className="division-3-2">
            <div className="eye-symbol">
                <i className="fa-regular fa-eye-slash"></i>
            </div>
            <p className="paragraph-8">
                Hide Sidebar
            </p>
        </div>
    </div>
</section>

<section  className="segregate-1">
    <div className="division-4" id={themes}>
        <p className="sectioning" id={themes}>
            Todo (3)
        </p>

        <div className="division-4-1" id={themes}>
            <p className="paragraph-9" id={themes}>
                Build UI for Onboarding flow 
            </p>
            <p className="paragraph-10">
                1 of 3 subtasks
            </p>
        </div>
        <br/>

        <div className="division-4-2" id={themes}>
            <p className="paragraph-11">
                Build UI for Search
            </p>
            <p className="paragraph-10">
                0 of 1 subtasks
            </p>
        </div>
        <br/>

        <div className="division-4-3" id={themes}>
            <p className="paragraph-12">
                Build settings UI
            </p>
            <p className="paragraph-10">
                0 of 1 subtasks
            </p>
        </div>
        <br/>

    </div>

    <div className="division-5" id={themes}>
        <p className="sectioning">
            Doing (5 )
        </p>

        <div className="division-5-1" id={themes}>
            <p className="paragraph-13">
                Design settings and search pages
            </p>
            <p className="paragraph-10">
                2 of 3 subtasks
            </p>
        </div>
        <br/>

        <div className="division-5-2" id={themes}>
            <p className="paragraph-14">
                Add account management endpoint
            </p>
            <p className="paragraph-10">
                2 of 3 subtasks
            </p>
        </div>
        <br/>

        <div className="division-5-3">
            <p className="paragraph-15">
                Design onboarding flow
            </p>
            <p className="paragraph-10">
                1 of 3 subtasks
            </p>
        </div>
        <br/>

        <div className="division-5-4">
            <p className="paragraph-16">
                Add search endpoints
            </p>
            <p className="paragraph-10">
                1 of 2 subtasks
            </p>
        </div>
        <br/>

        <div className="division-5-5">
            <p className="paragraph-17">
                Add authentication points
            </p>
            <p className="paragraph-10">
                1 of 2 subtasks
            </p>
        </div>



    </div>

    <div className="division-6">
        <p className="sectioning">
            Done (5)
        </p>


        <div className="division-6-1">
            <p className="paragraph-18">
                Conduct 5 wireframe tests
            </p>
            <p className="paragraph-10">
                1 of 1 subtasks
            </p>
        </div>
        <br/>


        <div className="division-6-2">
            <p className="paragraph-19">
                Create wireframe prototype
            </p>
            <p className="paragraph-10">
                1 of 1 subtasks
            </p>
        </div>
        <br/>

        <div className="division-6-3">
            <p className="paragraph-20">
                Review results of usability tests<br/> and iterate
            </p>    
            <p className="paragraph-10">
                3 of 3 subtasks
            </p>
        </div>
        <br/>

        <div className="division-6-4">
            <p className="paragraph-21">
                Create prototypes and conduct 10 <br/> usability tests with  potential<br/> customers
            </p>
            <p className="paragraph-10">
                2 of 2 subtasks
            </p>
        </div>
        <br/>

        <div className="division-6-5">
            <p className="paragraph-22">
                Market discovery
            </p>
            <p className="paragraph-10">
                1 of 1 subtasks
            </p>
        </div>
        <br/>
    </div>

</section>

</section>


<section className="Board-edits">
        <p className="paragraph-26">
            Edit Board
        </p>
        <p className="paragraph-27">
            Delete Board
        </p>
</section>

<section className="popupmessage-1">
        <p className="title-content">Add new task</p>

        <div className="paragraph-28">
            <label htmlFor="Task" className="tasks" id="tasking">Task Name</label><br/><br/>
            <input type="text"  className="getting-task-name" placeholder="e.g. Take coffee break"/><br/>
        </div>
        <br/>

        <div className="paragraph-29">
            <label  htmlFor="description" className="tasks" id="description">Description</label><br/><br/>
            <textarea type="text" className="getting-address-value"></textarea>
        </div>
        <br/>

        <div className="paragraph-30">
            <label htmlFor="Subtasks" className="tasks" id="subtasks">Subtasks</label><br/><br/>

            <div className="paragraph-30-1">
                <input type="text" className="getting-text-name"/>
                <i class="fa-solid fa-xmark" className="x-mark"></i><br/>
                <br/>
                <div className="paragraph-30-2">

                </div>
                <input type="button" value="+Add new subtasks" className="add-subtask-btn"/> 
            </div>   

        </div>
        <br/>

        <div className="paragraph-31">
            <label htmlFor="current-status" className="tasks">Current status</label><br/><br/>
            <select id="list">
                <option value="Todo">Todo</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
            </select>
        </div>
        <br/>
        <input type="button" value="Create task" id="creation-of-the-task"/>
        <input type="button" value="BACK" id="back-to-the-position"/>

</section>


</div>
</Theme.Provider>
  )
}

export default Second;
