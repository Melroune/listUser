import React from 'react'
import Button from './Button.js'

const User = ({ name, id, add }) => {
  return (
    <div>
      <span>{ name }</span>
      <Button onClick={() => add(id)}>ADD</Button>
    </div>
  )
}

export default User
