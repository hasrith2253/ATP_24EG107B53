import {create} from 'zustand'

// create store
export const useCounterStore = create((set) => ({

// state
newCounter:0,
newCounter1:100,
// add user state (name,age,email)
user:{name:"has",email:"has@gmail.com",age:19},
// function to change the email
changeEmail:()=> set(() => ({ ...user,email:"test@gmail.com" })),
// function to change the name and age
changeEmailAndName:()=> set(() => ({ ...user,name:"test",age:20 })),

// function to update state
incrementCounter:()=> set((state) => ({ newCounter: state.newCounter + 1 })),
decerementCounter:()=> set((state) => ({ newCounter: state.newCounter - 1 })),
reset:()=>set({ newCounter: 0 }),
// function to change newCounter to 500
// fuction to decerement newCounter to 500
}))