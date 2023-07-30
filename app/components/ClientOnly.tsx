'use client'

import { FC, ReactNode, useEffect, useState } from "react"

interface ClientOnlyProps{
    children:ReactNode
}
export const ClientOnly: FC< ClientOnlyProps >=({children})=>{
    const [hasMounted , setHasMounted] =useState(false)
    useEffect(()=>{
        setHasMounted(true)
    },[])
    return (
        <div className="">
            {children}
        </div>
    )
}