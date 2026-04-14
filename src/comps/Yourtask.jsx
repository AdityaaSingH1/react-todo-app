import React, { useState } from 'react'
import { SquarePen, Trash, CheckCircle2 } from 'lucide-react'

const Yourtask = ({ tasks, taskdone, updateTask, deleteTask }) => {
  const [editingId, setEditingId] = useState(null)
  const [editingText, setEditingText] = useState('')

  return (
    <div>
      <h1 className='text-3xl font-bold mb-4'>All Saved Tasks</h1>
      <p className='mb-4 text-sm text-gray-600'></p>

      {tasks.length === 0 ? (
        <p className='text-gray-600'>No saved tasks yet. Add a task from Home first.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className='mt-2 flex items-center justify-between gap-4 p-3 rounded-lg bg-white shadow-sm'>
            <div className='flex items-center gap-3 flex-1'>
              <input
                type='checkbox'
                checked={task.iscompleted}
                onChange={() => taskdone(task.id)}
              />
              {editingId === task.id ? (
                <input
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className='flex-1 border rounded px-2 py-1'
                />
              ) : (
                <span className={`${task.iscompleted ? 'line-through text-gray-500' : ''} wrap-break-word`}>
                  {task.notes}
                </span>
              )}
            </div>

            <div className='flex gap-2'>
              {editingId === task.id ? (
                <button
                  className='flex items-center gap-1 p-2 bg-green-600 text-white rounded'
                  onClick={() => {
                    updateTask(task.id, editingText)
                    setEditingId(null)
                  }}
                >
                  <CheckCircle2 size={16} /> Save
                </button>
              ) : (
                <button
                  className='flex items-center gap-1 p-2 bg-purple-800 text-white rounded'
                  onClick={() => {
                    setEditingId(task.id)
                    setEditingText(task.notes)
                  }}
                >
                  <SquarePen size={16} /> Edit
                </button>
              )}
              <button
                className='flex items-center gap-1 p-2 bg-red-600 text-white rounded'
                onClick={() => deleteTask(task.id)}
              >
                <Trash size={16} /> Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Yourtask