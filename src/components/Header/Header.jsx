import React from 'react'
import Nav from '../Nav/Nav'

function Header() {
  return (
    <header className='App-header'   >
       <h1 className='App-title' >Feedback!</h1>
        <h3 className='App-description'>Don't forget it!</h3>
        <Nav/>
      </header>
  )
}

export default Header