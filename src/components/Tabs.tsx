import React from 'react'

function Tabs() {
  return (
    <div className='mt-8 mb-6'>
      <div id="tabs" className="remove-scrollbar px-4 flex space-x-8 font-medium overflow-auto">
        <div className='flex flex-col gap-2'>
          <p className='text-blue-600'>Overview</p>
          <div className='h-1 w-9 bg-blue-600 w-full' />
        </div>
        <div>Fundamentals</div>
        <div className='min-w-max'>News Insights</div>
        <div>Sentiments</div>
        <div>Team</div>
        <div>Technicals</div>
        <div>Tokenomics</div>
      </div>
      <div className='px-4'><hr /></div>
    </div>
  )
}

export default Tabs
