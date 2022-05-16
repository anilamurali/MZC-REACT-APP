import React, { useState } from 'react'

const Profile = () => {
    var [name,setName]=useState("Anila Murali")  
    const changeName = () => {
        setName(
            name="Anandu"
        )
    }

  return (
    <div>
        Logged in as {name}
    <button onClick={changeName} className='btn btn-success'>Change Name</button>
    </div>
  )
}

export default Profile