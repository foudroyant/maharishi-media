import React from 'react'
import Nav from '../../components/Nav'
import utils from '../../utils'

const page = ({params}) => {
  const id = Number.parseInt(params.id)
  return (
    <>
      <Nav></Nav>
      
    <main>
      <h1 className='text-center text-2xl font-extrabold'>{utils.liste[id]["label"]}</h1>
      <><ul role="list" class="divide-y md:w-2/3 mx-auto px-10 divide-gray-100">
        {utils.contenu[id]["versets"].map((element, index)=>{
            
            return (
                <>
                <li class="flex justify-between gap-x-6 py-5">
                    <div class="flex gap-x-4">
                        
                        <div class="min-w-0 flex-auto">
                            <p class="text-sm font-semibold leading-6 text-gray-900">{element.label}</p>
                            <p class="mt-1 text-xs leading-5 text-gray-500">{element.texte}</p>
                        </div>
                    </div>
                </li>
                </>
            )
        })}
    </ul>
    </>
    </main>
    </>
  )
}

export default page