import React from 'react'

function App() {
  const getUsers = () => {
    fetch("http://127.0.0.4:2000/user/all")
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }
  return (
    <>
      <h1>REACT APP</h1>

      <button onClick={getUsers}>GET ALL USERS</button>
    </>
  )
}

export default App