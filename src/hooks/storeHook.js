// src/hooks/use-stores.tsx
import React from 'react'
import { Store } from '../stores'

export const useStores = () => React.useContext(Store)