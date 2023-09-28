import Image from 'next/image'
import Link from 'next/link'
import List from './components/List'
import Nav from './components/Nav'
import utils from './utils'

export default function Home() {

  return (
    <>
    <Nav></Nav>

    <main className='w-full flex flex-col'>
      <div className="bg-amber-600 w-full py-10 flex items-center px-14">
        <p className='text-4xl font-semibold text-center md:w-4/5 md:mx-auto'>
        « Savez-vous que si vous ne croyez pas au prophète Kacou Philippe, 
        <span className='text-white'> vous irez en enfer après votre mort ? </span>Si quelqu'un ne le sait pas, je l'informe ».
        </p>
      </div>
      
      
      
      <div className=''>
        <List className="" laListe={utils.liste} lien="/theme/" index={true}></List>
      </div>
    </main>
    </>
  )
}
