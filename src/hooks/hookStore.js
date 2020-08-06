import React, {useContext} from 'react'
import { store } from '../stores'

export const useStores = () => useContext(store)