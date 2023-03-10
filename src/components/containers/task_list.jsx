import React from 'react'
import { LEVELS } from '../../models/levels.enum.js'
import { Task } from '../../models/task.class.js'
import TaskComponent from '../pure/task.jsx'

function TaskListComponent(props) {
  
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)

    /*const changeState = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }*/

    return (
        <div>
            <div>
                <h1>
                    Your Tasks:
                </h1>
            </div>
            { /* TODO: aplicar un For/map para renderizar una lista*/}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
  )
}


export default TaskListComponent
