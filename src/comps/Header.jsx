import React from 'react'

const Header = ({ notes, submitchange, setnote, showFinished, setShowFinished }) => {
  return (
    <div className='w-full'>
      <h1 className='text-xl font-bold w-full flex justify-center'>iTask - Manage your todos at one place</h1>

      <p className='text-2xl px-2 mt-4'>Add a Todo</p>

      <form onSubmit={submitchange} className='flex flex-col gap-3'>
        <div className='flex items-center gap-2'>
          <input
            type='text'
            placeholder='Add a Task'
            value={notes}
            className='flex-1 bg-white rounded-3xl h-10 px-4 text-lg'
            onChange={(e) => setnote(e.target.value)}
          />
          <button className='h-10 px-4 rounded-3xl bg-purple-700 text-white'>Save</button>
        </div>

        <label className='flex items-center gap-2 text-sm'>
          <input type='checkbox' checked={showFinished} onChange={() => setShowFinished((prev) => !prev)} />
          <span className='font-semibold'>Show Finished</span>
        </label>
      </form>

      <hr className='border-t-3 border-black my-8 w-4/5 mx-auto' />
    </div>
  )
}

export default Header