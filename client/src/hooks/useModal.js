import React, { useState } from 'react'

const useModal = () => {
    const [isOpen,setIsOpen] = useState()
    const open = ()=> setIsOpen(true)
    const close = ()=> setIsOpen(false)
    return [isOpen,open,close] 
}

export default useModal
