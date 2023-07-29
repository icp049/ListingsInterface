import React from 'react'
import Sidebar from '../MessageComponents/Sidebar'
import Chat from '../MessageComponents/Chat'

const Messages = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Messages;