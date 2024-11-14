import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from './dojo-logo.png'

const NavBar = () => {
  return (
    <div>
        <nav>
            <Image
            src={logo}
            width={70}
            quality={100}
            placeholder='blur'
            alt='logo'/>
            
            <h1>Dojo Helpdesk</h1>
            <Link href='/'>home</Link>
            <Link href='/contact'>contact</Link>

        </nav>
      
    </div>
  )
}

export default NavBar
