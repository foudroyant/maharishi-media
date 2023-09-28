"use client"

import Link from 'next/link'
import React from 'react'
import {useState} from 'react'

const list = (props) => {

    useState
    const laListe = props.laListe
    const [liste, setListe] = useState([])
//<img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://img.freepik.com/free-photo/young-brunette-woman-lying-bed_273609-21433.jpg?size=626&ext=jpg&uid=R26917144&ga=GA1.2.498130083.1663108414&semt=ais" alt="" />
  return (
    <><ul role="list" class="divide-y md:w-2/3 mx-auto px-10 divide-gray-100">
        {laListe.map((element, index)=>{
            let lien=props.lien
            if(props.index==true){
                lien+=index
            }
            return (
                <>
                <li class="flex justify-between gap-x-6 py-5">
                    <Link href={lien} class="flex gap-x-4">
                        
                        <div class="min-w-0 flex-auto">
                            <p class="text-sm font-semibold leading-6 text-gray-900">{element.label}</p>
                            <p class="mt-1 text-xs leading-5 text-gray-500">{element.description}</p>
                        </div>
                    </Link>
                </li>
                </>
            )
        })}
    </ul>
    </>
  )
}

export default list