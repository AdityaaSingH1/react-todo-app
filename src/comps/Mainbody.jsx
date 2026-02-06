import React from 'react'
import Header from './Header'
import Content from './Content'

const Mainbody = ({notes,submitchange,setnote,savenote,setsavenote,task,taskdone}) => {
  return (
    <div className='bg-violet-100'>
        <Header notes={notes} taskdone={taskdone} submitchange={submitchange} setnote={setnote} savenote={savenote} setsavenote={setsavenote} task={task}></Header>
        <Content  notes={notes} taskdone={taskdone} submitchange={submitchange} setnote={setnote} savenote={savenote} setsavenote={setsavenote} task={task}></Content>
    </div>
  )
}

export default Mainbody