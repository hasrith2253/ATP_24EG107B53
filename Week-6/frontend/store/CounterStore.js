import {create} from 'zustand'

//create store
export const useCounterStore = create((set) => ({

  // state
  newCounter:0,
  //function to update state
  incrementCounter:()=> set((state) => ({ newCounter: state.newCounter + 1 })),
  decerementCounter:()=> set((state) => ({ newCounter: state.newCounter - 1 })),
  reset:()=>set({ newCounter: 0 })









}))