import Link from 'next/link'
import React from 'react'

const MainNav = () => {
  return (
    <div className='flex gap-10 p-6'>
      <Link href={'/mainlayout/home'}>Home Page</Link>
      <Link href={'/mainlayout/contact'}>Contact Page</Link>
      <Link href={'/mainlayout/products'}>Products Page</Link>


    </div>
  )
}

export default MainNav
