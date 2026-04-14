import React from 'react'
import Header from './Header'
import Content from './Content'

const Mainbody = ({ notes, submitchange, setnote, task, taskdone, updateTask, deleteTask, showFinished, setShowFinished }) => {
  return (
    <div className='bg-violet-100'>
      <Header
        notes={notes}
        submitchange={submitchange}
        setnote={setnote}
        showFinished={showFinished}
        setShowFinished={setShowFinished}
      />
      <Content
        task={task}
        taskdone={taskdone}
        updateTask={updateTask}
        deleteTask={deleteTask}
        showFinished={showFinished}
      />
    </div>
  )
}

export default Mainbody