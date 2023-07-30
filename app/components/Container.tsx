"use client"

import { FC, ReactNode } from "react"

interface ContainerProps {
    children:ReactNode
}

const Container:FC<ContainerProps
> = ({children})=>{
    return (
        <div className=
        {"min-w-[250px] mx-auto xl:px-20 md:px10 sm:px-2 px-4"}>
            {children}
            </div>
    )
}
export default Container