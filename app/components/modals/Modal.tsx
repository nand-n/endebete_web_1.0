'use client'
import { FC, ReactElement, useCallback, useEffect, useState } from "react"
import {IoMdClose} from 'react-icons/io'
import { Button } from "../Button"

interface ModalProps {
    isOpen:boolean
    onClose:()=>void
    onSubmit:()=>void
    title?:string
    body?:ReactElement 
    footer?:ReactElement
    actionlabel:string
    disaabled?:boolean
    secondaryAction?:()=>void
    secondaryLabel?:string
}
export const Modal:FC<ModalProps> =({isOpen ,onClose , onSubmit, title , body , footer ,actionlabel ,disaabled ,secondaryAction ,secondaryLabel })=>{
    const [showModal , setShowModal ] = useState(isOpen)

    useEffect(()=>{
        setShowModal(isOpen)
    },[isOpen])

    const handleClose =useCallback(()=>{
        if(disaabled){
            return
        }
        setShowModal(false)
        setTimeout(()=>{
            onClose()
        })
    },[disaabled ,onClose ])

    const handleSubmit =useCallback(()=>{
         if(disaabled){
            return
         }
         onSubmit()
    },[disaabled ,onSubmit])

    const handleSecondaryAction = useCallback(()=>{
        if(disaabled || !secondaryAction){
            return
        }
        secondaryAction()
    },[disaabled , secondaryAction])
    if(!open){
        return null
    }

    return <>
        <div className="justify-center items-center flex overflow-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
            <div className="relative w-full md:w-w-4/6 lg:w-3/6 xl:-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
                {/* CONTENT */}
                <div className={`translate duration-300 h-full 
                ${showModal ? 'translate-y-0' : 'translate-y-full'}
                ${showModal ? 'opacity-100' : 'opacity-0'}
                `}>
                <div className="translate h-full lg:h-auto
                    md:h-auto
                    border-0
                    rounded-lg
                    shadow-lg
                    relative
                    flex 
                    flex-col
                    w-full 
                    bg-white
                    outline-none
                    focus:outline-none
                 ">
                    {/**HEADER */}
                    <div className="flex 
                        itemms-center 
                        p-6 
                        rounded-t
                        justify-center
                        relative
                        border-b-[1px]
                    ">
                        <button
                        onClick={handleClose}
                         className="p-1 
                        border-0 
                        hover:opacity-70 
                        transition
                        absolute 
                        left-9  
                        ">
                            <IoMdClose size={18}/>
                        </button>
                        <div className="text-lg font-semibold">
                            {title}
                        </div>
                    </div>
                    {/**BODY */}
                    <div className="relative p-6 flex-auto" >
                        {body}

                    </div>
                    {/**FOOTER */}
                    <div className="flex flex-row items-center gap-4 w-full">
                        <Button label="Button" onClick={()=>{}}/>
                    </div>

                 </div>
                </div>
            </div>
        </div>
    </>
}