import React, { createContext } from 'react'
import { CounterStore } from './counterStore'

export const store = createContext({
    counter: new CounterStore()
})