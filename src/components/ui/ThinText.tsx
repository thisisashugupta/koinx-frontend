import React from 'react'

function ThinText({children}: {children: string}) {
  return (
    <div className='text-sm font-thin'>
      <p>{children}</p>
    </div>
  )
}

export default ThinText
