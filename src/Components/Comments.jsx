import React from 'react'

function Comments({obj}) {
  return (
    <div className='flex-col border-border my-1 bg-surface'>
        <div className='text-text-secondary font-primary'>{obj.author}-{new Date(obj.timestamp*-1).toLocaleDateString('en-GB')}</div>
        <div className='text-text-primary font-secondary'>{obj.body}</div>
    </div>
  )
}

export default Comments