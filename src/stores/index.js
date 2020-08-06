import { createContext } from 'react'
import { CounterStore } from './counterStore'

export const Store = createContext({
    counter: new CounterStore()
})

