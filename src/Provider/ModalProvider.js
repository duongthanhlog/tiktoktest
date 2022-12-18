import {useState, createContext} from 'react'

export const ModalContext = createContext()

function ModalProvider({children}) {
    
   const [openModal, setOpenModal] = useState(false)

   const handleOpenModal = () => {
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const value = {
        openModal,
        handleOpenModal,
        handleCloseModal
    }

    return <ModalContext.Provider value={value}>
                {children}
            </ModalContext.Provider>
}

export default ModalProvider;