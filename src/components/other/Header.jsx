import React, { useState, useEffect } from 'react'

const Header = (props) => {
  const [username, setUsername] = useState('')

  // useEffect(() => {
  //   const storedUser = localStorage.getItem('loggedInUser')
  //   if (storedUser) {
  //     setUsername(storedUser) // Set username from localStorage if available
  //   } else {
  //     setUsername('Admin') // Default username if none is found
  //   }
  // }, []) // Empty dependency array ensures this runs only once when the component mounts

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '') // Clear the stored username
    props.changeUser('') // Notify parent component
    setUsername('Admin') // Reset to default after logout
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{username}💀</span>
        {/* <span className='text-3xl font-semibold'>{username}💀</span> */}
      </h1>
      <button
        onClick={logOutUser}
        className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
