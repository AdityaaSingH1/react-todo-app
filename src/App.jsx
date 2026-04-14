import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './comps/Navbar'
import Mainbody from './comps/Mainbody'
import Yourtask from './comps/Yourtask'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [notes, setNote] = useState('')
  const [tasks, setTasks] = useState([])
  const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('todoTasks')
    if (saved) {
      setTasks(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todoTasks', JSON.stringify(tasks))
  }, [tasks])

  const submitchange = (e) => {
    e.preventDefault()
    const trimmed = notes.trim()
    if (!trimmed) return

    setTasks([...tasks, { id: Date.now().toString(), notes: trimmed, iscompleted: false }])
    setNote('')
  }

  const taskdone = (id) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, iscompleted: !task.iscompleted } : task)))
  }

  const updateTask = (id, newText) => {
    const trimmed = newText.trim()
    if (!trimmed) return
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, notes: trimmed } : task)))
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  return (
    <div className=''>
      <Navbar />
      <div className='flex justify-center mt-5'>
        <div className='w-1/2 h-auto bg-violet-100 p-4'>
          <Routes>
            <Route
              path='/'
              element={
                <Mainbody
                  notes={notes}
                  submitchange={submitchange}
                  setnote={setNote}
                  task={tasks}
                  taskdone={taskdone}
                  updateTask={updateTask}
                  deleteTask={deleteTask}
                  showFinished={showFinished}
                  setShowFinished={setShowFinished}
                />
              }
            />
            <Route
              path='/Task'
              element={<Yourtask tasks={tasks} taskdone={taskdone} updateTask={updateTask} deleteTask={deleteTask} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
