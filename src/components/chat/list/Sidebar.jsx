import React from 'react'
import "./sidebar.css"
import Userinfo from './Userinfo'
import Chatlist from './Chatlist'
export default function Sidebar() {
  return (
    <div className='sideuserbar'>
    <Userinfo></Userinfo>
    <Chatlist></Chatlist>
    </div>
  )
}
