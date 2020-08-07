import { createContext } from 'react'
import { CounterStore } from './counterStore'
import { UserStore } from './userStrore'

export const Store = createContext({
    counter: new CounterStore(),
    user: new UserStore()
})

