
import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const Button = ({text}) => {
  return (
    <button>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="like"><path fill="#1565C0" d="M0 7.5v7a.5.5 0 0 0 .5.5H5V7H.5a.5.5 0 0 0-.5.5z"></path><path fill="#BBDEFB" d="M14 6h-4V3c0-1.103-.897-2-2-2H6.5a.5.5 0 0 0-.5.5v2.367L4.066 7.252A.493.493 0 0 0 4 7.5v7a.5.5 0 0 0 .5.5h8.025a2 2 0 0 0 1.827-1.188l1.604-3.609A.491.491 0 0 0 16 10V8c0-1.103-.897-2-2-2z"></path></svg>
    {text}
   </button>
  )
}

root.render(
  <React.Fragment>
    <Button text="Like" />
    <Button text="Dislike" />
  </React.Fragment>
)



