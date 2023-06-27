import React from 'react'

function DashboardPage({currentUser, setCurrentUser}) {
  return (
    <div>
        <p>Hello {currentUser.email} your are {currentUser.isAdminValue ? 'an Admin' : 'a user'}</p>
        <button onClick={() => setCurrentUser('')} >Logout</button>
    </div>
  )
}

export default DashboardPage