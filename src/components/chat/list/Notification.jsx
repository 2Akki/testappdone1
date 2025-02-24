import React from 'react'
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify"
export default function Notification() {
  return (
    <div>
      <ToastContainer position='bottom-right'></ToastContainer>
    </div>
  )
}
