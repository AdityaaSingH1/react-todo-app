import React, { useState } from 'react'
import { SquarePen, Trash, CheckCircle2 } from 'lucide-react'

const Content = ({ task, taskdone, updateTask, deleteTask, showFinished }) => {
  const [editingId, setEditingId] = useState(null)
  const [editingText, setEditingText] = useState('')

  const visibleTasks = showFinished ? task : task.filter((item) => !item.iscompleted)

  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Your Todos</h1>

      {visibleTasks.length === 0 ? (
        <p className='text-gray-600'>No tasks to show.</p>
      ) : (
        visibleTasks.map((elem) => (
          <div key={elem.id} className='mt-2 flex items-center justify-between gap-4 p-3 rounded-lg bg-white shadow-sm'>
            <div className='flex items-center gap-3 flex-1'>
              <input
                type='checkbox'
                checked={elem.iscompleted}
                onChange={() => taskdone(elem.id)}
              />
              {editingId === elem.id ? (
                <input
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className='flex-1 border rounded px-2 py-1'
                />
              ) : (
                <span className={`${elem.iscompleted ? 'line-through text-gray-500' : ''} wrap-break-word`}>
                  {elem.notes}
                </span>
              )}
            </div>

            <div className='flex gap-2'>
              {editingId === elem.id ? (
                <button
                  className='flex items-center gap-1 p-2 bg-green-600 text-white rounded'
                  onClick={() => {
                    updateTask(elem.id, editingText)
                    setEditingId(null)
                  }}
                >
                  <CheckCircle2 size={16} /> Save
                </button>
              ) : (
                <button
                  className='flex items-center gap-1 p-2 bg-purple-800 text-white rounded'
                  onClick={() => {
                    setEditingId(elem.id)
                    setEditingText(elem.notes)
                  }}
                >
                  <SquarePen size={16} /> Edit
                </button>
              )}
              <button
                className='flex items-center gap-1 p-2 bg-red-600 text-white rounded'
                onClick={() => deleteTask(elem.id)}
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

export default Content