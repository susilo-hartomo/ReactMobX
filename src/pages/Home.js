import React, { useContext } from 'react'
import { useStores } from '../hooks/storeHook'

export default function Home() {
    const { counter } = useStores()
    return (
        <div>
            <h1>Home Page</h1>
            {counter.count}
        </div>
    )
}
  