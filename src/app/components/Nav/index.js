import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <>
    <nav className='h-20
      flex items-center justify-between px-5'>
      <div className=''>
        <Link href="/" className='text-xl font-extrabold'>Matth 25v6</Link>
      </div>
      <Link href="https://www.philippekacou.org" passHref>
      Le site officiel
      </Link>
    </nav>
    </>
  )
}

export default index