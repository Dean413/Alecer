import { create } from "zustand";

const StateManageMentStore = create((set) => ({
    open: false,
    setOpen: (open) => set(() => ({open})),

    toggleOpen: () => set ((state)=> ({
        open: !state.open
    }))

    
}))

export default StateManageMentStore

