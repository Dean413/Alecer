import { useEffect, useState } from "react"

const Modal = () => {
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        setShowModal(true)
    }, [])
    
    return (
        <>
            {showModal &&  (
                <div className="fixed top-0 left-0 w-full h-full center flex z-50 items-center justify-center bg-black/50">
                <div className="bg-white p-8 w-80 center rounded-3xl">
                    <p className="text-center">This is a UI demo. To access the dashboard page. please click sign up</p>
                    <button className="bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-xl mt-4 mx-auto justify-center flex" onClick={() => setShowModal(false)}>Ok</button>
                </div>
                
                </div>
            )}
        </>    
    )
}

export default Modal